import { SurvivorEpisode } from "@/seed/survivor/seeder/SeasonSeeder";
import { Contestants } from "@/seed/survivor/us/43/tribes";

export const episode6: SurvivorEpisode = {
  startTime: new Date("Oct 26 2022 19:00:00 EST"),
  events: [
    {
      rule: "ChallengeWin",
      players: [
        Contestants.MIKE,
        Contestants.JEANINE,
        Contestants.KARLA,
        Contestants.JESSE,
        Contestants.DWIGHT,
        Contestants.RYAN,
        Contestants.NOELLE,
      ],
    },
    {
      rule: "VoteTarget",
      players: [
        Contestants.ELIE,
        Contestants.JAMES,
        Contestants.CASSIDY,
        Contestants.OWEN,
      ],
    },
    {
      rule: "VotedOut",
      players: [Contestants.ELIE],
    },
    {
      rule: "Merged",
      players: Object.values(Contestants),
    },
  ],
};
