CREATE TABLE IF NOT EXISTS public.user_features
(
    "user" uuid NOT NULL,
    feature character varying COLLATE pg_catalog."default" NOT NULL,
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    CONSTRAINT user_features_pkey PRIMARY KEY (id),
    CONSTRAINT user_features_user_fkey FOREIGN KEY ("user")
        REFERENCES public.profiles (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

ALTER TABLE IF EXISTS public.user_features
    OWNER to supabase_admin;

ALTER TABLE IF EXISTS public.user_features
    ENABLE ROW LEVEL SECURITY;

GRANT ALL ON TABLE public.user_features TO anon;
GRANT ALL ON TABLE public.user_features TO postgres;
GRANT ALL ON TABLE public.user_features TO supabase_admin;
GRANT ALL ON TABLE public.user_features TO authenticated;
GRANT ALL ON TABLE public.user_features TO service_role;

CREATE POLICY "Enable access to own data"
    ON public.user_features
    AS PERMISSIVE
    FOR SELECT
    TO authenticated
    USING ((auth.uid() = "user"));
