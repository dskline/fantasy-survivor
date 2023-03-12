import { SurvivorEpisode } from "@/seed/survivor/seeder/SeasonSeeder";
import { Contestants } from "@/seed/survivor/us/44/contestants";
import { tribes } from "@/seed/survivor/us/44/tribes";

export const episode2: SurvivorEpisode = {
  startTime: new Date("Mar 08 2023 19:00:00 EST"),
  events: [
    {
      rule: "SitOut",
      players: [Contestants.CLAIRE],
    },
    {
      rule: "ChallengeWin",
      players: tribes.RATU.contestants,
    },
    {
      rule: "ChallengeRunnerUp",
      players: tribes.SOKA.contestants,
    },
    {
      rule: "Idol",
      players: [Contestants.DANNY, Contestants.CAROLYN],
    },
    {
      rule: "VoteTarget",
      players: [Contestants.CAROLYN, Contestants.HELEN],
    },
    {
      rule: "VotedOut",
      players: [Contestants.HELEN],
    },
  ],
};
