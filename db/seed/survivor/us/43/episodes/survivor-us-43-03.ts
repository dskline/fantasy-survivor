import { Contestants, tribes } from '@/seed/survivor/us/43/tribes'
import { SurvivorEpisode } from '@/seed/survivor/seeder/SeasonSeeder'

export const episode3: SurvivorEpisode = {
  startTime: new Date("Oct 05 2022 19:00:00 EST"),
  events: [
    {
      rule: "Idol",
      players: [Contestants.KARLA],
    },
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
      players: [Contestants.GEO],
    },
    {
      rule: "Advantage",
      players: [Contestants.NOELLE],
    },
    {
      rule: "VoteTarget",
      players: [Contestants.NOELLE, Contestants.NNEKA],
    },
    {
      rule: "VotedOut",
      players: [Contestants.NNEKA],
    },
  ],
};
