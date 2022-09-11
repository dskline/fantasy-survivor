import React from "react";

import classnames from "classnames";

import { LeagueProps } from "@/features/core/leagues/LeaguePage/types";

export const RuleDetails = ({ format, orderedRules }: LeagueProps) => (
  <div className="flex flex-col gap-2">
    <div className="font-semibold">Format: {format.title}</div>
    <div className="text-sm">{format.description}</div>
    <h2 className="mt-6 font-semibold">Event/Point Allocation</h2>
    <div className="-mx-6 mt-2 grid grid-cols-[1fr_auto_4fr] gap-y-1 md:-mx-2 md:px-2">
      {orderedRules.map(({ id, description, points }, i) => {
        const isOdd = i % 2 === 0;
        return (
          <React.Fragment key={id}>
            <div
              className={classnames(
                "flex h-full items-center",
                "pl-4 md:rounded-l-lg md:pl-6",
                isOdd && "bg-blue-100"
              )}
            >
              -
            </div>
            <div
              className={classnames(
                "flex h-full items-center px-6 py-3 text-sm",
                isOdd && "bg-blue-100"
              )}
            >
              {description}
            </div>
            <div
              className={classnames(
                "flex h-full items-center justify-end font-semibold",
                "pr-4  md:rounded-r-lg md:pr-6",
                points > 0 ? "text-green-600" : "text-red-500",
                isOdd && "bg-blue-100"
              )}
            >
              {points > 0 ? `+${points}` : points}
            </div>
          </React.Fragment>
        )
      })}
    </div>
  </div>
);
