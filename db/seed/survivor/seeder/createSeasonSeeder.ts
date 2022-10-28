import { createContestants } from "@/seed/survivor/seeder/createContestants";
import { createSeason } from "@/seed/survivor/seeder/createSeason";
import { PlayerIds, SeasonSeeder } from "@/seed/survivor/seeder/SeasonSeeder";

export async function createSeasonSeeder(
  seriesId: string,
  seasonNumber: number,
  names: Array<string>,
  seasonTitle?: string
) {
  const season = await createSeason(seriesId, seasonNumber, seasonTitle);

  const contestants = await createContestants(names, season);
  if (!contestants?.length) {
    throw new Error("Error creating contestants");
  }

  const playerIds: PlayerIds = {};
  for (const [i, contestant] of contestants.entries()) {
    playerIds[names[i]] = contestant;
  }
  return new SeasonSeeder(season, playerIds);
}
