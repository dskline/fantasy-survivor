import React from "react";

import classnames from "classnames";
import { IoCaretDown, IoCaretUp } from "react-icons/io5";

import { FadeIn } from "@/features/components/FadeIn/FadeIn";
import { Thumbnail } from "@/features/components/Image/Thumbnail";
import { UserRoster } from "@/features/core/leagues/LeaguePage/types";
import { isEliminated } from "@/features/core/leagues/LeagueRanking/isEliminated";
import { RankingFilter } from "@/features/core/leagues/LeagueRanking/types";

type Props = {
  isExpanded: boolean;
  ranking: number;
  previousRanking?: number;
  score: number;
  pointDiffFromPrevious?: number;
  userRoster: UserRoster;
  filter: RankingFilter;
};
export const UserRankingRow = ({
  isExpanded,
  ranking,
  previousRanking,
  score,
  pointDiffFromPrevious,
  userRoster,
  filter,
}: Props) => (
  <>
    <td>
      <div
        className={classnames(
          "flex items-center justify-center pl-1",
          "text-3xl font-semibold italic text-blue-800/25",
          isExpanded ? "md:text-5xl" : ""
        )}
      >
        {ranking}
      </div>
    </td>
    {previousRanking && (
      <td className={isExpanded ? "text-sm" : "text-xs"}>
        <div className="flex items-center">
          {ranking - previousRanking < 0 && (
            <div className="text-green-500">
              <IoCaretUp />
            </div>
          )}
          {ranking - previousRanking > 0 && (
            <div className="text-red-500">
              <IoCaretDown />
            </div>
          )}
        </div>
      </td>
    )}
    <td>
      <div
        className={classnames(
          "h-full p-2 text-left md:py-0",
          "flex flex-col items-start justify-around md:flex-row md:items-center md:justify-between",
          isExpanded && "gap-1"
        )}
      >
        <div className="flex text-sm font-semibold md:flex-1 md:items-center">
          {userRoster.teamName}
        </div>
        <FadeIn show={isExpanded} className="ml-3 flex md:ml-8 [&>*]:-ml-3">
          {[...userRoster.roster].map((item, index) => (
            <div
              key={item.data.id}
              title={item.data.nickname}
              className={classnames(
                "rounded-full bg-slate-200 p-[2px]",
                index < 3 && "hidden md:block",
                isEliminated(item.data, filter) && "opacity-80 grayscale"
              )}
              style={{ zIndex: 20 - index }}
            >
              <Thumbnail
                src={item.data.portrait_src}
                size={36}
                round
                name={item.data.nickname}
              />
            </div>
          ))}
        </FadeIn>
      </div>
    </td>
    <td>
      <div className="flex items-center justify-end px-2">
        <div className="flex flex-col items-end">
          <div className="text-sm font-semibold">
            {score.toFixed(2)}
            <span className="ml-1 text-xs">pts</span>
          </div>
          {pointDiffFromPrevious && isExpanded && (
            <div
              className={classnames(
                "text-xs",
                pointDiffFromPrevious > 0 ? "text-green-700" : "text-red-600"
              )}
            >
              {pointDiffFromPrevious > 0 && "+"}
              {pointDiffFromPrevious.toFixed(2)}
            </div>
          )}
        </div>
      </div>
    </td>
  </>
);
