import { gql } from "@apollo/client";

import { client } from "@/features/core/db/graphql/client";
import { GetShowsQuery } from "@/features/core/shows/crud/__generated__/getShows.types";

export const GET_SHOWS = gql`
  query GetShows {
    reality_seriesCollection {
      edges {
        node {
          slug
          title
          in_progress
          logo_src
          premiere_time
        }
      }
    }
  }
`;
export const getShows = async () =>
  await client.query<GetShowsQuery>({
    query: GET_SHOWS,
  });
