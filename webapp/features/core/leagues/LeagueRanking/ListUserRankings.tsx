import React from "react";

import classnames from "classnames";
import { motion } from "framer-motion";

import { FadeIn } from "@/features/components/FadeIn/FadeIn";
import { Thumbnail } from "@/features/components/Image/Thumbnail";
import { LeagueUser } from "@/features/core/leagues/LeaguePage/types";
import { LeagueRankingSection } from "@/features/core/leagues/LeagueRanking/LeagueRankingSection";
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
    <LeagueRankingSection header="Leaderboard">
      {(isExpanded) => (
        <div className="flex flex-col">
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
            const ranking =
              sortedUsers.findIndex(
                (u) =>
                  u.scoreByEpisode?.[filter.episodeMaxIndex] &&
                  (
                    u.scoreByEpisode[filter.episodeMaxIndex] -
                    u.scoreByEpisode[filter.episodeMinIndex - 1]
                  ).toFixed(2) === score.toFixed(2)
              ) + 1;

            return (
              <motion.div
                key={user.id}
                layoutId={user.id}
                className={classnames(
                  "flex items-center rounded-lg border-2 pr-4 pl-3",
                  !isExpanded && index > 2 ? "max-h-0 border-0 p-0" : "my-0.5",
                  isExpanded ? "py-2" : "",
                  currentUser.id === user.id
                    ? "border-blue-600/50 bg-blue-200/50 text-blue-700"
                    : "border-slate-200 bg-white text-gray-800"
                )}
              >
                {(isExpanded || index < 3) && (
                  <>
                    <div
                      className={classnames(
                        "flex justify-center font-semibold italic text-blue-800/25",
                        isExpanded ? "w-10 text-5xl" : "w-6 text-3xl"
                      )}
                    >
                      {ranking}
                    </div>
                    <div className="flex flex-col gap-1 pl-4 md:flex-row md:items-center">
                      <div
                        className={classnames(
                          "w-40 text-left text-sm font-semibold",
                          !isExpanded && "truncate"
                        )}
                      >
                        {user.userRoster?.teamName}
                      </div>
                      {isExpanded && (
                        <div className="ml-3 flex flex-row-reverse md:ml-8 [&>*]:-ml-3">
                          {roster.reverse().map((item, index) => (
                            <FadeIn
                              key={item.data.id}
                              show={isExpanded}
                              className={classnames(
                                "rounded-full bg-slate-200 p-[2px]",
                                index < 3 && "hidden md:block"
                              )}
                            >
                              <Thumbnail
                                src={item.data.portrait_src}
                                size={40}
                                round
                                name={item.data.nickname}
                              />
                            </FadeIn>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 text-right font-semibold">
                      {score.toFixed(2)}
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      )}
    </LeagueRankingSection>
  );
};
