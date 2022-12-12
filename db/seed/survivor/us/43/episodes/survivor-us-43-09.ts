import { SurvivorEpisode } from "@/seed/survivor/seeder/SeasonSeeder";
import { Contestants } from "@/seed/survivor/us/43/tribes";

export const episode9: SurvivorEpisode = {
  startTime: new Date("Nov 16 2022 19:00:00 EST"),
  events: [
    {
      rule: "ChallengeWin",
      players: [Contestants.CODY],
    },
    {
      rule: "ChallengeRunnerUp",
      players: [Contestants.KARLA],
    },
    {
      rule: "VoteTarget",
      players: [
        Contestants.OWEN,
        Contestants.JAMES,
        Contestants.CASSIDY,
        Contestants.RYAN,
      ],
    },
    {
      rule: "VotedOut",
      players: [Contestants.JAMES, Contestants.RYAN],
    },
  ],
};
