import { useState } from "react";

import { BsFilterRight } from "react-icons/bs";
import { toast } from "react-toastify";

import { Tooltip } from "@/features/components/Tooltip";
import {
  LeagueProps,
  LeagueUser,
} from "@/features/core/leagues/LeaguePage/types";
import { ListUserRankings } from "@/features/core/leagues/LeagueRanking/ListUserRankings";
import { RankingFilter } from "@/features/core/leagues/LeagueRanking/types";

enum Views {
  "USER_RANKING" = "Players",
  "CONTESTANT_RANKING" = "Contestant Breakdown",
}

type Props = {
  calculatedLeague: LeagueProps;
  users: Array<LeagueUser>;
  currentUser: LeagueUser;
};
export const LeagueRankingContent = ({
  calculatedLeague,
  users,
  currentUser,
}: Props) => {
  const [view, setView] = useState<Views>(Views.USER_RANKING);
  const episodes = calculatedLeague.orderedEpisodes;
  let lastWatchedEpisodeIndex = episodes.findIndex((e) => !e.watched) - 1;
  if (lastWatchedEpisodeIndex === -2) {
    lastWatchedEpisodeIndex = episodes.length;
  }
  const [filter, setFilter] = useState<RankingFilter>({
    episodeMinIndex: 2,
    episodeMaxIndex: lastWatchedEpisodeIndex,
    lastWatchedEpisodeIndex,
  });
  const isMultipleEpisodes =
    filter.episodeMaxIndex - filter.episodeMinIndex > 0;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="flex items-center gap-2 text-sm">
          Displaying scores for episode
          {isMultipleEpisodes
            ? `s ${filter.episodeMinIndex} - ${filter.episodeMaxIndex}`
            : ` ${filter.episodeMinIndex}`}
          <Tooltip placement="bottom-start">
            <div className="w-64">
              Roster creation ends at episode 2, so scores for episode 1 are
              omitted.
            </div>
          </Tooltip>
        </div>
        <button
          className="rounded border border-current p-1"
          onClick={() =>
            toast.info("Not yet implemented", { toastId: "ranking-filter" })
          }
        >
          <BsFilterRight className="h-6 w-6" />
        </button>
      </div>
      {view === Views.USER_RANKING && (
        <ListUserRankings
          currentUser={currentUser}
          users={users}
          filter={filter}
        />
      )}
    </div>
  );
};
