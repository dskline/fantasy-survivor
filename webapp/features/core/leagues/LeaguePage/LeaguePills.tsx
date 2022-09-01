import classnames from "classnames";

import { LeaguePageProps } from "@/features/core/leagues/LeaguePage/index";

export const LeaguePills = ({ show, season, format }: LeaguePageProps) => (
  <div className="mt-1 mb-4 flex flex-wrap gap-2 text-xs">
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
