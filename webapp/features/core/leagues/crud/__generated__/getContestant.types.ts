import * as Types from "../../../db/graphql/schema";

export type GetContestantFragment = {
  __typename?: "contestant_seasons";
  id: any;
  portrait_src: string;
  team_color?: string | null;
  contestants?: {
    __typename?: "contestants";
    slug: string;
    firstname: string;
    surname?: string | null;
    nickname?: string | null;
  } | null;
};
