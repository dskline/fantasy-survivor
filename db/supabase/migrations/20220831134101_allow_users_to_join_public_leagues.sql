ALTER TABLE IF EXISTS public.leagues
    ADD COLUMN is_private boolean NOT NULL DEFAULT false;

CREATE POLICY "Enable insert for authenticated users on public leagues"
    ON public.league_participants
    AS PERMISSIVE
    FOR INSERT
    TO authenticated
    WITH CHECK ((false = (SELECT leagues.is_private
                          FROM leagues
                          WHERE (leagues.id = league_participants.league))));

-- Disable duplicate insert on league_participants
ALTER table if exists public.league_participants
    ADD CONSTRAINT league_participants_league_participant_key UNIQUE (league, participant);
