import { useGetLeagueParticipants } from "@/features/core/leagues/crud/getLeagueParticipants";
import {
  LeagueProps,
  LeagueUser,
  Roster,
} from "@/features/core/leagues/LeaguePage/types";
import { ContestantChip } from "@/features/core/leagues/LeagueRoster/ContestantChip";
import { toRosterByUser } from "@/features/core/leagues/LeagueRoster/RosterAdapter";
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
  const rosters = toRosterByUser(league, data);
  const userRoster = user.data?.id ? rosters[user.data?.id] : undefined;

  return (
    <div className="flex flex-col gap-6">
      {userRoster && (
        <RosterCard teamName={userRoster.teamName}>
          <RosterItems roster={userRoster.roster} />
        </RosterCard>
      )}
      {Object.keys(rosters)
        .filter((key) => key !== user.data?.id)
        .map((key) => {
          const roster = rosters[key]?.roster || [];
          return (
            <RosterCard key={key} teamName={rosters[key]?.teamName || ""}>
              <RosterItems roster={roster} />
            </RosterCard>
          );
        })}
    </div>
  );
};

const RosterItems = ({ roster }: { roster: Roster }) => (
  <>
    {[...Array.from({ length: 9 })].map((_, i) => {
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
