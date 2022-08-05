import { createClient, SupabaseClient } from "@supabase/supabase-js";
import usersMock, { UserRole } from "@/__tests__/users/users.mock";

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

export default async function (role: "service" | "anon" | UserRole) {
  if (role === "service") {
    return createClient(
      process.env.NEXT_PUBLIC_SUPABASE_API_URL!,
      process.env.VITE_SUPABASE_SERVICE_KEY!
    );
  }
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_API_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  if (role === "anon") {
    return supabase;
  }
  // otherwise, sign in with the specified role
  const { error } = await signInWithRole(supabase, role);
  if (error) {
    throw new Error(
      `Failed to sign in with role ${role}. You may need to run the seed script.`
    );
  }

  return supabase;
}

async function signInWithRole(client: SupabaseClient, role: UserRole) {
  return await client.auth.signIn({
    email: usersMock[role].email,
    password: usersMock[role].password,
  });
}
