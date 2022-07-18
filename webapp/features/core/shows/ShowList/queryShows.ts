import { gql } from "@apollo/client";

import { client } from "@/features/core/db/graphql/client";
import { GetShowsQuery } from "@/features/core/shows/ShowList/__generated__/queryShows.types";

export const QUERY_SHOWS = gql`
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
export const queryShows = async () =>
  await client.query<GetShowsQuery>({
    query: QUERY_SHOWS,
  });
