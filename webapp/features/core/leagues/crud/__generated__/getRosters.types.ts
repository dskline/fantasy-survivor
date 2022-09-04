import * as Types from "../../../db/graphql/schema";

export type GetRostersQueryVariables = Types.Exact<{
  leagueFilter: Types.LeaguesFilter;
}>;

export type GetRostersQuery = {
  __typename?: "Query";
  leaguesCollection?: {
    __typename?: "leaguesConnection";
    edges: Array<{
      __typename?: "leaguesEdge";
      node: {
        __typename?: "leagues";
        league_participantsCollection?: {
          __typename?: "league_participantsConnection";
          edges: Array<{
            __typename?: "league_participantsEdge";
            node: {
              __typename?: "league_participants";
              lp_contestantsCollection?: {
                __typename?: "lp_contestantsConnection";
                edges: Array<{
                  __typename?: "lp_contestantsEdge";
                  node: {
                    __typename?: "lp_contestants";
                    id: any;
                    rank?: string | null;
                    contestant_seasons?: {
                      __typename?: "contestant_seasons";
                      portrait_src: string;
                      team_color?: string | null;
                      contestants?: {
                        __typename?: "contestants";
                        firstname: string;
                        surname?: string | null;
                      } | null;
                    } | null;
                  };
                }>;
              } | null;
            };
          }>;
        } | null;
      };
    }>;
  } | null;
};
