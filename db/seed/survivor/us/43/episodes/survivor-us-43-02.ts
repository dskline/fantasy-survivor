import { SurvivorEpisode } from "@/seed/survivor/seeder/SeasonSeeder";
import { Contestants, tribes } from "@/seed/survivor/us/43/tribes";

export const episode2: SurvivorEpisode = {
  startTime: new Date("Sep 28 2022 19:00:00 EST"),
  events: [
    {
      rule: "ChallengeWin",
      players: tribes.Baka.contestants,
    },
    {
      rule: "ChallengeRunnerUp",
      players: tribes.Coco.contestants,
    },
    {
      rule: "SitOut",
      players: [Contestants.NOELLE, Contestants.KARLA],
    },
    {
      rule: "Idol",
      players: [Contestants.CODY],
    },
    {
      rule: "VoteTarget",
      players: [Contestants.CODY, Contestants.JUSTINE, Contestants.NNEKA],
    },
    {
      rule: "VotedOut",
      players: [Contestants.JUSTINE],
    },
  ],
};
