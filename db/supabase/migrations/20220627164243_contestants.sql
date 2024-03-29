-- This script was generated by the Schema Diff utility in pgAdmin 4
-- For the circular dependencies, the order in which Schema Diff writes the objects is not very sophisticated
-- and may require manual changes to the script to ensure changes are applied in the correct order.
-- Please report an issue for any failure with the reproduction steps.

CREATE TABLE IF NOT EXISTS public.contestants
(
    firstname character varying COLLATE pg_catalog."default" NOT NULL,
    surname character varying COLLATE pg_catalog."default",
    nickname character varying COLLATE pg_catalog."default",
    slug character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT contestants_pkey PRIMARY KEY (slug)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.contestants
    OWNER to postgres;

ALTER TABLE IF EXISTS public.contestants
    ENABLE ROW LEVEL SECURITY;

GRANT ALL ON TABLE public.contestants TO anon;

GRANT ALL ON TABLE public.contestants TO authenticated;

GRANT ALL ON TABLE public.contestants TO postgres;

GRANT ALL ON TABLE public.contestants TO service_role;
CREATE POLICY "Enable access to all users"
    ON public.contestants
    AS PERMISSIVE
    FOR SELECT
    TO public
    USING (true);

CREATE TABLE IF NOT EXISTS public.contestant_seasons
(
    contestant character varying COLLATE pg_catalog."default" NOT NULL DEFAULT ''::character varying,
    season uuid NOT NULL DEFAULT uuid_generate_v4(),
    avatar_src character varying COLLATE pg_catalog."default" NOT NULL DEFAULT ''::character varying,
    portrait_src character varying COLLATE pg_catalog."default" NOT NULL DEFAULT ''::character varying,
    CONSTRAINT contestant_seasons_pkey PRIMARY KEY (contestant, season),
    CONSTRAINT contestant_seasons_contestant_fkey FOREIGN KEY (contestant)
        REFERENCES public.contestants (slug) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT contestant_seasons_season_fkey FOREIGN KEY (season)
        REFERENCES public.seasons (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.contestant_seasons
    OWNER to postgres;

ALTER TABLE IF EXISTS public.contestant_seasons
    ENABLE ROW LEVEL SECURITY;

GRANT ALL ON TABLE public.contestant_seasons TO anon;

GRANT ALL ON TABLE public.contestant_seasons TO authenticated;

GRANT ALL ON TABLE public.contestant_seasons TO postgres;

GRANT ALL ON TABLE public.contestant_seasons TO service_role;
CREATE POLICY "Enable access to all users"
    ON public.contestant_seasons
    AS PERMISSIVE
    FOR SELECT
    TO public
    USING (true);
