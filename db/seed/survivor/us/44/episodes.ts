import { createSeasonSeeder } from "@/seed/survivor/seeder/createSeasonSeeder";
import { episode1 } from "@/seed/survivor/us/44/episodes/survivor-us-44-01";
import { episode2 } from "@/seed/survivor/us/44/episodes/survivor-us-44-02";
import { tribes } from "@/seed/survivor/us/44/tribes";

export async function survivor44() {
  const seeder = await createSeasonSeeder(
    "survivor_us",
    44,
    Object.values(tribes)
  );
  seeder.recordEpisode(episode1);
  seeder.recordEpisode(episode2);
}
