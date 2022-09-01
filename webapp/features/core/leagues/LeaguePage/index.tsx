import React, { useEffect } from "react";

import { useRouter } from "next/router";
import { toast } from "react-toastify";

import { LoginModal } from "@/features/core/auth/login/LoginModal";
import { useAuthValidation } from "@/features/core/auth/useAuthValidation";
import {
  LeagueFormats,
  RealitySeries,
  Seasons,
} from "@/features/core/db/graphql/schema";
import { createLeagueParticipant } from "@/features/core/leagues/crud/createLeagueParticipant";
import { useGetLeagueParticipants } from "@/features/core/leagues/crud/getLeagueParticipants";
import { LeagueHeader } from "@/features/core/leagues/LeaguePage/LeagueHeader";
import { LeaguePills } from "@/features/core/leagues/LeaguePage/LeaguePills";
import { RulesTab } from "@/features/core/leagues/LeaguePage/RulesTab";

export type LeaguePageProps = {
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
export const LeaguePage = (props: LeaguePageProps) => {
  const { user } = useAuthValidation();
  const [showLoginModal, setShowLoginModal] = React.useState(false);
  const [isJoining, setIsJoining] = React.useState(false);

  const { data } = useGetLeagueParticipants(props.id, user?.id, {
    skip: !user,
  });
  const isUserInLeague = !!data?.league_participantsCollection?.edges.length;

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
  }, [isJoining, user?.id]);

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-2 p-4">
      <LeagueHeader
        {...props}
        isUserInLeague={isUserInLeague}
        onJoin={() => setIsJoining(true)}
      />
      <div className="md:hidden">
        <LeaguePills {...props} />
      </div>
      <RulesTab {...props} />
      {!isUserInLeague && (
        <button
          type="button"
          className="m-4 text-center font-semibold text-blue-600 underline"
          onClick={() => setIsJoining(true)}
        >
          Join this league and begin filling out your roster
        </button>
      )}
      {JSON.stringify(data)}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </div>
  );
};
