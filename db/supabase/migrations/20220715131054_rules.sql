-- This script was generated by the Schema Diff utility in pgAdmin 4
-- For the circular dependencies, the order in which Schema Diff writes the objects is not very sophisticated
-- and may require manual changes to the script to ensure changes are applied in the correct order.
-- Please report an issue for any failure with the reproduction steps.

CREATE TABLE IF NOT EXISTS public.rules
(
    id          character varying COLLATE pg_catalog."default" NOT NULL,
    description character varying COLLATE pg_catalog."default" NOT NULL,
    is_negative boolean,
    CONSTRAINT rules_pkey PRIMARY KEY (id)
)
    TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.rules
    OWNER to postgres;

ALTER TABLE IF EXISTS public.rules
    ENABLE ROW LEVEL SECURITY;

GRANT ALL ON TABLE public.rules TO anon;

GRANT ALL ON TABLE public.rules TO authenticated;

GRANT ALL ON TABLE public.rules TO postgres;

GRANT ALL ON TABLE public.rules TO service_role;
CREATE POLICY "Enable access to all users"
    ON public.rules
    AS PERMISSIVE
    FOR SELECT
    TO public
    USING (true);

REVOKE ALL ON TABLE public.seasons FROM authenticated;
REVOKE ALL ON TABLE public.seasons FROM postgres;
REVOKE ALL ON TABLE public.seasons FROM service_role;
GRANT ALL ON TABLE public.seasons TO authenticated;

GRANT ALL ON TABLE public.seasons TO service_role;

GRANT ALL ON TABLE public.seasons TO postgres;

REVOKE ALL ON TABLE public.contestant_seasons FROM authenticated;
REVOKE ALL ON TABLE public.contestant_seasons FROM postgres;
REVOKE ALL ON TABLE public.contestant_seasons FROM service_role;
GRANT ALL ON TABLE public.contestant_seasons TO authenticated;

GRANT ALL ON TABLE public.contestant_seasons TO service_role;

GRANT ALL ON TABLE public.contestant_seasons TO postgres;

REVOKE ALL ON TABLE public.user_roles FROM authenticated;
REVOKE ALL ON TABLE public.user_roles FROM postgres;
REVOKE ALL ON TABLE public.user_roles FROM service_role;
GRANT ALL ON TABLE public.user_roles TO authenticated;

GRANT ALL ON TABLE public.user_roles TO service_role;

GRANT ALL ON TABLE public.user_roles TO postgres;
