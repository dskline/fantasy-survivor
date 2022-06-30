import { Contestant, Tribe } from "@/seed/survivor/index";
import dbClient from "@/seed/dbClient";

export type SurvivorEpisode = {
  events: Array<{
    eventKey: string;
    players: Array<string>;
  }>;
};
export type Season = {
  order: number;
  title?: string;
  logo_src: string;
  tribes: Array<Tribe>;
  // episodes: Array<SurvivorEpisode>,
};
export type RealitySeries = {
  slug: string;
  seasons: Array<Season>;
};

export const seed = async (series: Array<RealitySeries>) => {
  const supabase = await dbClient();

  for (const show of series) {
    for (const season of show.seasons) {
      const { data: seasonData } = await supabase
        .from("seasons")
        .upsert({
          reality_series: show.slug,
          logo_src: `${show.slug}_${season.order}`,
          order: season.order,
          title: season.title || `Season ${season.order}`,
        })
        .match({
          reality_series: show.slug,
          order: season.order,
        });
      const seasonId = seasonData?.[0]?.id;

      const contestants = season.tribes
        .map((tribe) => {
          return tribe.contestants.map((contestant) => {
            return {
              ...(typeof contestant === "object"
                ? contestant
                : buildContestantFromString(contestant as string)),
              teamColor: tribe.color,
            };
          });
        })
        .flat();

      await supabase.from("contestants").upsert(
        contestants.map((contestant) => ({
          slug: contestant.slug,
          firstname: contestant.firstname,
          surname: contestant.surname,
          nickname: contestant.nickname,
        }))
      );
      await supabase.from("contestant_seasons").upsert(
        contestants.map((contestant) => ({
          season: seasonId,
          contestant: contestant.slug,
          avatar_src: `${contestant.slug}_${season.order}_Avatar`,
          portrait_src: `${contestant.slug}_${season.order}_Portrait`,
          team_color: contestant.teamColor,
        }))
      );
    }
  }
};

function buildContestantFromString(contestant: string): Contestant {
  const splitName = contestant.split(" ");
  return {
    slug: contestant.replace(" ", "_"),
    firstname: splitName[0],
    surname: splitName[1],
    nickname: splitName[0],
  };
}
