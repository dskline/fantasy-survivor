import React from "react";

import { LeagueProps } from "@/features/core/leagues/LeaguePage/index";
import { LeagueHeader } from "@/features/core/leagues/LeaguePage/LeagueHeader";
import { LeaguePills } from "@/features/core/leagues/LeaguePage/LeaguePills";
import { RuleDetails } from "@/features/core/leagues/LeaguePage/RuleDetails";

type Props = {
  league: LeagueProps;
  user: {
    isInLeague: boolean;
    isLoading: boolean;
  };
  onJoinLeague: () => void;
};
export const LeagueDetails = ({ league, user, onJoinLeague }: Props) => (
  <div className="mx-auto flex max-w-2xl flex-col gap-2 p-4">
    <LeagueHeader league={league} user={user} onJoinLeague={onJoinLeague} />
    <div className="md:hidden">
      <LeaguePills {...league} />
    </div>
    <RuleDetails {...league} />
    {!user.isInLeague && (
      <button
        type="button"
        className="m-4 text-center font-semibold text-blue-600 underline"
        onClick={onJoinLeague}
      >
        Join this league and begin filling out your roster
      </button>
    )}
  </div>
);
