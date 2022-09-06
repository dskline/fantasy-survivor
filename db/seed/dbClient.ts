import { createClient, SupabaseClient } from "@supabase/supabase-js";

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

const SUPERUSER_EMAIL = "superadmin@fantasy-survivor.com";
let adminId: string;
let supabase: SupabaseClient;

export function getAdminId() {
  return adminId;
}
export async function dbClient() {
  if (!supabase) {
    supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_API_URL!,
      process.env.VITE_SUPABASE_SERVICE_KEY!
    );
    const { data } = await supabase
      .from("user_roles")
      .select("user_id")
      .eq("role_id", "admin");

    if (data && data[0]) {
      adminId = data[0].id;
    } else {
      // If this fails, the server may need to be restarted
      const { user } = await supabase.auth.api.createUser({
        email: SUPERUSER_EMAIL,
        password: "123123",
      });
      await supabase.from("user_roles").upsert({
        user_id: user!.id,
        role_id: "admin",
      });
      adminId = user!.id;
    }
  }
  return supabase;
}
