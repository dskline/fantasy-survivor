import { useGetLeagueParticipants } from "@/features/core/leagues/crud/getLeagueParticipants";
import { toLeagueUsers } from "@/features/core/leagues/LeaguePage/toLeagueUsers";
import {
  LeagueProps,
  LeagueUser,
  Roster,
} from "@/features/core/leagues/LeaguePage/types";
import { ContestantChip } from "@/features/core/leagues/LeagueRoster/ContestantChip";
import { RosterCard } from "@/features/core/leagues/LeagueRoster/RosterCard";

type Props = {
  league: LeagueProps;
  user: LeagueUser;
};
export const AllRosters = ({ league, user }: Props) => {
  const { data } = useGetLeagueParticipants({
    filter: {
      league: { eq: league.id },
    },
  });
  if (!data) {
    return <div>Loading...</div>;
  }
  const leagueUsers = toLeagueUsers(league, data);
  const userRoster = user.id ? leagueUsers[user.id]?.userRoster : undefined;

  return (
    <div className="flex flex-col gap-6">
      {userRoster && (
        <RosterCard
          teamName={userRoster.teamName}
          onTeamNameChange={() => {
            // TODO
          }}
        >
          <RosterItems roster={userRoster.roster} />
        </RosterCard>
      )}
      {Object.keys(leagueUsers)
        .filter((key) => key !== user.id)
        .map((key) => {
          const userRoster = leagueUsers[key]?.userRoster;
          return (
            <RosterCard key={key} teamName={userRoster?.teamName || ""}>
              <RosterItems roster={userRoster?.roster || []} />
            </RosterCard>
          );
        })}
    </div>
  );
};

const RosterItems = ({ roster }: { roster: Roster }) => (
  <>
    {Array.from({ length: 9 }).map((_, i) => {
      const rosterContestant = roster[i];
      return (
        <ContestantChip
          key={rosterContestant?.id || i}
          ranking={i + 1}
          contestant={rosterContestant?.data}
        />
      );
    })}
  </>
);
