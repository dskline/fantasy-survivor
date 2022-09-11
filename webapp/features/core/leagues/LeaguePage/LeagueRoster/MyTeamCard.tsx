import React from "react";

import classnames from "classnames";

import { ContestantChip } from "@/features/core/leagues/LeaguePage/LeagueRoster/ContestantChip";
import { Contestant, Roster } from "@/features/core/leagues/LeaguePage/types";

// TODO: This should depend on the league type/settings
const ROSTER_SIZE = 9;

type Props = {
  roster: Roster;
  onRosterChange: (roster: Roster) => void;
  selectedContestant: Contestant;
};
export const MyTeamCard = ({
  roster,
  onRosterChange,
  selectedContestant,
}: Props) => (
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
      {[...Array.from({ length: ROSTER_SIZE })].map((_, i) => {
        const rosterContestant = roster[i];
        const matchesSelected =
          rosterContestant?.data.id === selectedContestant.id;
        if (matchesSelected) {
          return (
            <button
              onClick={() => {
                delete roster[i];
                onRosterChange(roster);
              }}
            >
              <ContestantChip
                key={i}
                contestant={rosterContestant?.data}
                ranking={i + 1}
              />
            </button>
          );
        }
        return (
          <button
            key={i}
            className={classnames(
              "group z-10 grid",
              rosterContestant ? "cursor-grabbing" : "cursor-copy"
            )}
            onClick={() => {
              if (rosterContestant) {
                delete roster[i];
              }
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
              onRosterChange(roster);
            }}
          >
            <div className="col-span-full row-span-full row-start-1 opacity-0 group-hover:opacity-60">
              <ContestantChip contestant={selectedContestant} />
            </div>
            {rosterContestant ? (
              <div className="relative col-span-full row-span-full row-start-1 group-hover:opacity-0">
                <ContestantChip
                  contestant={rosterContestant.data}
                  ranking={i + 1}
                />
              </div>
            ) : (
              <div className="col-span-full row-span-full row-start-1 opacity-60 group-hover:opacity-0">
                <ContestantChip
                  renderPlaceholder={() => (
                    <div className="flex w-full items-center justify-center text-xl font-semibold">
                      {i + 1}
                    </div>
                  )}
                ></ContestantChip>
              </div>
            )}
          </button>
        );
      })}
    </div>
  </div>
);
