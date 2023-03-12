import { SurvivorEpisode } from "@/seed/survivor/seeder/SeasonSeeder";
import { Contestants } from "@/seed/survivor/us/44/contestants";
import { tribes } from "@/seed/survivor/us/44/tribes";

export const episode1: SurvivorEpisode = {
  startTime: new Date("Mar 01 2023 19:00:00 EST"),
  events: [
    {
      rule: "ChallengeWin",
      players: tribes.SOKA.contestants,
    },
    {
      rule: "ChallengeRunnerUp",
      players: tribes.RATU.contestants,
    },
    {
      rule: "ExitsGame",
      players: [Contestants.BRUCE],
    },
    {
      rule: "Idol",
      players: [Contestants.BRANDON],
    },
    {
      rule: "ChallengeWin",
      players: tribes.SOKA.contestants,
    },
    {
      rule: "ChallengeRunnerUp",
      players: tribes.TIKA.contestants,
    },
    {
      rule: "IdolProtection",
      players: [Contestants.BRANDON],
    },
    {
      rule: "VoteTarget",
      players: [Contestants.MADDY],
    },
    {
      rule: "VotedOut",
      players: [Contestants.MADDY],
    },
  ],
};
