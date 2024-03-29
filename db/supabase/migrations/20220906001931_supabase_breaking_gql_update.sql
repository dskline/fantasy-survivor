-- This script was generated by the Schema Diff utility in pgAdmin 4
-- For the circular dependencies, the order in which Schema Diff writes the objects is not very sophisticated
-- and may require manual changes to the script to ensure changes are applied in the correct order.
-- Please report an issue for any failure with the reproduction steps.

REVOKE ALL ON TABLE public.league_formats FROM authenticated;
REVOKE ALL ON TABLE public.league_formats FROM postgres;
REVOKE ALL ON TABLE public.league_formats FROM service_role;
GRANT ALL ON TABLE public.league_formats TO authenticated;

GRANT ALL ON TABLE public.league_formats TO postgres;

GRANT ALL ON TABLE public.league_formats TO service_role;

REVOKE ALL ON TABLE public.reality_series FROM authenticated;
REVOKE ALL ON TABLE public.reality_series FROM postgres;
REVOKE ALL ON TABLE public.reality_series FROM service_role;
GRANT ALL ON TABLE public.reality_series TO authenticated;

GRANT ALL ON TABLE public.reality_series TO postgres;

GRANT ALL ON TABLE public.reality_series TO service_role;

REVOKE ALL ON TABLE public.contestants FROM authenticated;
REVOKE ALL ON TABLE public.contestants FROM postgres;
REVOKE ALL ON TABLE public.contestants FROM service_role;
GRANT ALL ON TABLE public.contestants TO authenticated;

GRANT ALL ON TABLE public.contestants TO postgres;

GRANT ALL ON TABLE public.contestants TO service_role;

REVOKE ALL ON TABLE public.profiles FROM authenticated;
REVOKE ALL ON TABLE public.profiles FROM postgres;
REVOKE ALL ON TABLE public.profiles FROM service_role;
GRANT ALL ON TABLE public.profiles TO authenticated;

GRANT ALL ON TABLE public.profiles TO service_role;

GRANT ALL ON TABLE public.profiles TO postgres;

REVOKE ALL ON TABLE public.roles FROM authenticated;
REVOKE ALL ON TABLE public.roles FROM postgres;
REVOKE ALL ON TABLE public.roles FROM service_role;
GRANT ALL ON TABLE public.roles TO authenticated;

GRANT ALL ON TABLE public.roles TO postgres;

GRANT ALL ON TABLE public.roles TO service_role;

REVOKE ALL ON TABLE public.rules FROM authenticated;
REVOKE ALL ON TABLE public.rules FROM postgres;
REVOKE ALL ON TABLE public.rules FROM service_role;
GRANT ALL ON TABLE public.rules TO authenticated;

GRANT ALL ON TABLE public.rules TO postgres;

GRANT ALL ON TABLE public.rules TO service_role;

REVOKE ALL ON TABLE public.seasons FROM anon;
REVOKE ALL ON TABLE public.seasons FROM postgres;
REVOKE ALL ON TABLE public.seasons FROM service_role;
GRANT ALL ON TABLE public.seasons TO anon;

GRANT ALL ON TABLE public.seasons TO service_role;

GRANT ALL ON TABLE public.seasons TO postgres;

ALTER TABLE IF EXISTS public.seasons DROP COLUMN IF EXISTS reality_series;

ALTER TABLE IF EXISTS public.seasons
    ADD COLUMN reality_show character varying COLLATE pg_catalog."default" NOT NULL DEFAULT ''::character varying;
ALTER TABLE IF EXISTS public.seasons
    ADD CONSTRAINT seasons_reality_series_order_key UNIQUE (reality_show, "order");
ALTER TABLE IF EXISTS public.seasons DROP CONSTRAINT IF EXISTS seasons_reality_series_fkey;

ALTER TABLE IF EXISTS public.seasons
    ADD CONSTRAINT seasons_reality_show_fkey FOREIGN KEY (reality_show)
    REFERENCES public.reality_series (slug) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;

REVOKE ALL ON TABLE public.rulesets FROM authenticated;
REVOKE ALL ON TABLE public.rulesets FROM postgres;
REVOKE ALL ON TABLE public.rulesets FROM service_role;
GRANT ALL ON TABLE public.rulesets TO authenticated;

GRANT ALL ON TABLE public.rulesets TO postgres;

GRANT ALL ON TABLE public.rulesets TO service_role;

REVOKE ALL ON TABLE public.user_roles FROM anon;
REVOKE ALL ON TABLE public.user_roles FROM postgres;
REVOKE ALL ON TABLE public.user_roles FROM service_role;
GRANT ALL ON TABLE public.user_roles TO anon;

GRANT ALL ON TABLE public.user_roles TO service_role;

GRANT ALL ON TABLE public.user_roles TO postgres;

REVOKE ALL ON TABLE public.episodes FROM anon;
REVOKE ALL ON TABLE public.episodes FROM postgres;
REVOKE ALL ON TABLE public.episodes FROM service_role;
GRANT ALL ON TABLE public.episodes TO anon;

GRANT ALL ON TABLE public.episodes TO service_role;

GRANT ALL ON TABLE public.episodes TO postgres;

REVOKE ALL ON TABLE public.lp_contestants FROM authenticated;
REVOKE ALL ON TABLE public.lp_contestants FROM postgres;
REVOKE ALL ON TABLE public.lp_contestants FROM service_role;
GRANT ALL ON TABLE public.lp_contestants TO authenticated;

GRANT ALL ON TABLE public.lp_contestants TO service_role;

GRANT ALL ON TABLE public.lp_contestants TO postgres;
