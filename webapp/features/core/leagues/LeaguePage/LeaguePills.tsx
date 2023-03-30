import classnames from "classnames";

import { LeagueProps } from "@/features/core/leagues/LeaguePage/types";

export const LeaguePills = ({ show, season, format }: LeagueProps) => (
  <div className="mb-4 mt-1 flex flex-wrap gap-2 text-xs">
    <Pill>{show.title}</Pill>
    <Pill>{season.title}</Pill>
    <Pill>{format.title}</Pill>
  </div>
);
type PillProps = {
  className?: string;
  children: React.ReactNode;
};
const Pill = ({ children, className }: PillProps) => (
  <div
    className={classnames(
      "rounded-full bg-slate-300 px-2 py-px text-slate-600 shadow",
      className
    )}
  >
    {children}
  </div>
);
