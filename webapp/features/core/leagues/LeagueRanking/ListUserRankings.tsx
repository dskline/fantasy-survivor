import React from "react";

import classnames from "classnames";

import { Thumbnail } from "@/features/components/Image/Thumbnail";
import { useGetLeagueParticipants } from "@/features/core/leagues/crud/getLeagueParticipants";
import { toLeagueUsers } from "@/features/core/leagues/LeaguePage/toLeagueUsers";
import {
  LeagueProps,
  LeagueUser,
} from "@/features/core/leagues/LeaguePage/types";
import { rankLeagueCalculator } from "@/features/league-formats/rank/rankLeagueCalculator";

type Props = {
  league: LeagueProps;
  currentUser: LeagueUser;
  maxEpisodes: number;
};
export const ListUserRankings = ({
  league,
  currentUser,
  maxEpisodes,
}: Props) => {
  const { data } = useGetLeagueParticipants({
    filter: {
      league: { eq: league.id },
    },
  });
  if (!data) {
    return <div>Loading...</div>;
  }
  const results = rankLeagueCalculator(
    league,
    Object.values(toLeagueUsers(league, data)) as Array<LeagueUser>
  ).users;
  const sortedResults = results.sort((a, b) =>
    a.scoreByEpisode && b.scoreByEpisode
      ? b.scoreByEpisode[maxEpisodes - 1] - a.scoreByEpisode[maxEpisodes - 1]
      : 0
  );
  return (
    <div className="flex flex-col gap-2">
      {sortedResults.map((user, index) => (
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
              {user.userRoster?.roster.reverse().map((item, index) => (
                <div
                  key={item.data.id}
                  className={classnames(
                    "rounded-full bg-gradient-to-r from-gray-200 to-white p-[2px]",
                    index > 5 && "hidden md:block"
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
            {user.scoreByEpisode?.[maxEpisodes - 1].toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  );
};
