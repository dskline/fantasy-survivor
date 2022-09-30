import React from "react";

import classnames from "classnames";

import { Thumbnail } from "@/features/components/Image/Thumbnail";
import { LeagueUser } from "@/features/core/leagues/LeaguePage/types";
import { RankingFilter } from "@/features/core/leagues/LeagueRanking/types";

type Props = {
  currentUser: LeagueUser;
  users: Array<LeagueUser>;
  filter: RankingFilter;
};
export const ListUserRankings = ({ currentUser, users, filter }: Props) => {
  const sortedUsers = users.sort((a, b) =>
    a.scoreByEpisode && b.scoreByEpisode
      ? b.scoreByEpisode[filter.episodeMaxIndex] -
        b.scoreByEpisode[filter.episodeMinIndex - 1] -
        (a.scoreByEpisode[filter.episodeMaxIndex] -
          a.scoreByEpisode[filter.episodeMinIndex - 1])
      : 0
  );
  return (
    <div className="flex flex-col gap-2">
      {sortedUsers.map((user, index) => {
        if (
          !user.scoreByEpisode?.[filter.episodeMaxIndex] ||
          !user.scoreByEpisode?.[filter.episodeMinIndex - 1]
        ) {
          return <></>;
        }
        const roster = [...(user.userRoster?.roster || [])];
        const score =
          user.scoreByEpisode[filter.episodeMaxIndex] -
          user.scoreByEpisode[filter.episodeMinIndex - 1];
        return (
          <div
            key={user.id}
            className={classnames(
              "flex items-center rounded-lg bg-gradient-to-bl py-2 px-4",
              currentUser.id === user.id
                ? "from-blue-100 to-blue-200 text-blue-800"
                : "from-slate-100 to-slate-200 text-gray-800"
            )}
          >
            <div className="w-10 text-lg font-bold">{index + 1}</div>
            <div className="flex flex-col gap-1 md:flex-row md:items-center">
              <div className="w-32 text-sm font-semibold">
                {user.userRoster?.teamName}
              </div>
              <div className="ml-3 flex flex-row-reverse md:ml-8 [&>*]:-ml-3">
                {roster.reverse().map((item, index) => (
                  <div
                    key={item.data.id}
                    className={classnames(
                      "rounded-full bg-gradient-to-r from-gray-200 to-white p-[2px]",
                      index < 3 && "hidden md:block"
                    )}
                    title={item.data.nickname}
                  >
                    <Thumbnail
                      src={item.data.portrait_src}
                      size={40}
                      round
                      name={item.data.nickname}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 text-right font-semibold">
              {score.toFixed(2)}
            </div>
          </div>
        );
      })}
    </div>
  );
};
