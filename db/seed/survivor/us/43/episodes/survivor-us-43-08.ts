import { SurvivorEpisode } from "@/seed/survivor/seeder/SeasonSeeder";
import { Contestants } from "@/seed/survivor/us/43/tribes";

export const episode8: SurvivorEpisode = {
  startTime: new Date("Nov 09 2022 19:00:00 EST"),
  events: [
    {
      rule: "SitOut",
      players: [
        Contestants.SAMI,
        Contestants.KARLA,
        Contestants.JAMES,
        Contestants.CASSIDY,
        Contestants.JESSE,
      ],
    },
    {
      rule: "ChallengeWin",
      players: [Contestants.OWEN],
    },
    {
      rule: "VoteTarget",
      players: [Contestants.JEANINE, Contestants.RYAN],
    },
    {
      rule: "VotedOut",
      players: [Contestants.JEANINE],
    },
  ],
};
