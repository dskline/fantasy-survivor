import * as Types from "../../../db/graphql/schema";

export type GetLeagueCreationSettingsQueryVariables = Types.Exact<{
  showSlug: Types.Scalars["String"];
  seasonNumber: Types.Scalars["BigInt"];
}>;

export type GetLeagueCreationSettingsQuery = {
  __typename?: "Query";
  rulesCollection?: {
    __typename?: "rulesConnection";
    edges: Array<{
      __typename?: "rulesEdge";
      node: {
        __typename?: "rules";
        id: string;
        description: string;
        is_negative?: boolean | null;
      };
    }>;
  } | null;
  reality_seriesCollection?: {
    __typename?: "reality_seriesConnection";
    edges: Array<{
      __typename?: "reality_seriesEdge";
      node: {
        __typename?: "reality_series";
        title: string;
        rs_league_formatsCollection?: {
          __typename?: "rs_league_formatsConnection";
          edges: Array<{
            __typename?: "rs_league_formatsEdge";
            node: {
              __typename?: "rs_league_formats";
              rulesets?: { __typename?: "rulesets"; id: any; data: any } | null;
              league_formats?: {
                __typename?: "league_formats";
                id: string;
                title: string;
                description: string;
              } | null;
            };
          }>;
        } | null;
        seasonsCollection?: {
          __typename?: "seasonsConnection";
          edges: Array<{
            __typename?: "seasonsEdge";
            node: {
              __typename?: "seasons";
              id: any;
              logo_src: string;
              title: string;
            };
          }>;
        } | null;
      };
    }>;
  } | null;
};
