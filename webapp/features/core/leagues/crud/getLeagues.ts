import { gql } from "@apollo/client";

import { client } from "@/features/core/db/graphql/client";
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

export const getLeagues = async () =>
  await client.query<GetLeaguesQuery, GetLeaguesQueryVariables>({
    query: GET_LEAGUES,
  });
