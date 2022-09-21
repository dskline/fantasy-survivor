import React from "react";

import { RuleDetails } from "@/features/core/leagues/LeaguePage/RuleDetails";
import { LeagueProps, LeagueUser } from '@/features/core/leagues/LeaguePage/types'

type Props = {
  league: LeagueProps;
  user: LeagueUser;
  onJoinLeague: () => void;
};
export const LeagueDetails = ({ league, user, onJoinLeague }: Props) => (
  <>
    <RuleDetails {...league} />
    {!user.participantId && (
      <button
        type="button"
        className="m-6 block w-full text-center font-semibold text-blue-600 underline"
        onClick={onJoinLeague}
      >
        Join this league and begin filling out your roster
      </button>
    )}
  </>
);
