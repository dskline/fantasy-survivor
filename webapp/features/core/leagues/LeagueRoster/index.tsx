import { useState } from "react";

import {
  LeagueProps,
  LeagueUser,
} from "@/features/core/leagues/LeaguePage/types";
import { ContestantPicker } from "@/features/core/leagues/LeagueRoster/ContestantPicker";
import { RosterCard } from "@/features/core/leagues/LeagueRoster/RosterCard";
import { RosterHeader } from "@/features/core/leagues/LeagueRoster/RosterHeader";
import { useRosterByUser } from "@/features/core/leagues/LeagueRoster/useRosterByUser";

type Props = {
  league: LeagueProps;
  user: LeagueUser;
};
export const LeagueRoster = ({ league, user }: Props) => {
  const { rosterByUser, updateRoster } = useRosterByUser(league);
  const [selectedContestant, setSelectedContestant] = useState(
    league.contestants[0]
  );

  return (
    <div className="flex flex-col gap-6">
      <RosterHeader />
      <RosterCard
        roster={(user.data ? rosterByUser[user.data.id] : undefined) || []}
        onRosterChange={(roster) => {
          if (user.data?.id) {
            updateRoster(user.data.id, roster);
          }
        }}
        selectedContestant={selectedContestant}
        setSelectedContestant={setSelectedContestant}
      />
      <ContestantPicker
        contestants={league.contestants}
        selectedContestant={selectedContestant}
        setSelectedContestant={setSelectedContestant}
      />
    </div>
  );
};
