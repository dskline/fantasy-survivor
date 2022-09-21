import {
  LeaguePageTab,
  leagueTabs,
} from "@/features/core/leagues/LeaguePage/LeagueTabs/leagueTabs";
import { LeagueUser } from "@/features/core/leagues/LeaguePage/types";

const PUBLIC_TABS: LeaguePageTab[] = ["rules"];

export const getAvailableTabs = (user: LeagueUser) =>
  user.participantId
    ? (Object.keys(leagueTabs) as LeaguePageTab[])
    : PUBLIC_TABS;
