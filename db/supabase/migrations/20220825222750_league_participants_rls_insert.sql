CREATE POLICY "Enable creators to invite themselves to their own league"
    ON public.league_participants
    AS PERMISSIVE
    FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = (select created_by from public.leagues where id = league_participants.league));
