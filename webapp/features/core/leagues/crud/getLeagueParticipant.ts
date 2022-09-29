import { gql } from "urql";

import { GetLeagueParticipantFragment } from "@/features/core/leagues/crud/__generated__/getLeagueParticipant.types";

export const GET_LEAGUE_PARTICIPANT_FRAGMENT = gql<GetLeagueParticipantFragment>`
  fragment GetLeagueParticipant on league_participants {
    id
    participant
    profiles {
      id
      thumbnail_src
      display_name
      user_featuresCollection {
        edges {
          node {
            feature
          }
        }
      }
      user_watchedCollection {
        edges {
          node {
            id
            user
            episode
          }
        }
      }
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
