import React from "react";

import classnames from "classnames";
import { MdOutlineEdit } from "react-icons/md";
import { toast } from "react-toastify";

type Props = {
  children: React.ReactNode;
  teamName: string;
  onTeamNameChange?: (teamName: string) => void;
  renderActionBar?: () => React.ReactNode;
};
export const RosterCard = ({
  children,
  teamName,
  onTeamNameChange,
  renderActionBar,
}: Props) => (
  <div className="flex flex-col gap-3 rounded-lg border-2 border-blue-500 bg-blue-50 p-4 pt-2">
    <div className="flex h-5 items-center justify-between text-xs">
      <span className="truncate font-semibold text-blue-800">
        {onTeamNameChange ? (
          <button
            type="button"
            className="flex items-center gap-1"
            onClick={() =>
              toast.info("Editing your team name will be implemented soon!", {
                toastId: "edit-team-name",
              })
            }
          >
            <MdOutlineEdit className="-mt-px h-4 w-4" />
            {teamName}
          </button>
        ) : (
          teamName
        )}
      </span>
      <span className="flex items-center gap-2">{renderActionBar?.()}</span>
    </div>
    <div
      className={classnames(
        "grid justify-between gap-3",
        "grid-cols-[repeat(auto-fill,12vw)] md:grid-cols-[repeat(auto-fill,12%)]"
      )}
    >
      {children}
    </div>
  </div>
);
