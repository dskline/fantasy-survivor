import React from "react";

import classnames from "classnames";

type Props = {
  children: React.ReactNode;
  teamName: string;
  renderActionBar?: () => React.ReactNode;
};
export const RosterCard = ({
  children,
  teamName,
  renderActionBar,
}: Props) => (
  <div className="flex flex-col gap-3 rounded-lg border-2 border-blue-500 bg-blue-50 p-4 pt-2">
    <div className="flex h-5 items-center justify-between text-xs">
      <span className="font-semibold text-blue-800">{teamName}</span>
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
