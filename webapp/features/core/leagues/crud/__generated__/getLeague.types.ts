import * as Types from "../../../db/graphql/schema";

export type GetLeagueQueryVariables = Types.Exact<{
  leagueFilter: Types.LeaguesFilter;
}>;

export type GetLeagueQuery = {
  __typename?: "Query";
  leaguesCollection?: {
    __typename?: "leaguesConnection";
    edges: Array<{
      __typename?: "leaguesEdge";
      node: {
        __typename?: "leagues";
        id: any;
        title?: string | null;
        profiles?: {
          __typename?: "profiles";
          id: any;
          display_name?: string | null;
        } | null;
        league_formats?: {
          __typename?: "league_formats";
          id: string;
          title: string;
          description: string;
        } | null;
        rulesets?: { __typename?: "rulesets"; id: any; data: any } | null;
        seasons?: {
          __typename?: "seasons";
          id: any;
          title: string;
          logo_src: string;
          order: any;
          reality_series?: {
            __typename?: "reality_series";
            slug: string;
            title: string;
            rulesCollection?: {
              __typename?: "rulesConnection";
              edges: Array<{
                __typename?: "rulesEdge";
                node: { __typename?: "rules"; id: string; description: string };
              }>;
            } | null;
          } | null;
          contestant_seasonsCollection?: {
            __typename?: "contestant_seasonsConnection";
            edges: Array<{
              __typename?: "contestant_seasonsEdge";
              node: {
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
            }>;
          } | null;
        } | null;
      };
    }>;
  } | null;
};
