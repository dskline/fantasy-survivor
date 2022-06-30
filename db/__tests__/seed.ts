import { createClient } from "@supabase/supabase-js";
import seedUsers from "@/__tests__/users/users.seed";
import { seedData } from "@/seed";

export async function setup() {
  // const supabase = createClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_API_URL!,
  //   process.env.VITE_SUPABASE_SERVICE_KEY!
  // );
  // await seedUsers(supabase);
  await seedData();
}
