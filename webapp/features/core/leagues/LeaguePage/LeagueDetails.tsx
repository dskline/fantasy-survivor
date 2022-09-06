import React from "react";

import { RuleDetails } from "@/features/core/leagues/LeaguePage/RuleDetails";
import { LeagueProps } from "@/features/core/leagues/LeaguePage/types";

type Props = {
  league: LeagueProps;
  user: {
    isInLeague: boolean;
    isLoading: boolean;
  };
  onJoinLeague: () => void;
};
export const LeagueDetails = ({ league, user, onJoinLeague }: Props) => (
  <>
    <RuleDetails {...league} />
    {!user.isInLeague && (
      <button
        type="button"
        className="m-4 block text-center font-semibold text-blue-600 underline"
        onClick={onJoinLeague}
      >
        Join this league and begin filling out your roster
      </button>
    )}
  </>
);
