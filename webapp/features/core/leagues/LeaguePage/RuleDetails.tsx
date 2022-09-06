import React from "react";

import classnames from "classnames";

import { LeagueProps } from "@/features/core/leagues/LeaguePage/types";

export const RuleDetails = ({ format, orderedRules }: LeagueProps) => (
  <div className="flex flex-col gap-2">
    <div className="font-semibold">Format: {format.title}</div>
    <div className="text-sm">{format.description}</div>
    <h2 className="mt-6 font-semibold">Event/Point Allocation</h2>
    <div
      className={classnames(
        "-mx-6 mt-2 grid grid-cols-[1fr_auto_4fr] gap-y-1 md:-mx-2 md:px-2",
        "[&>*:nth-child(6n-3)]:bg-blue-100 [&>*:nth-child(6n-4)]:bg-blue-100 [&>*:nth-child(6n-5)]:bg-blue-100"
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
