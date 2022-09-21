import { useState } from "react";

import {
  LeagueProps,
  LeagueUser,
} from "@/features/core/leagues/LeaguePage/types";
import { ContestantPicker } from "@/features/core/leagues/LeagueRoster/ContestantPicker";
import { UpdateRoster } from "@/features/core/leagues/LeagueRoster/UpdateRoster";

type Props = {
  league: LeagueProps;
  user: LeagueUser;
};
export const LeagueRoster = ({ league, user }: Props) => {
  const [selectedContestant, setSelectedContestant] = useState(
    league.contestants[0]
  );

  return (
    <div className="flex flex-col gap-6">
      <UpdateRoster
        user={user}
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
