import React, { useEffect } from "react";

import { useUser } from "@supabase/auth-helpers-react";
import { toast } from "react-toastify";

import { LoginModal } from "@/features/core/auth/login/LoginModal";
import { createLeagueParticipant } from "@/features/core/leagues/crud/createLeagueParticipant";
import { useGetLeagueParticipants } from "@/features/core/leagues/crud/getLeagueParticipants";
import { LeagueDetails } from "@/features/core/leagues/LeaguePage/LeagueDetails";
import { LeagueHeader } from "@/features/core/leagues/LeaguePage/LeagueHeader";
import {
  LeagueProps,
  UserContext,
} from "@/features/core/leagues/LeaguePage/types";

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
  const userContext: UserContext = {
    isInLeague: !!user && !!data?.league_participantsCollection?.edges.length,
    isLoading: isLoading || fetching,
  };

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
      <div className="mx-auto flex max-w-xl flex-col pt-6">
        <LeagueHeader
          league={props}
          user={userContext}
          onJoinLeague={() => setIsJoining(true)}
        />
        <main className="mt-4 flex flex-col gap-4 rounded-t-xl bg-white px-6 pt-3 pb-24 shadow-2xl">
          <LeagueDetails
            league={props}
            user={userContext}
            onJoinLeague={() => setIsJoining(true)}
          />
        </main>
      </div>
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </>
  );
};
