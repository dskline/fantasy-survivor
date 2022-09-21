import { useUser } from "@supabase/auth-helpers-react";

import { useGetLeagueParticipants } from "@/features/core/leagues/crud/getLeagueParticipants";
import { LeagueProps } from "@/features/core/leagues/LeaguePage/types";
import { toRosterByUser } from "@/features/core/leagues/LeagueRoster/RosterAdapter";

export const useLeagueUser = (league: LeagueProps) => {
  const { user, isLoading } = useUser();
  const userId = user?.id;

  const { data, fetching } = useGetLeagueParticipants(
    {
      filter: {
        league: { eq: league.id },
        participant: userId ? { eq: userId } : undefined,
      },
    },
    !userId
  );
  console.log('new data', data);

  const participants = data?.league_participantsCollection?.edges || [];
  const participant = participants.find(
    (edge) => edge.node.participant === userId
  )?.node;

  return {
    data: user,
    participantId: participant?.id,
    isLoading: isLoading || fetching,
    roster: data && userId ? toRosterByUser(league, data)[userId] : undefined,
  };
};
