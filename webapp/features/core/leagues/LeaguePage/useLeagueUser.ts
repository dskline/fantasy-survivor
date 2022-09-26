import { useUser } from "@supabase/auth-helpers-react";

import { useGetLeagueParticipants } from "@/features/core/leagues/crud/getLeagueParticipants";
import {
  LeagueProps,
  LeagueUser,
} from "@/features/core/leagues/LeaguePage/types";
import { toRosterByUser } from "@/features/core/leagues/LeagueRoster/RosterAdapter";

export const useLeagueUser = (league: LeagueProps): LeagueUser => {
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

  const participants = data?.league_participantsCollection?.edges || [];
  const participant = participants.find(
    (edge) => edge.node.participant === userId
  )?.node;

  return {
    data: user,
    participantId: participant?.id,
    isLoading: isLoading || fetching,
    roster: data && userId ? toRosterByUser(league, data)[userId] : undefined,
    features:
      participant?.profiles?.user_featuresCollection?.edges.map(
        (edge) => edge.node.feature
      ) || [],
  };
};
