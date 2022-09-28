import React from "react";

import classnames from "classnames";

import { Contestant, Roster } from "@/features/core/leagues/LeaguePage/types";
import { RosterCard } from "@/features/core/leagues/LeagueRoster/RosterCard/index";
import { RosterCardItem } from "@/features/core/leagues/LeagueRoster/RosterCard/RosterCardItem";

type Props = {
  roster: Roster;
  rosterSize: number;
  onRosterChange: (roster: Roster) => void;
  selectedContestant: Contestant;
  setSelectedContestant: (contestant: Contestant) => void;
  renderActionBar?: () => React.ReactNode;
};
export const EditableRosterCard = ({
  roster,
  rosterSize,
  onRosterChange,
  selectedContestant,
  setSelectedContestant,
  renderActionBar,
}: Props) => (
  <RosterCard teamName="My Team" renderActionBar={renderActionBar}>
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
              !rosterContestant && i === rosterSize - 1 && "static"
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
            <RosterCardItem
              ranking={i + 1}
              contestant={rosterContestant?.data}
              hoverContestant={selectedContestant}
            />
          </button>
          <div
            className={classnames("hidden", i === rosterSize - 1 && "static")}
          >
            <RosterCardItem contestant={rosterContestant?.data} />
          </div>
        </React.Fragment>
      );
    })}
  </RosterCard>
);
