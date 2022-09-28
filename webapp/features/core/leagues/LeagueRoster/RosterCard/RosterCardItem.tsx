import React from "react";

import { Contestant } from "@/features/core/leagues/LeaguePage/types";
import { ContestantChip } from "@/features/core/leagues/LeagueRoster/ContestantChip";

type Props = {
  ranking?: number;
  contestant?: Contestant;
  hoverContestant?: Contestant;
};
export const RosterCardItem = ({
  ranking,
  contestant,
  hoverContestant,
}: Props) => (
  <div className="group z-10 grid">
    {/* Placeholder */}
    {!contestant && (
      <div className="col-span-full row-span-full row-start-1 mx-auto opacity-60 lg:group-hover:opacity-0">
        <ContestantChip
          renderPlaceholder={() => (
            <div className="flex w-full items-center justify-center text-xl font-semibold">
              {ranking}
            </div>
          )}
        />
      </div>
    )}
    {/* Only shown on hover */}
    {hoverContestant && (
      <div className="col-span-full row-span-full row-start-1 mx-auto opacity-0 lg:group-hover:opacity-60">
        <ContestantChip contestant={hoverContestant} ranking={ranking} />
      </div>
    )}
    {/* Always show the current contestant if exists */}
    {contestant && (
      <div className="col-span-full row-span-full row-start-1 mx-auto lg:hover:opacity-0">
        <ContestantChip contestant={contestant} ranking={ranking} />
      </div>
    )}
  </div>
);
