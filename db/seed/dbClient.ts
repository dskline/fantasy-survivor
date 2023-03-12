import { createClient, SupabaseClient } from "@supabase/supabase-js";

import { Database } from "@/types";

if (!process.env.VITE_SUPABASE_SERVICE_KEY) {
  throw new Error("VITE_SUPABASE_SERVICE_KEY is not set");
}
if (
  !process.env.NEXT_PUBLIC_SUPABASE_API_URL
  // process.env.NEXT_PUBLIC_SUPABASE_API_URL.indexOf("localhost") === -1
) {
  throw new Error(
    "NEXT_PUBLIC_SUPABASE_API_URL is not set to localhost. This test suite requires a local Supabase instance."
  );
}

const SUPERUSER_EMAIL = "superadmin@fantasy-survivor.com";
let adminId: string;
let supabase: SupabaseClient<Database>;

export function getAdminId() {
  return adminId;
}

export async function dbClient() {
  if (!supabase) {
    supabase = createClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_API_URL!,
      process.env.VITE_SUPABASE_SERVICE_KEY!
    );
    const { data } = await supabase
      .from("user_roles")
      .select("user")
      .eq("role", "admin");

    if (data && data[0]) {
      adminId = data[0].user;
    } else {
      // If this fails, the server may need to be restarted
      const { data } = await supabase.auth.signInWithPassword({
        email: SUPERUSER_EMAIL,
        password: "123123",
      });
      if (data.user) {
        await supabase.from("user_roles").upsert({
          user: data.user.id,
          role: "admin",
        });
        adminId = data.user.id;
      }
    }
  }
  return supabase;
}

export type DB = {
  [key in keyof Database["public"]["Tables"]]: Database["public"]["Tables"][key]["Row"];
};
