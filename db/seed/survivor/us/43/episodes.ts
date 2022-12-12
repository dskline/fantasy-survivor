import { createSeasonSeeder } from "@/seed/survivor/seeder/createSeasonSeeder";
import { episode1 } from "@/seed/survivor/us/43/episodes/survivor-us-43-01";
import { episode2 } from "@/seed/survivor/us/43/episodes/survivor-us-43-02";
import { episode3 } from "@/seed/survivor/us/43/episodes/survivor-us-43-03";
import { episode4 } from "@/seed/survivor/us/43/episodes/survivor-us-43-04";
import { episode5 } from "@/seed/survivor/us/43/episodes/survivor-us-43-05";
import { episode6 } from "@/seed/survivor/us/43/episodes/survivor-us-43-06";
import { episode7 } from "@/seed/survivor/us/43/episodes/survivor-us-43-07";
import { episode8 } from "@/seed/survivor/us/43/episodes/survivor-us-43-08";
import { episode9 } from "@/seed/survivor/us/43/episodes/survivor-us-43-09";
import { episode10 } from "@/seed/survivor/us/43/episodes/survivor-us-43-10";
import { episode11 } from "@/seed/survivor/us/43/episodes/survivor-us-43-11";
import { episode12 } from "@/seed/survivor/us/43/episodes/survivor-us-43-12";
import { Contestants } from "@/seed/survivor/us/43/tribes";

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
  await seeder.recordEpisode(episode5);
  await seeder.recordEpisode(episode6);
  await seeder.recordEpisode(episode7);
  await seeder.recordEpisode(episode8);
  await seeder.recordEpisode(episode9);
  await seeder.recordEpisode(episode10);
  await seeder.recordEpisode(episode11);
  await seeder.recordEpisode(episode12);
}
