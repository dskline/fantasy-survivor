CREATE TABLE IF NOT EXISTS public.user_watched
(
    id      uuid NOT NULL default uuid_generate_v4(),
    "user"  uuid NOT NULL,
    episode uuid NOT NULL,
    CONSTRAINT user_watched_pkey PRIMARY KEY (id),
    CONSTRAINT user_watched_episode_fkey FOREIGN KEY (episode)
        REFERENCES public.episodes (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT user_watched_user_fkey FOREIGN KEY ("user")
        REFERENCES public.profiles (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT user_watched_user_episode_unique UNIQUE ("user", episode)
);

ALTER TABLE IF EXISTS public.user_watched
    OWNER to supabase_admin;

ALTER TABLE IF EXISTS public.user_watched
    ENABLE ROW LEVEL SECURITY;

GRANT ALL ON TABLE public.user_watched TO anon;
GRANT ALL ON TABLE public.user_watched TO postgres;
GRANT ALL ON TABLE public.user_watched TO supabase_admin;
GRANT ALL ON TABLE public.user_watched TO authenticated;
GRANT ALL ON TABLE public.user_watched TO service_role;

CREATE POLICY "Enable access to all users"
    ON public.user_watched
    AS PERMISSIVE
    FOR SELECT
    TO public
    USING (true);

CREATE POLICY "Enable all access for user's own data"
    ON public.user_watched
    AS PERMISSIVE
    FOR ALL
    TO authenticated
    USING ((auth.uid() = "user"))
    WITH CHECK ((auth.uid() = "user"));
