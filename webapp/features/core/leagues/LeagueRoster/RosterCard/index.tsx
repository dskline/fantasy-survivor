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
      <span className="flex items-center gap-2">{renderActionBar?.()}</span>
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
        const rosterIndexForSelected = roster.findIndex(
          (rosterItem) => rosterItem?.data.id === selectedContestant.id
        );
        let lastOpenIndex = rosterSize - 1;
        for (let j = lastOpenIndex; j >= 0; j--) {
          if (!roster[j]) {
            lastOpenIndex = j;
            break;
          }
        }
        return (
          <React.Fragment key={rosterContestant?.id || i}>
            <button
              type="button"
              className={classnames(
                matchesSelected && "cursor-no-drop",
                !rosterContestant && "cursor-copy",
                rosterContestant &&
                  !matchesSelected &&
                  rosterIndexForSelected === -1 &&
                  i < lastOpenIndex &&
                  "[&+div]:hover:block [&~button_.text-xl]:hover:opacity-20 [&~.static]:hover:hidden",
                !rosterContestant && i === rosterSize - 1 && "static",
              )}
              onClick={() => {
                if (matchesSelected) {
                  delete roster[i];
                  onRosterChange(roster);
                  return;
                }
                let isSwapping = false;
                // move the contestant from its previous location, if necessary
                for (const [key, value] of Object.entries(roster)) {
                  if (value?.data.id === selectedContestant.id) {
                    if (rosterContestant) {
                      isSwapping = true;
                      roster[Number.parseInt(key)] = rosterContestant;
                    } else {
                      delete roster[Number.parseInt(key)];
                    }
                    break;
                  }
                }
                const toInsert = {
                  rank: "abc",
                  data: selectedContestant,
                };
                if (rosterContestant && !isSwapping) {
                  roster.splice(i, 0, toInsert);
                  let shouldDeleteLastIndex = true;
                  for (let j = i; j < rosterSize; j++) {
                    if (!roster[j]) {
                      roster.splice(j, 1);
                      shouldDeleteLastIndex = false;
                      break;
                    }
                  }
                  if (shouldDeleteLastIndex) {
                    roster.pop();
                  }
                } else {
                  roster[i] = toInsert;
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
            <div
              className={classnames(
                "hidden",
                i === rosterSize - 1 && "static",
              )}
            >
              <RosterItem currentContestant={rosterContestant?.data} />
            </div>
          </React.Fragment>
        );
      })}
    </div>
  </div>
);
