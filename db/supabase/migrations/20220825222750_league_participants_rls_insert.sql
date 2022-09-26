CREATE POLICY "Enable creators to invite themselves to their own league"
    ON public.league_participants
    AS PERMISSIVE
    FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = (select created_by from public.leagues where id = league_participants.league));

CREATE POLICY "Enable access to authenticated users"
    ON public.league_participants
    AS PERMISSIVE
    FOR SELECT
    TO authenticated
    USING (true);

DROP POLICY IF EXISTS "Enable access to all users" ON public.league_participants;
