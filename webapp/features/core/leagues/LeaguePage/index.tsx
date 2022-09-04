import React, { useEffect } from "react";

import { useUser } from "@supabase/auth-helpers-react";
import { toast } from "react-toastify";

import { LoginModal } from "@/features/core/auth/login/LoginModal";
import {
  LeagueFormats,
  RealitySeries,
  Seasons,
} from "@/features/core/db/graphql/schema";
import { createLeagueParticipant } from "@/features/core/leagues/crud/createLeagueParticipant";
import { useGetLeagueParticipants } from "@/features/core/leagues/crud/getLeagueParticipants";
import { LeagueDetails } from "@/features/core/leagues/LeaguePage/LeagueDetails";

export type LeagueProps = {
  id: string;
  title?: string | null;
  format: Pick<LeagueFormats, "title" | "description">;
  show: Pick<RealitySeries, "title">;
  season: Pick<Seasons, "title" | "logo_src">;
  orderedRules: Array<{
    id: string;
    description: string;
    points: number;
  }>;
};
export const LeaguePage = (props: LeagueProps) => {
  const { user, isLoading } = useUser();
  const [showLoginModal, setShowLoginModal] = React.useState(false);
  const [isJoining, setIsJoining] = React.useState(false);

  const [res] = useGetLeagueParticipants({
    filter: {
      league: { eq: props.id },
      participant: { eq: user?.id },
    },
  });
  const { data, fetching } = res;

  useEffect(() => {
    if (isJoining && !user?.id) {
      setShowLoginModal(true);
    } else if (isJoining && user?.id) {
      createLeagueParticipant({
        league: props.id,
        participant: user.id,
      })
        .then(() => {
          setIsJoining(false);
          return true;
        })
        .catch(() => {
          toast.error("There was an error joining the league.");
        });
    }
  }, [isJoining, user?.id, props.id]);

  return (
    <>
      <LeagueDetails
        league={props}
        user={{
          isInLeague:
            !!user && !!data?.league_participantsCollection?.edges.length,
          isLoading: isLoading || fetching,
        }}
        onJoinLeague={() => setIsJoining(true)}
      />
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </>
  );
};
