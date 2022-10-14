import { Contestants } from "@/seed/survivor/us/43/tribes";
import { createSeasonSeeder } from "@/seed/survivor/seeder/createSeasonSeeder";
import { episode1 } from "@/seed/survivor/us/43/episodes/survivor-us-43-01";
import { episode2 } from "@/seed/survivor/us/43/episodes/survivor-us-43-02";
import { episode3 } from "@/seed/survivor/us/43/episodes/survivor-us-43-03";
import { episode4 } from '@/seed/survivor/us/43/episodes/survivor-us-43-04'

export async function survivor43() {
  const seeder = await createSeasonSeeder(
    "survivor_us",
    43,
    Object.values(Contestants)
  );
  await seeder.recordEpisode(episode1);
  await seeder.recordEpisode(episode2);
  await seeder.recordEpisode(episode3);
  await seeder.recordEpisode(episode4);
}
