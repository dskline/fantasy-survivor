-- This script was generated by the Schema Diff utility in pgAdmin 4
-- For the circular dependencies, the order in which Schema Diff writes the objects is not very sophisticated
-- and may require manual changes to the script to ensure changes are applied in the correct order.
-- Please report an issue for any failure with the reproduction steps.

CREATE TABLE IF NOT EXISTS public.rs_league_formats
(
    reality_series character varying COLLATE pg_catalog."default" NOT NULL DEFAULT ''::character varying,
    league_format character varying COLLATE pg_catalog."default" NOT NULL DEFAULT ''::character varying,
    default_ruleset uuid NOT NULL DEFAULT uuid_generate_v4(),
    CONSTRAINT rs_league_formats_pkey PRIMARY KEY (reality_series, league_format),
    CONSTRAINT rs_league_formats_league_format_fkey FOREIGN KEY (league_format)
        REFERENCES public.league_formats (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT rs_league_formats_reality_series_fkey FOREIGN KEY (reality_series)
        REFERENCES public.reality_series (slug) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.rs_league_formats
    OWNER to postgres;

ALTER TABLE IF EXISTS public.rs_league_formats
    ENABLE ROW LEVEL SECURITY;

GRANT ALL ON TABLE public.rs_league_formats TO anon;

GRANT ALL ON TABLE public.rs_league_formats TO authenticated;

GRANT ALL ON TABLE public.rs_league_formats TO postgres;

GRANT ALL ON TABLE public.rs_league_formats TO service_role;
CREATE POLICY "Enable access to all users"
    ON public.rs_league_formats
    AS PERMISSIVE
    FOR SELECT
    TO public
    USING (true);
