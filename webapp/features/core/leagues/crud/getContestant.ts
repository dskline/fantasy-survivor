import { gql } from "urql";

import { GetContestantFragment } from "@/features/core/leagues/crud/__generated__/getContestant.types";

export const GET_CONTESTANT_FRAGMENT = gql<GetContestantFragment>`
  fragment GetContestant on contestant_seasons {
    id
    portrait_src
    team_color
    contestants {
      slug
      firstname
      surname
      nickname
    }
    eventsCollection {
      pageInfo {
        hasNextPage
      }
      edges {
        node {
          id
          rule
          comment
          episode
        }
      }
    }
  }
`;
