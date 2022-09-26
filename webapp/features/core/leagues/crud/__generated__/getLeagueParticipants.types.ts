import * as Types from "../../../db/graphql/schema";

export type GetLeagueParticipantsQueryVariables = Types.Exact<{
  filter?: Types.InputMaybe<Types.LeagueParticipantsFilter>;
}>;

export type GetLeagueParticipantsQuery = {
  __typename?: "Query";
  league_participantsCollection?: {
    __typename?: "league_participantsConnection";
    edges: Array<{
      __typename?: "league_participantsEdge";
      node: {
        __typename?: "league_participants";
        id: any;
        participant: any;
        profiles?: {
          __typename?: "profiles";
          id: any;
          thumbnail_src?: string | null;
          display_name?: string | null;
          user_featuresCollection?: {
            __typename?: "user_featuresConnection";
            edges: Array<{
              __typename?: "user_featuresEdge";
              node: { __typename?: "user_features"; feature: string };
            }>;
          } | null;
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
    }>;
  } | null;
};
