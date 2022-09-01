import { gql } from "@apollo/client";

export const GET_LEAGUE_PARTICIPANT_FRAGMENT = gql`
  fragment GetLeagueParticipant on league_participants {
    id
    profiles {
      id
      thumbnail_src
      display_name
    }
    lp_contestantsCollection {
      edges {
        node {
          id
          rank
          contestant_seasons {
            id
          }
        }
      }
    }
  }
`;
