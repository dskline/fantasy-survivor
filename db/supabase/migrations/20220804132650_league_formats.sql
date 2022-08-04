-- This script was generated by the Schema Diff utility in pgAdmin 4
-- For the circular dependencies, the order in which Schema Diff writes the objects is not very sophisticated
-- and may require manual changes to the script to ensure changes are applied in the correct order.
-- Please report an issue for any failure with the reproduction steps.

CREATE TABLE IF NOT EXISTS public.league_formats
(
    id          character varying COLLATE pg_catalog."default" NOT NULL,
    title       character varying COLLATE pg_catalog."default" NOT NULL,
    description character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT league_formats_pkey PRIMARY KEY (id)
)
    TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.league_formats
    OWNER to postgres;

ALTER TABLE IF EXISTS public.league_formats
    ENABLE ROW LEVEL SECURITY;

GRANT ALL ON TABLE public.league_formats TO anon;

GRANT ALL ON TABLE public.league_formats TO authenticated;

GRANT ALL ON TABLE public.league_formats TO postgres;

GRANT ALL ON TABLE public.league_formats TO service_role;
CREATE POLICY "Enable access to all users"
    ON public.league_formats
    AS PERMISSIVE
    FOR SELECT
    TO public
    USING (true);

CREATE POLICY "Enable access to all users"
    ON public.league_participants
    AS PERMISSIVE
    FOR SELECT
    TO public
    USING (true);

ALTER TABLE public.leagues
    ALTER COLUMN format TYPE character varying COLLATE pg_catalog."default";
ALTER TABLE IF EXISTS public.leagues
    ALTER COLUMN format SET DEFAULT ''::character varying;

ALTER TABLE IF EXISTS public.leagues
    ALTER COLUMN format DROP NOT NULL;

ALTER TABLE IF EXISTS public.leagues
    ALTER COLUMN format SET STORAGE EXTENDED;

ALTER TABLE IF EXISTS public.leagues
    ADD CONSTRAINT leagues_format_fkey FOREIGN KEY (format)
        REFERENCES public.league_formats (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION;

CREATE POLICY "Enable access to all users"
    ON public.lp_contestants
    AS PERMISSIVE
    FOR SELECT
    TO public
    USING (true);

INSERT INTO public.league_formats(id, title, description)
VALUES ('RANK', 'Rank Format',
        'Each participant privately chooses their favorite contestants in a ranked order. Contestants are then awarded higher points in proportion to how highly they are ranked in each participant''s pool.');
