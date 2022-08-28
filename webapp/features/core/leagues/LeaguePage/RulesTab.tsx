import React from "react";

import classnames from "classnames";

import { LeaguePageProps } from "@/features/core/leagues/LeaguePage/index";

export const RulesTab = ({ format, orderedRules }: LeaguePageProps) => (
  <div className="flex flex-col gap-2">
    <h3 className="mb-2 text-lg font-semibold">Rules</h3>
    <div className="font-semibold">{format.title}</div>
    <div className="text-sm">{format.description}</div>
    <div className="my-4 grid max-w-lg grid-cols-[1fr_auto_1fr] gap-4 md:pl-8">
      {orderedRules.map(({ id, description, points }) => (
        <React.Fragment key={id}>
          <div className="my-auto">-</div>
          <div className="my-auto text-sm">{description}</div>
          <div
            className={classnames(
              "my-auto text-right font-semibold",
              points > 0 ? "text-green-700" : "text-red-600"
            )}
          >
            {points > 0 ? `+${points}` : points}
          </div>
        </React.Fragment>
      ))}
    </div>
  </div>
);
