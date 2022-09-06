import { Client, gql } from "urql";

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

export const getUpcomingShows = async (client: Client) =>
  await client
    .query<GetUpcomingShowsQuery, GetUpcomingShowsQueryVariables>(
      GET_UPCOMING_SHOWS,
      {}
    )
    .toPromise();
