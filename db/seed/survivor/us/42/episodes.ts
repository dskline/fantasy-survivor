import { createSeasonSeeder } from "@/seed/survivor/seeder/createSeasonSeeder";
import { episode1 } from "@/seed/survivor/us/42/episodes/survivor-us-42-01";
import { Contestants } from "@/seed/survivor/us/42/tribes";

export async function survivor42() {
  const seeder = await createSeasonSeeder(
    "survivor_us",
    42,
    Object.values(Contestants)
  );
  await seeder.recordEpisode(episode1);
}
