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
  return Object.keys(leagueTabs) as LeaguePageTab[];
};
