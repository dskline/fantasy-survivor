CREATE POLICY "Enable insert for own roster"
    ON public.lp_contestants
    AS PERMISSIVE
    FOR INSERT
    TO authenticated
    WITH CHECK (league_participant IN (SELECT league_participants.id
                                       FROM league_participants
                                       WHERE (league_participants.participant = auth.uid())));

CREATE POLICY "Enable delete from own roster"
    ON public.lp_contestants
    AS PERMISSIVE
    FOR DELETE
    TO authenticated
    USING (league_participant IN (SELECT league_participants.id
                                       FROM league_participants
                                       WHERE (league_participants.participant = auth.uid())));
