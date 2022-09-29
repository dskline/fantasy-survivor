// Returns a map where the key is the user id
import { GetLeagueParticipantsQuery } from "@/features/core/leagues/crud/__generated__/getLeagueParticipants.types";
import {
  LeagueProps,
  LeagueUser,
  Roster,
} from "@/features/core/leagues/LeaguePage/types";

import Dict = NodeJS.Dict;

export const toLeagueUsers = (
  league: LeagueProps,
  data: GetLeagueParticipantsQuery
) => {
  const leagueUsers: Dict<LeagueUser> = {};
  const participants = data.league_participantsCollection?.edges || [];

  for (const participant of participants) {
    const profileId = participant.node.profiles?.id;

    if (profileId) {
      const roster = [] as Roster;
      const edges = participant.node.lp_contestantsCollection?.edges || [];

      for (const [i, element] of edges.entries()) {
        const contestant = element.node;
        const contestantSeason = league.contestants.find(
          (c) => c.id === contestant.contestant_season
        );

        if (contestantSeason) {
          roster[i] = {
            id: contestant.id,
            rank: contestant.rank as string,
            data: contestantSeason,
          };
        }
      }
      leagueUsers[profileId] = {
        id: profileId,
        participantId: participant.node.id,
        features: [],
        isLoading: false,
        userRoster: {
          teamName: `Team ${
            participant.node.profiles?.display_name || "[name unassigned]"
          }`,
          roster,
        },
      };
    }
  }
  return leagueUsers;
};
