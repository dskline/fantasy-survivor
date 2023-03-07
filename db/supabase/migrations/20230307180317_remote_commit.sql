drop index if exists "auth"."identities_email_idx";

drop index if exists "auth"."users_email_partial_key";

create table "auth"."sso_sessions" (
    "id" uuid not null,
    "session_id" uuid not null,
    "sso_provider_id" uuid,
    "not_before" timestamp with time zone,
    "not_after" timestamp with time zone,
    "idp_initiated" boolean default false,
    "created_at" timestamp with time zone,
    "updated_at" timestamp with time zone
);


alter table "auth"."identities" drop column "email";

alter table "auth"."users" drop column "deleted_at";

alter table "auth"."users" drop column "is_sso_user";

alter table "auth"."users" alter column "phone" set data type character varying(15) using "phone"::character varying(15);

alter table "auth"."users" alter column "phone_change" set data type character varying(15) using "phone_change"::character varying(15);

CREATE INDEX refresh_token_session_id ON auth.refresh_tokens USING btree (session_id);

CREATE UNIQUE INDEX sso_sessions_pkey ON auth.sso_sessions USING btree (id);

CREATE INDEX sso_sessions_session_id_idx ON auth.sso_sessions USING btree (session_id);

CREATE INDEX sso_sessions_sso_provider_id_idx ON auth.sso_sessions USING btree (sso_provider_id);

CREATE UNIQUE INDEX users_email_key ON auth.users USING btree (email);

alter table "auth"."sso_sessions" add constraint "sso_sessions_pkey" PRIMARY KEY using index "sso_sessions_pkey";

alter table "auth"."sso_sessions" add constraint "sso_sessions_session_id_fkey" FOREIGN KEY (session_id) REFERENCES auth.sessions(id) ON DELETE CASCADE not valid;

alter table "auth"."sso_sessions" validate constraint "sso_sessions_session_id_fkey";

alter table "auth"."sso_sessions" add constraint "sso_sessions_sso_provider_id_fkey" FOREIGN KEY (sso_provider_id) REFERENCES auth.sso_providers(id) ON DELETE CASCADE not valid;

alter table "auth"."sso_sessions" validate constraint "sso_sessions_sso_provider_id_fkey";

alter table "auth"."users" add constraint "users_email_key" UNIQUE using index "users_email_key";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION auth.email()
 RETURNS text
 LANGUAGE sql
 STABLE
AS $function$
  select 
  	coalesce(
		nullif(current_setting('request.jwt.claim.email', true), ''),
		(nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'email')
	)::text
$function$
;

CREATE OR REPLACE FUNCTION auth.role()
 RETURNS text
 LANGUAGE sql
 STABLE
AS $function$
  select 
  	coalesce(
		nullif(current_setting('request.jwt.claim.role', true), ''),
		(nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'role')
	)::text
$function$
;

CREATE OR REPLACE FUNCTION auth.uid()
 RETURNS uuid
 LANGUAGE sql
 STABLE
AS $function$
  select 
  	coalesce(
		nullif(current_setting('request.jwt.claim.sub', true), ''),
		(nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'sub')
	)::uuid
$function$
;


create extension if not exists "http" with schema "extensions";

create extension if not exists "pg_net" with schema "extensions";


create table "public"."user_fcm_tokens" (
    "id" uuid not null default uuid_generate_v4(),
    "user" uuid not null,
    "token" character varying not null
);


alter table "public"."user_fcm_tokens" enable row level security;

alter table "public"."rs_league_formats" alter column "default_ruleset" drop default;

CREATE UNIQUE INDEX user_fcm_tokens_pkey ON public.user_fcm_tokens USING btree (id);

CREATE UNIQUE INDEX user_fcm_tokens_user_token_unique ON public.user_fcm_tokens USING btree ("user", token);

alter table "public"."user_fcm_tokens" add constraint "user_fcm_tokens_pkey" PRIMARY KEY using index "user_fcm_tokens_pkey";

alter table "public"."profiles" add constraint "profiles_email_fkey" FOREIGN KEY (email) REFERENCES auth.users(email) ON UPDATE CASCADE not valid;

alter table "public"."profiles" validate constraint "profiles_email_fkey";

alter table "public"."user_fcm_tokens" add constraint "user_fcm_tokens_user_fkey" FOREIGN KEY ("user") REFERENCES profiles(id) not valid;

alter table "public"."user_fcm_tokens" validate constraint "user_fcm_tokens_user_fkey";

alter table "public"."user_fcm_tokens" add constraint "user_fcm_tokens_user_token_unique" UNIQUE using index "user_fcm_tokens_user_token_unique";

create policy "Enable all access for user's own data"
on "public"."user_fcm_tokens"
as permissive
for all
to authenticated
using ((auth.uid() = "user"))
with check ((auth.uid() = "user"));



alter table "storage"."buckets" drop column "allowed_mime_types";

alter table "storage"."buckets" drop column "avif_autodetection";

alter table "storage"."buckets" drop column "file_size_limit";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION storage.extension(name text)
 RETURNS text
 LANGUAGE plpgsql
AS $function$
DECLARE
_parts text[];
_filename text;
BEGIN
	select string_to_array(name, '/') into _parts;
	select _parts[array_length(_parts,1)] into _filename;
	-- @todo return the last part instead of 2
	return split_part(_filename, '.', 2);
END
$function$
;

CREATE OR REPLACE FUNCTION storage.filename(name text)
 RETURNS text
 LANGUAGE plpgsql
AS $function$
DECLARE
_parts text[];
BEGIN
	select string_to_array(name, '/') into _parts;
	return _parts[array_length(_parts,1)];
END
$function$
;

CREATE OR REPLACE FUNCTION storage.foldername(name text)
 RETURNS text[]
 LANGUAGE plpgsql
AS $function$
DECLARE
_parts text[];
BEGIN
	select string_to_array(name, '/') into _parts;
	return _parts[1:array_length(_parts,1)-1];
END
$function$
;


