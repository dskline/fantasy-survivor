import { createClient, SupabaseClient } from '@supabase/supabase-js'

if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error("NEXT_PUBLIC_SUPABASE_ANON_KEY is not set");
}
if (!process.env.VITE_SUPABASE_SERVICE_KEY) {
  throw new Error("VITE_SUPABASE_SERVICE_KEY is not set");
}
if (
  !process.env.NEXT_PUBLIC_SUPABASE_API_URL ||
  process.env.NEXT_PUBLIC_SUPABASE_API_URL.indexOf("localhost") === -1
) {
  throw new Error(
    "NEXT_PUBLIC_SUPABASE_API_URL is not set to localhost. This test suite requires a local Supabase instance."
  );
}

let supabase: SupabaseClient;

export async function dbClient() {
  if (!supabase) {
    supabase = await createClient(
      process.env.NEXT_PUBLIC_SUPABASE_API_URL!,
      process.env.VITE_SUPABASE_SERVICE_KEY!
    );
  }
  return supabase;
}
