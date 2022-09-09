import React, { useEffect } from "react";

import { toast } from "react-toastify";

import { FadeIn } from "@/features/components/FadeIn/FadeIn";
import { LoginModal } from "@/features/core/auth/login/LoginModal";
import { createLeagueParticipant } from "@/features/core/leagues/crud/createLeagueParticipant";
import { LeagueDetails } from "@/features/core/leagues/LeaguePage/LeagueDetails";
import { LeagueHeader } from "@/features/core/leagues/LeaguePage/LeagueHeader";
import { LeagueTabs } from "@/features/core/leagues/LeaguePage/LeagueTabs";
import { LeaguePageTab } from "@/features/core/leagues/LeaguePage/LeagueTabs/leagueTabs";
import {
  LeagueProps,
  LeagueUser,
} from "@/features/core/leagues/LeaguePage/types";

type Props = {
  league: LeagueProps;
  user: LeagueUser;
  tab: LeaguePageTab;
};
export const LeaguePageContent = ({ league, user, tab }: Props) => {
  const [showLoginModal, setShowLoginModal] = React.useState(false);
  const [isJoining, setIsJoining] = React.useState(false);

  useEffect(() => {
    if (isJoining && !user.data?.id) {
      setShowLoginModal(true);
    } else if (isJoining && user.data?.id) {
      createLeagueParticipant({
        league: league.id,
        participant: user.data.id,
      })
        .then(() => {
          setIsJoining(false);
          return true;
        })
        .catch(() => {
          toast.error("There was an error joining the league.");
        });
    }
  }, [isJoining, user.data?.id, league.id]);

  return (
    <>
      <div className="mx-auto flex max-w-2xl flex-col pt-6">
        <LeagueHeader
          league={league}
          user={user}
          onJoinLeague={() => setIsJoining(true)}
        />
        <div className="mt-4">
          <LeagueTabs user={user} />
        </div>
        <main className="z-10 grid min-h-screen rounded-t-xl bg-white p-6 pb-40 shadow-2xl">
          <FadeIn show={tab === "rules"}>
            <LeagueDetails
              league={league}
              user={user}
              onJoinLeague={() => setIsJoining(true)}
            />
          </FadeIn>
          <FadeIn show={tab === "roster"}>
            <LeagueRoster league={league} user={user} />
          </FadeIn>
        </main>
      </div>
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </>
  );
};
