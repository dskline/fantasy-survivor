import { useUser } from "@supabase/auth-helpers-react";

import { useGetLeagueParticipants } from "@/features/core/leagues/crud/getLeagueParticipants";
import { toLeagueUsers } from "@/features/core/leagues/LeaguePage/toLeagueUsers";
import {
  LeagueProps,
  LeagueUser,
  UserRoster,
} from "@/features/core/leagues/LeaguePage/types";

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
  const features =
    participant?.profiles?.user_featuresCollection?.edges.map(
      (edge) => edge.node.feature
    ) || [];

  return data && userId
    ? {
        ...(toLeagueUsers(league, data)[userId] as LeagueUser),
        isLoading: isLoading || fetching,
        features,
      }
    : {
        isLoading: isLoading || fetching,
        userRoster: {} as UserRoster,
        features: [],
        watched: [],
      };
};
