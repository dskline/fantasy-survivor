import { gql } from "urql";

export const GET_CONTESTANT_FRAGMENT = gql`
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
  }
`;
