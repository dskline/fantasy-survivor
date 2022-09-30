import { Contestants, tribes } from "@/seed/survivor/us/43/tribes";
import { SurvivorEpisode } from "@/seed/survivor/seeder/SeasonSeeder";

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
      rule: "VoteTarget",
      players: [Contestants.CODY, Contestants.JUSTINE, Contestants.NNEKA],
    },
    {
      rule: "VotedOut",
      players: [Contestants.JUSTINE],
    },
  ],
};
