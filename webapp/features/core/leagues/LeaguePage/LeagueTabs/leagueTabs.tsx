import { FaInfoCircle } from "react-icons/fa";

export const leagueTabs = {
  roster: {
    title: "Roster",
    icon: FaInfoCircle,
  },
  rules: {
    title: "Rules",
    icon: FaInfoCircle,
  },
} as const;

export type LeaguePageTab = keyof typeof leagueTabs;
