import { FaInfoCircle } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineLeaderboard } from "react-icons/md";

export const leagueTabs = {
  ranking: {
    title: "Ranking",
    icon: MdOutlineLeaderboard,
  },
  roster: {
    title: "Rosters",
    icon: IoPeopleSharp,
  },
  rules: {
    title: "Rules",
    icon: FaInfoCircle,
  },
} as const;

export type LeaguePageTab = keyof typeof leagueTabs;
