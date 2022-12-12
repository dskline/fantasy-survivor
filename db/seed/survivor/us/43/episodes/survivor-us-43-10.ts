import { SurvivorEpisode } from "@/seed/survivor/seeder/SeasonSeeder";
import { Contestants } from "@/seed/survivor/us/43/tribes";

export const episode10: SurvivorEpisode = {
  startTime: new Date("Nov 23 2022 19:00:00 EST"),
  events: [
    {
      rule: "ChallengeWin",
      players: [Contestants.NOELLE],
    },
    {
      rule: "ChallengeWin",
      players: [Contestants.CASSIDY],
    },
    {
      rule: "VoteTarget",
      players: [Contestants.KARLA, Contestants.NOELLE, Contestants.SAMI],
    },
    {
      rule: "VotedOut",
      players: [Contestants.NOELLE],
    },
  ],
};
