REVOKE ALL ON TABLE public.profiles FROM anon;
REVOKE ALL ON TABLE public.profiles FROM authenticated;

GRANT SELECT (id, display_name, thumbnail_src) ON public.profiles TO anon;
GRANT SELECT (id, display_name, thumbnail_src) ON public.profiles TO authenticated;

CREATE POLICY "Enable access to all users"
    ON public.profiles
    AS PERMISSIVE
    FOR SELECT
    TO public
    USING (true);