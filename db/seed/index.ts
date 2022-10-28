import { dbClient } from "@/seed/dbClient";

import { seedSurvivor } from "./survivor/survivor.seed";

export const seedData = async () => {
  const supabase = await dbClient();
  supabase.from("graphql.rebuildSchema()");

  await seedSurvivor();
};
