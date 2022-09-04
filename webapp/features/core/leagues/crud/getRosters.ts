import { gql } from "urql";

import { client } from "@/features/core/db/graphql/client";
import {
  GetRostersQuery,
  GetRostersQueryVariables,
} from "@/features/core/leagues/crud/__generated__/getRosters.types";

export const GET_ROSTERS = gql`
  query GetRosters($leagueFilter: leaguesFilter!) {
    leaguesCollection(filter: $leagueFilter, first: 1) {
      edges {
        node {
          league_participantsCollection {
            edges {
              node {
                lp_contestantsCollection {
                  edges {
                    node {
                      id
                      rank
                      contestant_seasons {
                        portrait_src
                        team_color
                        contestants {
                          firstname
                          surname
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const getRosters = async (leagueId: string) =>
  await client.query<GetRostersQuery, GetRostersQueryVariables>({
    query: GET_ROSTERS,
    variables: {
      leagueFilter: { id: { eq: leagueId } },
    },
  });
