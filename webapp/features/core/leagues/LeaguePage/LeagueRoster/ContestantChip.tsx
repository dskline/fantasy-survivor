import React from "react";

import classnames from "classnames";

import { Thumbnail } from "@/features/components/Image/Thumbnail";
import { Contestant } from "@/features/core/leagues/LeaguePage/types";

import Dict = NodeJS.Dict;

const BORDER_COLOR: Dict<string> = {
  blue: "border-blue-500",
  green: "border-green-500",
  orange: "border-orange-500",
  gray: "border-slate-400",
};

type Props = {
  contestant?: Contestant;
  renderPlaceholder?: () => React.ReactNode;
  ranking?: number;
};
export const ContestantChip = ({
  contestant,
  renderPlaceholder,
  ranking,
}: Props) => {
  const { portrait_src, fullName, team_color } = contestant || {};
  return (
    <div className="relative h-12 w-12 overflow-hidden rounded-full md:h-16 md:w-16">
      <div
        className={classnames(
          "flex h-full rounded-full shadow shadow-gray-500",
          "border-2 md:border-[3px]",
          BORDER_COLOR[team_color ?? "gray"]
        )}
      >
        {renderPlaceholder?.()}
        {portrait_src && (
          <Thumbnail src={portrait_src} size={100} round name={fullName} />
        )}
      </div>
      {ranking && (
        <div
          className={classnames(
            "absolute bottom-0 left-0 flex h-2/5 w-full items-end justify-center pb-px",
            "bg-gradient-to-t from-black/30 to-black/0 text-xs font-bold text-gray-100"
          )}
        >
          {ranking}
        </div>
      )}
    </div>
  );
};
