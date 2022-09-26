import {
  LeaguePageTab,
  leagueTabs,
} from "@/features/core/leagues/LeaguePage/LeagueTabs/leagueTabs";
import { LeagueUser } from "@/features/core/leagues/LeaguePage/types";

const PUBLIC_TABS: LeaguePageTab[] = ["rules"];

export const getAvailableTabs = (user: LeagueUser) => {
  if (!user.participantId) {
    return PUBLIC_TABS;
  }
  let tabs = Object.keys(leagueTabs) as LeaguePageTab[];

  if (!user.features.includes("league_scores")) {
    tabs = tabs.filter((tab) => tab !== "ranking");
  }
  return tabs;
};
