import { gql } from "@apollo/client";

import { client } from "@/features/core/db/graphql/client";
import {
  GetLeagueQuery,
  GetLeagueQueryVariables,
} from "@/features/core/leagues/crud/__generated__/getLeague.types";

export const GET_LEAGUE = gql`
  query GetLeague($leagueFilter: leaguesFilter!) {
    leaguesCollection(filter: $leagueFilter, first: 1) {
      edges {
        node {
          id
          title
          profiles {
            display_name
          }
          league_formats {
            title
            description
          }
          rulesets {
            data
          }
          seasons {
            title
            logo_src
            reality_series {
              title
              rulesCollection {
                edges {
                  node {
                    id
                    description
                  }
                }
              }
            }
          }
          league_participantsCollection {
            edges {
              node {
                profiles {
                  id
                  thumbnail_src
                  display_name
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const getLeague = async (leagueId: string) =>
  await client.query<GetLeagueQuery, GetLeagueQueryVariables>({
    query: GET_LEAGUE,
    variables: { leagueFilter: { id: { eq: leagueId } } },
  });
