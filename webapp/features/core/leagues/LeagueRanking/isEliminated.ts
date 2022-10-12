import { Contestant } from "@/features/core/leagues/LeaguePage/types";
import { RankingFilter } from "@/features/core/leagues/LeagueRanking/types";

export const isEliminated = (contestant: Contestant, filter: RankingFilter) =>
  contestant.events.some(
    (e) =>
      ["VotedOut", "ExitsGame"].includes(e.rule) &&
      filter.episodeMaxIndex + 1 > e.episodeNumber
  );
