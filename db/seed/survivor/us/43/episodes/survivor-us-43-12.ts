import { SurvivorEpisode } from "@/seed/survivor/seeder/SeasonSeeder";
import { Contestants } from "@/seed/survivor/us/43/tribes";

export const episode12: SurvivorEpisode = {
  startTime: new Date("Dec 07 2022 19:00:00 EST"),
  events: [
    {
      rule: "ChallengeWin",
      players: [Contestants.OWEN, Contestants.KARLA, Contestants.CODY],
    },
    {
      rule: "ChallengeWin",
      players: [Contestants.CASSIDY],
    },
    {
      rule: "IdolProtection",
      players: [Contestants.OWEN, Contestants.KARLA],
    },
    {
      rule: "VoteTarget",
      players: [Contestants.CODY],
    },
    {
      rule: "VotedOut",
      players: [Contestants.CODY],
    },
  ],
};
