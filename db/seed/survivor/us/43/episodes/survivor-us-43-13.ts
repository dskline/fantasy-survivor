import { SurvivorEpisode } from "@/seed/survivor/seeder/SeasonSeeder";
import { Contestants } from "@/seed/survivor/us/43/tribes";

export const episode13: SurvivorEpisode = {
  startTime: new Date("Dec 14 2022 19:00:00 EST"),
  events: [
    {
      rule: "ChallengeWin",
      players: [Contestants.OWEN],
    },
    {
      rule: "IdolProtection",
      players: [Contestants.JESSE],
    },
    {
      rule: "Advantage",
      players: [Contestants.KARLA],
    },
    {
      rule: "VoteTarget",
      players: [Contestants.KARLA],
    },
    {
      rule: "VotedOut",
      players: [Contestants.KARLA],
    },
    {
      rule: "ChallengeWin",
      players: [Contestants.CASSIDY],
    },
    {
      rule: "ExitsGame",
      players: [Contestants.JESSE],
    },
    {
      rule: "FinalTribal",
      players: [Contestants.CASSIDY, Contestants.OWEN, Contestants.MIKE],
    },
    {
      rule: "RunnerUpSurvivor",
      players: [Contestants.CASSIDY],
    },
    {
      rule: "SoleSurvivor",
      players: [Contestants.MIKE],
    },
  ],
};
