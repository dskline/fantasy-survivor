import React from "react";

import classnames from "classnames";

import { Contestant, Roster } from "@/features/core/leagues/LeaguePage/types";
import { RosterItem } from "@/features/core/leagues/LeagueRoster/RosterCard/RosterItem";

type Props = {
  roster: Roster;
  rosterSize: number;
  onRosterChange: (roster: Roster) => void;
  selectedContestant: Contestant;
  setSelectedContestant: (contestant: Contestant) => void;
  renderActionBar?: () => React.ReactNode;
};
export const RosterCard = ({
  roster,
  rosterSize,
  onRosterChange,
  selectedContestant,
  setSelectedContestant,
  renderActionBar,
}: Props) => (
  <div className="flex flex-col gap-3 rounded-lg border-2 border-blue-500 bg-blue-50 p-4 pt-2">
    <div className="flex h-5 items-center justify-between text-xs">
      <span className="font-semibold text-blue-800">My Team</span>
      <span className="flex items-center gap-2">
        {renderActionBar?.()}
      </span>
    </div>
    <div
      className={classnames(
        "grid justify-between gap-3",
        "grid-cols-[repeat(auto-fill,12vw)] md:grid-cols-[repeat(auto-fill,12%)]"
      )}
    >
      {[...Array.from({ length: rosterSize })].map((_, i) => {
        const rosterContestant = roster[i];
        const matchesSelected =
          rosterContestant?.data.id === selectedContestant.id;
        return (
          <button
            key={i}
            type="button"
            className={classnames(
              matchesSelected && "cursor-no-drop",
              !rosterContestant && "cursor-copy"
            )}
            onClick={() => {
              if (matchesSelected) {
                delete roster[i];
              }
              if (rosterContestant) {
                setSelectedContestant(rosterContestant.data);
              } else {
                // move the contestant from its previous location, if necessary
                for (const [key, value] of Object.entries(roster)) {
                  if (value?.data.id === selectedContestant.id) {
                    delete roster[Number.parseInt(key)];
                    break;
                  }
                }
                roster[i] = {
                  rank: "abc",
                  data: selectedContestant,
                };
              }
              onRosterChange(roster);
            }}
          >
            <RosterItem
              ranking={i + 1}
              currentContestant={rosterContestant?.data}
              hoverContestant={selectedContestant}
            />
          </button>
        );
      })}
    </div>
  </div>
);
