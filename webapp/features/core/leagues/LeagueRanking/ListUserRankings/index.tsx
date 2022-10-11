import React from "react";

import classnames from "classnames";
import { motion } from "framer-motion";

import { LeagueUser } from "@/features/core/leagues/LeaguePage/types";
import { LeagueRankingSection } from "@/features/core/leagues/LeagueRanking/LeagueRankingSection";
import { sortUsersByScore } from "@/features/core/leagues/LeagueRanking/ListUserRankings/sortUsersByScore";
import { UserRankingRow } from "@/features/core/leagues/LeagueRanking/ListUserRankings/UserRankingRow";
import { RankingFilter } from "@/features/core/leagues/LeagueRanking/types";

type Props = {
  currentUser: LeagueUser;
  users: Array<LeagueUser>;
  filter: RankingFilter;
};
const ListUserRankingsImpl = ({ currentUser, users, filter }: Props) => {
  const sortedUsers = sortUsersByScore(users, filter);
  const sortedUsersByPreviousEpisode =
    filter.episodeMaxIndex === filter.episodeMinIndex
      ? sortedUsers
      : sortUsersByScore(users, {
          ...filter,
          episodeMaxIndex: filter.episodeMaxIndex - 1,
        });

  return (
    <LeagueRankingSection header="Leaderboard">
      {(isExpanded) => (
        <table className="w-full">
          <tbody>
            {sortedUsers.map((user, index) => {
              if (
                !user.scoreByEpisode?.[filter.episodeMaxIndex] ||
                !user.scoreByEpisode?.[filter.episodeMinIndex - 1]
              ) {
                return <></>;
              }
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
              const previousScore =
                filter.episodeMaxIndex === filter.episodeMinIndex
                  ? undefined
                  : user.scoreByEpisode[filter.episodeMaxIndex - 1] -
                    user.scoreByEpisode[filter.episodeMinIndex - 1];
              const previousRanking = previousScore
                ? sortedUsersByPreviousEpisode.findIndex(
                    (u) =>
                      u.scoreByEpisode?.[filter.episodeMaxIndex - 1] &&
                      (
                        u.scoreByEpisode[filter.episodeMaxIndex - 1] -
                        u.scoreByEpisode[filter.episodeMinIndex - 1]
                      ).toFixed(2) === previousScore.toFixed(2)
                  ) + 1
                : undefined;

              return (
                <motion.tr
                  key={user.id}
                  layoutId={user.id}
                  className={classnames(
                    "w-full [&>td]:px-0",
                    "[&>td:last-child>div]:rounded-r-lg [&>td:first-child>div]:rounded-l-lg",
                    isExpanded ? "[&>td]:py-1 [&>td>div]:h-20 [&>td>div]:md:h-14" : "[&>td]:py-0.5 [&>td>div]:h-10",
                    isExpanded || index < 5
                      ? ""
                      : "max-h-0 [&>td>div]:h-8",
                    currentUser.id === user.id
                      ? "text-blue-700 [&>td>div]:border-blue-600/50 [&>td>div]:bg-blue-200/50"
                      : "text-gray-800 [&>td>div]:border-slate-200 [&>td>div]:bg-white"
                  )}
                >
                  {(isExpanded || index < 5) && user.userRoster && (
                    <UserRankingRow
                      isExpanded={isExpanded}
                      userRoster={user.userRoster}
                      score={score}
                      ranking={ranking}
                      pointDiffFromPrevious={
                        previousScore ? score - previousScore : undefined
                      }
                      previousRanking={previousRanking}
                    />
                  )}
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      )}
    </LeagueRankingSection>
  );
};

export const ListUserRankings = React.memo(
  ListUserRankingsImpl,
  (prev, next) =>
    prev.filter.episodeMinIndex === next.filter.episodeMinIndex &&
    prev.filter.episodeMaxIndex === next.filter.episodeMaxIndex &&
    prev.filter.lastWatchedEpisodeIndex === next.filter.lastWatchedEpisodeIndex
);
