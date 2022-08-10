ALTER TABLE public.rs_league_formats
    ADD CONSTRAINT rs_league_formats_default_ruleset FOREIGN KEY (default_ruleset) REFERENCES rulesets (id);
