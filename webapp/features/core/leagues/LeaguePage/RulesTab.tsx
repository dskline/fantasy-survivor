import React from "react";

import classnames from "classnames";

import { LeaguePageProps } from "@/features/core/leagues/LeaguePage/index";

export const RulesTab = ({ format, orderedRules }: LeaguePageProps) => (
  <div className="flex flex-col gap-2">
    <h3 className="mb-2 text-lg font-semibold">Rules</h3>
    <div className="font-semibold">{format.title}</div>
    <div className="text-sm">{format.description}</div>
    <div
      className={classnames(
        "my-4 -mx-4 grid grid-cols-[1fr_auto_4fr] gap-y-2 md:-mx-2 md:px-2",
        "[&>*:nth-child(6n-3)]:bg-slate-200 [&>*:nth-child(6n-4)]:bg-slate-200 [&>*:nth-child(6n-5)]:bg-slate-200"
      )}
    >
      {orderedRules.map(({ id, description, points }) => (
        <React.Fragment key={id}>
          <div className="flex h-full items-center pl-4 md:rounded-l-lg md:pl-6">
            -
          </div>
          <div className="flex h-full items-center px-6 py-3 text-sm">
            {description}
          </div>
          <div
            className={classnames(
              "flex h-full items-center justify-end pr-4 font-semibold md:rounded-r-lg md:pr-6",
              points > 0 ? "text-green-600" : "text-red-500"
            )}
          >
            {points > 0 ? `+${points}` : points}
          </div>
        </React.Fragment>
      ))}
    </div>
  </div>
);
