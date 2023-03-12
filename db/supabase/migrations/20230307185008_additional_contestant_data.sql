alter table if exists contestant_seasons
    add column if not exists age integer;

alter table if exists contestant_seasons
    add column if not exists hometown varchar(32);

alter table if exists contestant_seasons
    add column if not exists occupation varchar(32);
