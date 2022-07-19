import * as Types from "../../../db/graphql/schema";

export type GetShowsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetShowsQuery = {
  __typename?: "Query";
  reality_seriesCollection?: {
    __typename?: "reality_seriesConnection";
    edges: Array<{
      __typename?: "reality_seriesEdge";
      node?: {
        __typename?: "reality_series";
        slug: string;
        title: string;
        in_progress: boolean;
        logo_src: string;
        premiere_time?: any | null;
      } | null;
    }>;
  } | null;
};
