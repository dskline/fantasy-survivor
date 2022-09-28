import { GetLeagueParticipantsQuery } from "@/features/core/leagues/crud/__generated__/getLeagueParticipants.types";
import {
  LeagueProps,
  Roster,
  UserRoster,
} from "@/features/core/leagues/LeaguePage/types";

import Dict = NodeJS.Dict;

export const toRosterByUser = (
  league: LeagueProps,
  data: GetLeagueParticipantsQuery
) => {
  const rosterByUser: Dict<UserRoster> = {};
  const participants = data.league_participantsCollection?.edges || [];

  for (const participant of participants) {
    const profileId = participant.node.profiles?.id;

    if (profileId) {
      const roster = (rosterByUser[profileId] = {
        teamName: `Team ${
          participant.node.profiles?.display_name || "[name unassigned]"
        }`,
        roster: [] as Roster,
      }).roster;
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
    }
  }
  return rosterByUser;
};

export const toLpContestants = (participantId: string, roster: Roster) =>
  (roster || []).map((contestant, i) => ({
    contestant_season: contestant.data.id,
    rank: `${i}`,
    league_participant: participantId,
  }));
