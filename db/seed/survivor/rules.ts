export type Rule = {
  description: string;
  defaultPointsAlloted: number;
};

const rules = {
  Survived: {
    description: "Player survives an episode",
    defaultPointsAlloted: 1,
  },
  ChallengeWin: {
    description:
      "Player obtains a prize for placing first in a challenge (solo or team)",
    defaultPointsAlloted: 1,
  },
  ChallengeRunnerUp: {
    description:
      "Player obtains a prize for placing second in a challenge (solo or team)",
    defaultPointsAlloted: 0.5,
  },
  Idol: {
    description: "Player obtains an immunity idol",
    defaultPointsAlloted: 2,
  },
  IdolProtection: {
    description:
      "Player is granted immunity via an idol played at a tribal council",
    defaultPointsAlloted: 2,
  },
  Advantage: {
    description:
      "Player receives a special advantage that can be used at tribal council",
    defaultPointsAlloted: 1,
  },
  VoteTarget: {
    description:
      "Player receives at least one counted vote at a tribal council",
    defaultPointsAlloted: -1,
  },
  VotedOut: {
    description: "Player is voted out at a tribal council",
    defaultPointsAlloted: -3,
  },
  ExitsGame: {
    description:
      "Player exits the game as a result of a medical or personal reason",
    defaultPointsAlloted: -2,
  },
  SitOut: {
    description: "Player is elected or volunteers to sit out of a challenge",
    defaultPointsAlloted: -1,
  },
  Merged: {
    description: "Player is included in the mid-season merge",
    defaultPointsAlloted: 1,
  },
  FinalTribal: {
    description: "Player is included in the final tribal council",
    defaultPointsAlloted: 3,
  },
  SoleSurvivor: {
    description: "Player is the sole survivor/winner of the game",
    defaultPointsAlloted: 3,
  },
} as const;

export type SurvivorRuleId = keyof typeof rules;
export const survivorRules: { [key in keyof typeof rules]: Rule } = rules;
