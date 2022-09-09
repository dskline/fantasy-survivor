import { gql } from "urql";

export const GET_LEAGUE_PARTICIPANT_FRAGMENT = gql`
  fragment GetLeagueParticipant on league_participants {
    id
    profiles {
      id
      thumbnail_src
      display_name
    }
    lp_contestantsCollection(orderBy: { rank: AscNullsLast }) {
      edges {
        node {
          id
          rank
          contestant_season
        }
      }
    }
  }
`;
