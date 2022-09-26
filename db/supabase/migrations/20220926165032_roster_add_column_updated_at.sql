ALTER TABLE IF EXISTS public.lp_contestants
    ADD COLUMN updated_at timestamp with time zone NOT NULL DEFAULT (now() AT TIME ZONE 'utc'::text);
