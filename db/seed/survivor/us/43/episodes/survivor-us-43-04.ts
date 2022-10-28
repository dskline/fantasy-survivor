import { SurvivorEpisode } from "@/seed/survivor/seeder/SeasonSeeder";
import { Contestants, tribes } from "@/seed/survivor/us/43/tribes";

export const episode4: SurvivorEpisode = {
  startTime: new Date("Oct 12 2022 19:00:00 EST"),
  events: [
    {
      rule: "ChallengeWin",
      players: tribes.Vesi.contestants,
    },
    {
      rule: "ChallengeWin",
      players: tribes.Vesi.contestants,
    },
    {
      rule: "ChallengeRunnerUp",
      players: tribes.Baka.contestants,
    },
    {
      rule: "SitOut",
      players: [Contestants.ELIE, Contestants.JAMES, Contestants.LINDSAY],
    },
    {
      rule: "SitOut",
      players: [Contestants.JEANINE, Contestants.GEO, Contestants.CASSIDY],
    },
    {
      rule: "VoteTarget",
      players: [Contestants.CASSIDY, Contestants.GEO, Contestants.LINDSAY],
    },
    {
      rule: "VotedOut",
      players: [Contestants.LINDSAY],
    },
  ],
};
