import * as Types from "../../../db/graphql/schema";

export type GetLeaguesQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetLeaguesQuery = {
  __typename?: "Query";
  leaguesCollection?: {
    __typename?: "leaguesConnection";
    edges: Array<{
      __typename?: "leaguesEdge";
      node: { __typename?: "leagues"; id: any };
    }>;
  } | null;
};
