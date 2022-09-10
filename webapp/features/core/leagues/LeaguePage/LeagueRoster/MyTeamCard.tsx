import classnames from "classnames";

import { ContestantChip } from "@/features/core/leagues/LeaguePage/LeagueRoster/ContestantChip";
import { Contestant } from "@/features/core/leagues/LeaguePage/types";

// TODO: This should depend on the league type/settings
const ROSTER_SIZE = 9;

type Props = {
  selectedContestant: Contestant;
  setSelectedContestant: (contestant: Contestant) => void;
};
export const MyTeamCard = ({ selectedContestant }: Props) => (
  <div className="flex flex-col gap-2 rounded-lg border-2 border-blue-500 bg-blue-50 p-4 pt-2">
    <div className="flex justify-between text-xs">
      <span className="font-semibold text-blue-800">My Team</span>
      <span className="italic text-gray-500">Unsaved</span>
    </div>
    <div
      className={classnames(
        "grid justify-between gap-3",
        "grid-cols-[repeat(auto-fill,12vw)] md:grid-cols-[repeat(auto-fill,12%)]"
      )}
    >
      {[...Array.from({ length: ROSTER_SIZE })].map((_, i) => (
        <button
          key={i}
          className="grid cursor-copy justify-between opacity-50 grayscale"
        >
          <div className="absolute col-span-full row-span-full row-start-1 flex h-full w-full items-center justify-center text-xl">
            {i + 1}
          </div>
          <ContestantChip
            contestant={selectedContestant}
            className="col-span-full row-span-full row-start-1 opacity-0 hover:opacity-60"
          />
        </button>
      ))}
    </div>
  </div>
);
