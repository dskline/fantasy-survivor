import { useState } from "react";

import { useUpdateWatched } from "@/features/core/leagues/crud/updateWatched";
import {
  LeagueProps,
  LeagueUser,
} from "@/features/core/leagues/LeaguePage/types";
import { WatchedEpisodes } from "@/features/core/leagues/LeaguePage/WatchedEpisodes";
import { ListUserRankings } from "@/features/core/leagues/LeagueRanking/ListUserRankings";

enum Views {
  "RANKING",
  "CONFIRM_WATCHED",
}

type Props = {
  league: LeagueProps;
  user: LeagueUser;
};
export const LeagueRanking = ({ league, user }: Props) => {
  const totalEpisodes = league.orderedEpisodes.length;
  const hasWatchedAll = user.watched.length === totalEpisodes;
  const [view, setView] = useState<Views>(
    hasWatchedAll ? Views.RANKING : Views.CONFIRM_WATCHED
  );
  const [episodes, setEpisodes] = useState(
    league.orderedEpisodes.map((e) => ({
      ...e,
      watched: user.watched.includes(e.id),
    }))
  );
  const { setWatched, setUnwatched } = useUpdateWatched();
  const handleWatched = (episodeId: string, watched: boolean) => {
    const episode = episodes.find((e) => e.id === episodeId);
    if (episode) {
      episode.watched = watched;
      setEpisodes([...episodes]);
    }
    if (user.id) {
      if (watched) {
        setWatched(user.id, episodeId);
      } else {
        setUnwatched(user.id, episodeId);
      }
    }
  };
  const firstUnwatched = episodes.findIndex((e) => !e.watched);

  return (
    <div>
      {view === Views.CONFIRM_WATCHED && (
        <WatchedEpisodes
          episodes={episodes}
          onChange={handleWatched}
          spoilerMessage={`Mark the episodes you've watched to continue. We will only display the episodes you've watched in the rankings.`}
          continueText="Continue to the rankings"
          onComplete={() => setView(Views.RANKING)}
        />
      )}
      {view === Views.RANKING && (
        <ListUserRankings
          league={league}
          maxEpisodes={
            firstUnwatched === -1 ? totalEpisodes : firstUnwatched - 1
          }
        />
      )}
    </div>
  );
};
