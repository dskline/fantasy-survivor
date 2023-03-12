import { Tribe } from "@/seed/survivor";
import { createContestants } from "@/seed/survivor/seeder/createContestants";
import { createSeason } from "@/seed/survivor/seeder/createSeason";
import { PlayerIds, SeasonSeeder } from "@/seed/survivor/seeder/SeasonSeeder";

export async function createSeasonSeeder(
  seriesId: string,
  seasonNumber: number,
  tribes: Array<Tribe>,
  seasonTitle?: string
) {
  const season = await createSeason(seriesId, seasonNumber, seasonTitle);

  const contestants = tribes.flatMap((tribe) => {
    for (const contestant of tribe.contestants) {
      contestant.team_color = tribe.color;
    }
    return tribe.contestants;
  });
  const createdContestants = await createContestants(contestants, season);

  const playerIds: PlayerIds = {};
  for (const [i, contestant] of createdContestants.entries()) {
    playerIds[contestants[i].name] = contestant.id;
  }
  return new SeasonSeeder(season, playerIds);
}
