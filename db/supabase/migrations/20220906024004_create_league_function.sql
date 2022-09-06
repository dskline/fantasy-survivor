create table api_tokens
(
    id    uuid primary key DEFAULT uuid_generate_v4(),
    owner uuid not null references profiles (id),
    name  text not null,
    token text not null
);
ALTER TABLE api_tokens ADD CONSTRAINT api_tokens_owner_name_key UNIQUE (owner, name);

ALTER TABLE IF EXISTS public.api_tokens
    ENABLE ROW LEVEL SECURITY;

drop function if exists create_league;
create or replace function create_league(season_id uuid, format_id text, ruleset_id uuid, title text DEFAULT '',
                                         rule_data json DEFAULT null, owner_id uuid DEFAULT null)
    returns text
    language plpgsql
as
$$
declare
    new_ruleset_id   uuid := create_league.ruleset_id;
    new_league_id    uuid;
    revalidate_token text;
    owner_id         uuid := coalesce(create_league.owner_id, auth.uid());
begin
    if (owner_id is null)
    then
        raise exception 'owner_id must be specified';
    end if;
    if (create_league.rule_data is not null)
    then
        insert into rulesets(data, created_by)
        values (create_league.rule_data, owner_id)
        returning id into new_ruleset_id;
    end if;

    insert into leagues(title, season, "format", ruleset, created_by)
    values (create_league.title, create_league.season_id, create_league.format_id, new_ruleset_id, owner_id)
    returning id into new_league_id;

    insert into league_participants(participant, league)
    values (owner_id, new_league_id);

    select token into revalidate_token from api_tokens where name = 'REVALIDATE_TOKEN' LIMIT 1;
    if (revalidate_token)
    then
        perform net.http_get('https://fantasy-survivor.com/api/revalidate?path=/leagues/' || new_league_id || '&secret=' || revalidate_token,'{}'::jsonb,'{}'::jsonb,10000);
    end if;

    return new_league_id;
end;
$$;
