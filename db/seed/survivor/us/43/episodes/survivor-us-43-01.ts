import { SurvivorEpisode } from "@/seed/survivor/seeder/SeasonSeeder";
import { Contestants, tribes } from "@/seed/survivor/us/43/tribes";

export const episode1: SurvivorEpisode = {
  startTime: new Date("Sep 21 2022 19:00:00 EST"),
  events: [
    {
      rule: "ChallengeWin",
      players: tribes.Vesi.contestants,
    },
    {
      rule: "ChallengeWin",
      players: tribes.Coco.contestants,
    },
    {
      rule: "ChallengeRunnerUp",
      players: tribes.Vesi.contestants,
    },
    {
      rule: "Advantage",
      players: [Contestants.MIKE],
      comment: "Immunity for first two tribal councils",
    },
    {
      rule: "VoteTarget",
      players: [Contestants.MORRIAH, Contestants.OWEN],
    },
    {
      rule: "VotedOut",
      players: [Contestants.MORRIAH],
    },
  ],
};
