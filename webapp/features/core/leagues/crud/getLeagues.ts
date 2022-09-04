import { gql } from "urql";
import { Client } from "urql";

import {
  GetLeaguesQuery,
  GetLeaguesQueryVariables,
} from "@/features/core/leagues/crud/__generated__/getLeagues.types";

export const GET_LEAGUES = gql`
  query GetLeagues {
    leaguesCollection {
      edges {
        node {
          id
        }
      }
    }
  }
`;

export const getLeagues = async (client: Client) =>
  client
    .query<GetLeaguesQuery, GetLeaguesQueryVariables>(GET_LEAGUES, {})
    .toPromise();
