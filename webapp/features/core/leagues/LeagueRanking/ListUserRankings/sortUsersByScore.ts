import { LeagueUser } from "@/features/core/leagues/LeaguePage/types";
import { RankingFilter } from "@/features/core/leagues/LeagueRanking/types";

type SortUsersByScore = (
  users: Array<LeagueUser>,
  filter: RankingFilter
) => Array<LeagueUser>;

export const sortUsersByScore: SortUsersByScore = (users, filter) =>
  [...users].sort((a, b) =>
    a.scoreByEpisode && b.scoreByEpisode
      ? b.scoreByEpisode[filter.episodeMaxIndex] -
        b.scoreByEpisode[filter.episodeMinIndex - 1] -
        (a.scoreByEpisode[filter.episodeMaxIndex] -
          a.scoreByEpisode[filter.episodeMinIndex - 1])
      : 0
  );
