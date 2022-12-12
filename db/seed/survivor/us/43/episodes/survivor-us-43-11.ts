import { SurvivorEpisode } from "@/seed/survivor/seeder/SeasonSeeder";
import { Contestants } from "@/seed/survivor/us/43/tribes";

export const episode11: SurvivorEpisode = {
  startTime: new Date("Nov 30 2022 19:00:00 EST"),
  events: [
    {
      rule: "ChallengeWin",
      players: [Contestants.OWEN, Contestants.KARLA],
    },
    {
      rule: "Advantage",
      players: [Contestants.CODY],
    },
    {
      rule: "VoteTarget",
      players: [Contestants.SAMI],
    },
    {
      rule: "VotedOut",
      players: [Contestants.SAMI],
    },
  ],
};
