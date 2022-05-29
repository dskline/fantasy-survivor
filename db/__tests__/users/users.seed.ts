import { SupabaseClient } from "@supabase/supabase-js";
import mockUsers, { UserRole } from "@/__tests__/users/users.mock";

export default async function (supabase: SupabaseClient) {
  let missingRoles = Object.keys(mockUsers);
  const { data } = await supabase.from("user_roles").select("role_id");
  if (data && data.length) {
    missingRoles = missingRoles.filter(
      (role) => !data.find((row) => row.role_id === role)
    );
  }
  if (missingRoles.length > 0) {
    console.info("Seeding users...");
    await Promise.all(
      Object.keys(mockUsers).map((role) => insertUser(supabase, role as UserRole))
    );
  }
}

async function insertUser(supabase: SupabaseClient, role: UserRole) {
  const user = mockUsers[role];
  const { user: loggedInUser } = await supabase.auth.api.createUser({
    password: user.password,
    email: user.email,
    email_confirm: true,
  });
  await supabase.from("user_roles").insert({
    user_id: loggedInUser!.id,
    role_id: role,
  });
}
