import React from "react";

import { useGetLeagueParticipants } from "@/features/core/leagues/crud/getLeagueParticipants";
import { toLeagueUsers } from "@/features/core/leagues/LeaguePage/toLeagueUsers";
import {
  LeagueProps,
  LeagueUser,
} from "@/features/core/leagues/LeaguePage/types";
import { LeagueRankingContent } from "@/features/core/leagues/LeagueRanking/LeagueRankingContent";
import { rankLeagueCalculator } from "@/features/league-formats/rank/rankLeagueCalculator";

type Props = {
  league: LeagueProps;
  user: LeagueUser;
};
export const LeagueRankingContainer = ({ league, user }: Props) => {
  const { data } = useGetLeagueParticipants({
    filter: {
      league: { eq: league.id },
    },
  });
  if (!data) {
    return <div>Loading...</div>;
  }
  const users = rankLeagueCalculator(
    league,
    Object.values(toLeagueUsers(league, data)) as Array<LeagueUser>
  ).users;

  return (
    <LeagueRankingContent
      calculatedLeague={league}
      users={users}
      currentUser={user}
    />
  );
};
