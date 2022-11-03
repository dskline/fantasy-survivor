import { SurvivorEpisode } from "@/seed/survivor/seeder/SeasonSeeder";
import { Contestants } from "@/seed/survivor/us/43/tribes";

export const episode7: SurvivorEpisode = {
  startTime: new Date("Nov 02 2022 19:00:00 EST"),
  events: [
    {
      rule: "ChallengeWin",
      players: [Contestants.MIKE],
    },
    {
      rule: "Advantage",
      players: [Contestants.JAMES],
      comment: "Knowledge is Power (steal an advantage or idol)",
    },
    {
      rule: "VoteTarget",
      players: [Contestants.DWIGHT, Contestants.JAMES, Contestants.RYAN],
    },
    {
      rule: "VotedOut",
      players: [Contestants.DWIGHT],
    },
  ],
};
