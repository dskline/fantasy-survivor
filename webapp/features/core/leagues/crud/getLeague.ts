import { gql } from "urql";
import { Client } from "urql";

import {
  GetLeagueQuery,
  GetLeagueQueryVariables,
} from "@/features/core/leagues/crud/__generated__/getLeague.types";
import { GET_CONTESTANT_FRAGMENT } from "@/features/core/leagues/crud/getContestant";

export const GET_LEAGUE = gql<GetLeagueQuery, GetLeagueQueryVariables>`
  ${GET_CONTESTANT_FRAGMENT}
  query GetLeague($leagueFilter: leaguesFilter!) {
    leaguesCollection(filter: $leagueFilter, first: 1) {
      edges {
        node {
          id
          title
          profiles {
            id
            display_name
          }
          league_formats {
            id
            title
            description
          }
          rulesets {
            id
            data
          }
          seasons {
            id
            title
            logo_src
            order
            reality_series {
              slug
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
            contestant_seasonsCollection(
              orderBy: { team_color: DescNullsLast }
            ) {
              edges {
                node {
                  ...GetContestant
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const getLeague = async (client: Client, leagueId: string) =>
  client
    .query(GET_LEAGUE, {
      leagueFilter: { id: { eq: leagueId } },
    })
    .toPromise();
