import {
  LeagueProps,
  LeagueUser,
} from "@/features/core/leagues/LeaguePage/types";

const ROSTER_SIZE = 9;

export const rankLeagueCalculator = (
  league: LeagueProps,
  users: Array<LeagueUser>
) => {
  const numEpisodes = league.orderedEpisodes.length;
  const pointsByContestantId = {} as Record<string, Array<number>>;
  for (const contestant of league.contestants) {
    pointsByContestantId[contestant.id] = Array.from({
      length: numEpisodes + 1,
    }).map(() => 0);
  }
  const pointsByEventId = {} as Record<string, number>;
  for (const event of league.orderedRules) {
    pointsByEventId[event.id] = event.points;
  }
  for (const contestant of league.contestants) {
    for (const event of contestant.events || []) {
      pointsByContestantId[contestant.id][event.episodeNumber] +=
        pointsByEventId[event.rule];
    }
  }
  for (const user of users) {
    user.scoreByEpisode = Array.from({ length: numEpisodes + 1 }).map(() => 0);
    if (user.userRoster) {
      let totalScore = 0;
      for (let i = 0; i < numEpisodes; i++) {
        for (let j = 0; j < user.userRoster?.roster.length; j++) {
          const contestant = user.userRoster.roster[j];
          const contestantPoints =
            pointsByContestantId[contestant.data.id][i + 1];
          const contestantWeight = (ROSTER_SIZE - j) / ROSTER_SIZE;
          totalScore += contestantPoints * contestantWeight;
          user.scoreByEpisode[i + 1] = totalScore;
        }
      }
    }
  }

  return { league: { ...league, pointsByContestantId }, users };
};
