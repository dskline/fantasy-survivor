import { useState } from "react";

import { ContestantPicker } from "@/features/core/leagues/LeaguePage/LeagueRoster/ContestantPicker";
import { MyTeamCard } from "@/features/core/leagues/LeaguePage/LeagueRoster/MyTeamCard";
import { RosterHeader } from "@/features/core/leagues/LeaguePage/LeagueRoster/RosterHeader";
import { LeagueProps } from "@/features/core/leagues/LeaguePage/types";

type Props = {
  league: LeagueProps;
};
export const LeagueRoster = ({ league }: Props) => {
  const [selectedContestant, setSelectedContestant] = useState(
    league.contestants[0]
  );

  return (
    <div className="flex flex-col gap-6">
      <RosterHeader />
      <MyTeamCard
        selectedContestant={selectedContestant}
        setSelectedContestant={setSelectedContestant}
      />
      <ContestantPicker
        contestants={league.contestants}
        selectedContestant={selectedContestant}
        setSelectedContestant={setSelectedContestant}
      />
      {/*{JSON.stringify(rosterByUser)}*/}
    </div>
  );
};
