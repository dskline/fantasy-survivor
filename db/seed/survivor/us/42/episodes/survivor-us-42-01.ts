import { SurvivorEpisode } from "@/seed/survivor/seeder/SeasonSeeder";
import { Contestants, tribes } from "@/seed/survivor/us/42/tribes";

export const episode1: SurvivorEpisode = {
  startTime: new Date("Mar 16 2022 20:00:00 GMT-0500"),
  events: [
    {
      rule: "ChallengeWin",
      players: tribes.Ika.contestants,
    },
    {
      rule: "ChallengeWin",
      players: tribes.Taku.contestants,
    },
    {
      rule: "ChallengeRunnerUp",
      players: tribes.Vati.contestants,
    },
    {
      rule: "Advantage",
      players: [Contestants.DREA, Contestants.MARYANNE],
      comment: "Extra vote (prisoner's dilemma)",
    },
    {
      rule: "VoteTarget",
      players: [Contestants.ZACH],
    },
    {
      rule: "VotedOut",
      players: [Contestants.ZACH],
    },
  ],
};
