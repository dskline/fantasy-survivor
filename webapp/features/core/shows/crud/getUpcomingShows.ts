import { gql } from "@apollo/client";

import { client } from "@/features/core/db/graphql/client";

import {
  GetUpcomingShowsQuery,
  GetUpcomingShowsQueryVariables,
} from "./__generated__/getUpcomingShows.types";

export const GET_UPCOMING_SHOWS = gql`
  query GetUpcomingShows {
    reality_seriesCollection {
      edges {
        node {
          slug
          title
          seasonsCollection(orderBy: [{ order: DescNullsLast }]) {
            edges {
              node {
                id
                title
                logo_src
                order
                leaguesCollection {
                  edges {
                    node {
                      id
                    }
                  }
                }
                episodesCollection(filter: { start_time: { gte: "now" } }) {
                  edges {
                    node {
                      start_time
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

export const getUpcomingShows = async () =>
  await client.query<GetUpcomingShowsQuery, GetUpcomingShowsQueryVariables>({
    query: GET_UPCOMING_SHOWS,
  });
