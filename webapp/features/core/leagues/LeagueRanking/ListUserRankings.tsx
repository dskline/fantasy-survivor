import { useGetLeagueParticipants } from "@/features/core/leagues/crud/getLeagueParticipants";
import { toLeagueUsers } from "@/features/core/leagues/LeaguePage/toLeagueUsers";
import {
  LeagueProps,
  LeagueUser,
} from "@/features/core/leagues/LeaguePage/types";
import { rankLeagueCalculator } from "@/features/league-formats/rank/rankLeagueCalculator";

type Props = {
  league: LeagueProps;
  maxEpisodes: number;
};
export const ListUserRankings = ({ league, maxEpisodes }: Props) => {
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
  );
  return (
    <div>
      {JSON.stringify(results.users.map((u) => u.scoreByEpisode))}
      {results.users.map((user) => (
        <div key={user.id}>
          {user.userRoster?.teamName} - {user.scoreByEpisode?.[maxEpisodes - 1]}
        </div>
      ))}
    </div>
  );
};
