import { seedSurvivor } from "./survivor/survivor.seed";
import { dbClient } from '@/seed/dbClient'

export const seedData = async () => {
  const supabase = await dbClient();
  supabase.from("graphql.rebuildSchema()");

  await seedSurvivor();
};
