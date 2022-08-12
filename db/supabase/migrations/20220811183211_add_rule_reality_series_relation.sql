ALTER TABLE IF EXISTS public.rules
    -- Existing data should default to "survivor_us"
    ADD COLUMN reality_series character varying COLLATE pg_catalog."default" NOT NULL DEFAULT 'survivor_us'::character varying;
ALTER TABLE IF EXISTS public.rules
    ADD CONSTRAINT rules_reality_series_fkey FOREIGN KEY (reality_series)
        REFERENCES public.reality_series (slug) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION;

-- Remove the default after the data migration is complete
ALTER TABLE public.rules
    ALTER COLUMN reality_series SET DEFAULT NULL;