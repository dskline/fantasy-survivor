import Dict = NodeJS.Dict;

export type Rule = {
  description: string;
  isNegative?: boolean;
};

export const rules: Dict<Rule> = {
  Survived: {
    description: "Player survives an episode",
  },
  ChallengeWin: {
    description:
      "Player obtains a prize for placing first in a challenge (solo or team)",
  },
  ChallengeRunnerUp: {
    description:
      "Player obtains a prize for placing second in a challenge (solo or team)",
  },
  Idol: {
    description: "Player obtains an immunity idol",
  },
  IdolProtection: {
    description:
      "Player is granted immunity via an idol played at a tribal council",
  },
  Advantage: {
    description:
      "Player receives a special advantage that can be used at tribal council",
  },
  VoteTarget: {
    description:
      "Player receives at least one counted vote at a tribal council",
    isNegative: true,
  },
  VotedOut: {
    description: "Player is voted out at a tribal council",
    isNegative: true,
  },
  ExitsGame: {
    description:
      "Player exits the game as a result of a medical or personal reason",
    isNegative: true,
  },
  SitOut: {
    description: "Player is elected or volunteers to sit out of a challenge",
    isNegative: true,
  },
  Merged: {
    description: "Player is included in the mid-season merge",
  },
} as const;
