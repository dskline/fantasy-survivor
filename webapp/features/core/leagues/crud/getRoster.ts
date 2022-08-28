import { gql } from "@apollo/client";

import { client } from "@/features/core/db/graphql/client";
import {
  GetRosterQuery,
  GetRosterQueryVariables,
} from "@/features/core/leagues/crud/__generated__/getRoster.types";

export const GET_ROSTER = gql`
  query GetRoster(
    $leagueFilter: leaguesFilter!
    $userFilter: league_participantsFilter!
  ) {
    leaguesCollection(filter: $leagueFilter, first: 1) {
      edges {
        node {
          league_participantsCollection(filter: $userFilter) {
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

export const getLeague = async (leagueId: string, userId: string) =>
  await client.query<GetRosterQuery, GetRosterQueryVariables>({
    query: GET_ROSTER,
    variables: {
      leagueFilter: { id: { eq: leagueId } },
      userFilter: { participant: { eq: userId } },
    },
  });
