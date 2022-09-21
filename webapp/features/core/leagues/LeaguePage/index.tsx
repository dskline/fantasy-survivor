import React from "react";

import { LeaguePageContent } from "@/features/core/leagues/LeaguePage/LeaguePageContent";
import { useLeagueTabs } from "@/features/core/leagues/LeaguePage/LeagueTabs/useLeagueTabs";
import { LeagueProps } from "@/features/core/leagues/LeaguePage/types";
import { useLeagueUser } from "@/features/core/leagues/LeaguePage/useLeagueUser";

export const LeaguePage = (props: LeagueProps) => {
  const user = useLeagueUser(props);
  const { currentTab } = useLeagueTabs(user);

  return <LeaguePageContent league={props} user={user} tab={currentTab} />;
};
