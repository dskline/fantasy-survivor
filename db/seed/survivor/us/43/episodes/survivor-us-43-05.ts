import { Contestants, tribes } from "@/seed/survivor/us/43/tribes";
import { SurvivorEpisode } from "@/seed/survivor/seeder/SeasonSeeder";

export const episode5: SurvivorEpisode = {
  startTime: new Date("Oct 19 2022 19:00:00 EST"),
  events: [
    {
      rule: "Idol",
      players: [Contestants.JEANINE],
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
      players: [Contestants.KARLA, Contestants.MIKE],
    },
    {
      rule: "Advantage",
      players: [Contestants.GEO],
    },
    {
      rule: "VoteTarget",
      players: [Contestants.CASSIDY, Contestants.GEO],
    },
    {
      rule: "VotedOut",
      players: [Contestants.GEO],
    },
  ],
};
