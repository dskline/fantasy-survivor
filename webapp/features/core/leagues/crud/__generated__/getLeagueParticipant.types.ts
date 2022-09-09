import * as Types from "../../../db/graphql/schema";

export type GetLeagueParticipantFragment = {
  __typename?: "league_participants";
  id: any;
  profiles?: {
    __typename?: "profiles";
    id: any;
    thumbnail_src?: string | null;
    display_name?: string | null;
  } | null;
  lp_contestantsCollection?: {
    __typename?: "lp_contestantsConnection";
    edges: Array<{
      __typename?: "lp_contestantsEdge";
      node: {
        __typename?: "lp_contestants";
        id: any;
        rank?: string | null;
        contestant_season: any;
      };
    }>;
  } | null;
};
