import { useState } from "react";

import { ContestantPicker } from "@/features/core/leagues/LeaguePage/LeagueRoster/ContestantPicker";
import { MyTeamCard } from "@/features/core/leagues/LeaguePage/LeagueRoster/MyTeamCard";
import { RosterHeader } from "@/features/core/leagues/LeaguePage/LeagueRoster/RosterHeader";
import { useRosterByUser } from "@/features/core/leagues/LeaguePage/LeagueRoster/useRosterByUser";
import {
  LeagueProps,
  LeagueUser,
} from "@/features/core/leagues/LeaguePage/types";

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
      <MyTeamCard
        roster={(user.data ? rosterByUser[user.data.id] : undefined) || []}
        onRosterChange={(roster) => {
          if (user.data?.id) {
            updateRoster(user.data.id, roster);
          }
        }}
        selectedContestant={selectedContestant}
      />
      <ContestantPicker
        contestants={league.contestants}
        selectedContestant={selectedContestant}
        setSelectedContestant={setSelectedContestant}
      />
    </div>
  );
};
