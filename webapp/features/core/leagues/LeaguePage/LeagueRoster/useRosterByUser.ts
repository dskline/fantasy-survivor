import { useEffect, useState } from "react";

import { useGetLeagueParticipants } from "@/features/core/leagues/crud/getLeagueParticipants";
import { LeagueProps, Roster } from "@/features/core/leagues/LeaguePage/types";

import Dict = NodeJS.Dict;

export const useRosterByUser = (league: LeagueProps) => {
  const [rosterByUser, setRosterByUser] = useState<Dict<Roster>>({});

  const { data } = useGetLeagueParticipants({
    filter: {
      league: { eq: league.id },
    },
  });

  useEffect(() => {
    if (data) {
      const participants = data.league_participantsCollection?.edges || [];
      const rosterByUser: Dict<Roster> = {};
      for (const participant of participants) {
        const profileId = participant.node.profiles?.id;
        if (profileId) {
          const roster = (rosterByUser[profileId] = {} as Roster);
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
                data: {
                  ...contestantSeason,
                  rosterIndex: i,
                },
              };
            }
          }
        }
      }
      setRosterByUser({ ...rosterByUser });
    }
  }, [data, league.contestants]);

  function updateRoster(user: string, roster: Roster) {
    setRosterByUser({ ...rosterByUser, [user]: roster });
  }

  return {
    rosterByUser,
    updateRoster,
  };
};
