import { SeasonSeeder } from "@/seed/survivor/seeder/SeasonSeeder";
import { createSeason } from "@/seed/survivor/seeder/createSeason";
import { createContestants } from "@/seed/survivor/seeder/createContestants";

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

  const playerIds = contestants.reduce((previous, current, i) => {
    previous[names[i]] = current;
    return previous;
  }, {});
  return new SeasonSeeder(season, playerIds);
}
