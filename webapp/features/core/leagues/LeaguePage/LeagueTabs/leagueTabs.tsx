import { FaInfoCircle } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";

export const leagueTabs = {
  roster: {
    title: "Roster",
    icon: IoPeopleSharp,
  },
  rules: {
    title: "Rules",
    icon: FaInfoCircle,
  },
} as const;

export type LeaguePageTab = keyof typeof leagueTabs;
