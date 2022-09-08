import { useUser } from "@supabase/auth-helpers-react";

import { useGetLeagueParticipants } from "@/features/core/leagues/crud/getLeagueParticipants";

export const useLeagueUser = (leagueId: string) => {
  const { user, isLoading } = useUser();

  const { data, fetching } = useGetLeagueParticipants({
    filter: {
      league: { eq: leagueId },
      participant: { eq: user?.id },
    },
  });

  return {
    data: user,
    isInLeague: !!user && !!data?.league_participantsCollection?.edges.length,
    isLoading: isLoading || fetching,
  };
};
