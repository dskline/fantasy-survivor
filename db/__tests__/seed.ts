import { createClient } from "@supabase/supabase-js";
import seedUsers from "@/__tests__/users/users.seed";

export async function setup() {
  const supabase = createClient(
    process.env.VITE_SUPABASE_API_URL!,
    process.env.VITE_SUPABASE_SERVICE_KEY!
  );
  await seedUsers(supabase);
}
