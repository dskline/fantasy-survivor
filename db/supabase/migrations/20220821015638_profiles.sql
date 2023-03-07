CREATE TABLE IF NOT EXISTS public.profiles
(
    id            uuid                                           NOT NULL,
    email         character varying COLLATE pg_catalog."default" NOT NULL,
    display_name  character varying COLLATE pg_catalog."default",
    thumbnail_src character varying COLLATE pg_catalog."default",
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT profiles_id_fkey FOREIGN KEY (id)
        REFERENCES auth.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
);

-- populate the profiles table with users from auth.users
INSERT INTO public.profiles (id, email)
    SELECT id, email
    FROM auth.users;

create or replace function public.handle_new_user()
    returns trigger as
$$
begin
    insert into public.profiles (id, email)
    values (new.id, new.email);
    return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
    after
        insert
    on auth.users
    for each row
execute procedure public.handle_new_user();

ALTER TABLE IF EXISTS public.profiles
    ENABLE ROW LEVEL SECURITY;

-- Change user constraints to use the new profile table
ALTER TABLE IF EXISTS public.leagues
    DROP CONSTRAINT leagues_created_by_fkey;
ALTER TABLE IF EXISTS public.leagues
    ADD CONSTRAINT leagues_created_by_fkey FOREIGN KEY (created_by)
        REFERENCES public.profiles (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE RESTRICT;

ALTER TABLE IF EXISTS public.rulesets
    DROP CONSTRAINT rulesets_created_by_fkey;
ALTER TABLE IF EXISTS public.rulesets
    ADD CONSTRAINT rulesets_created_by_fkey FOREIGN KEY (created_by)
        REFERENCES public.profiles (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE RESTRICT;

ALTER TABLE IF EXISTS public.league_participants
    DROP CONSTRAINT league_participants_participant_fkey;
ALTER TABLE IF EXISTS public.league_participants
    ADD CONSTRAINT league_participants_participant_fkey FOREIGN KEY (participant)
        REFERENCES public.profiles (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE;

ALTER TABLE IF EXISTS public.user_roles
    RENAME COLUMN user_id TO "user";
ALTER TABLE IF EXISTS public.user_roles
    RENAME COLUMN role_id TO role;

ALTER TABLE IF EXISTS public.user_roles
    DROP CONSTRAINT user_roles_user_id_fkey;;
ALTER TABLE IF EXISTS public.user_roles
    ADD CONSTRAINT user_roles_user_fkey FOREIGN KEY ("user")
        REFERENCES public.profiles (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE;
