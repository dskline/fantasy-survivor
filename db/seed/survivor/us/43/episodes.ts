import { Contestants } from "@/seed/survivor/us/43/tribes";
import { createSeasonSeeder } from "@/seed/survivor/seeder/createSeasonSeeder";

export async function survivor43() {
  const seeder = await createSeasonSeeder(
    "survivor_us",
    43,
    Object.values(Contestants)
  );
}
