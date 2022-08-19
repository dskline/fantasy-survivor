import * as Types from "../../../db/graphql/schema";

export type GetUpcomingShowsQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetUpcomingShowsQuery = {
  __typename?: "Query";
  reality_seriesCollection?: {
    __typename?: "reality_seriesConnection";
    edges: Array<{
      __typename?: "reality_seriesEdge";
      node: {
        __typename?: "reality_series";
        slug: string;
        title: string;
        seasonsCollection?: {
          __typename?: "seasonsConnection";
          edges: Array<{
            __typename?: "seasonsEdge";
            node: {
              __typename?: "seasons";
              id: any;
              title: string;
              logo_src: string;
              order: any;
              leaguesCollection?: {
                __typename?: "leaguesConnection";
                edges: Array<{
                  __typename?: "leaguesEdge";
                  node: { __typename?: "leagues"; id: any };
                }>;
              } | null;
              episodesCollection?: {
                __typename?: "episodesConnection";
                edges: Array<{
                  __typename?: "episodesEdge";
                  node: { __typename?: "episodes"; start_time: any };
                }>;
              } | null;
            };
          }>;
        } | null;
      };
    }>;
  } | null;
};
