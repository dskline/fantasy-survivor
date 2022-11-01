CREATE TABLE IF NOT EXISTS public.user_fcm_tokens
(
    id      uuid NOT NULL default uuid_generate_v4(),
    "user"  uuid NOT NULL,
    token   character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT user_fcm_tokens_pkey PRIMARY KEY (id),
    CONSTRAINT user_fcm_tokens_user_fkey FOREIGN KEY ("user")
        REFERENCES public.profiles (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT user_fcm_tokens_user_token_unique UNIQUE ("user", token)
);

ALTER TABLE IF EXISTS public.user_fcm_tokens
    ENABLE ROW LEVEL SECURITY;

GRANT ALL ON TABLE public.user_fcm_tokens TO anon;
GRANT ALL ON TABLE public.user_fcm_tokens TO postgres;
GRANT ALL ON TABLE public.user_fcm_tokens TO supabase_admin;
GRANT ALL ON TABLE public.user_fcm_tokens TO authenticated;
GRANT ALL ON TABLE public.user_fcm_tokens TO service_role;

CREATE POLICY "Enable all access for user's own data"
    ON public.user_fcm_tokens
    AS PERMISSIVE
    FOR ALL
    TO authenticated
    USING ((auth.uid() = "user"))
    WITH CHECK ((auth.uid() = "user"));
