import { createEnumParam, useQueryParam, withDefault } from "use-query-params";

import { getAvailableTabs } from "@/features/core/leagues/LeaguePage/LeagueTabs/getAvailableTabs";
import { LeaguePageTab } from "@/features/core/leagues/LeaguePage/LeagueTabs/leagueTabs";
import { LeagueUser } from "@/features/core/leagues/LeaguePage/types";

export const useLeagueTabs = (user: LeagueUser) => {
  const tabs = getAvailableTabs(user);
  const [currentTab, setTab] = useQueryParam<LeaguePageTab>(
    "tab",
    withDefault(createEnumParam(tabs), tabs[0])
  );
  return {
    tabs,
    currentTab,
    setTab,
  };
};
