import { gql } from "urql";

import { useAuthQuery } from "@/features/core/db/graphql/useAuthQuery";
import {
  GetLeagueParticipantsQuery,
  GetLeagueParticipantsQueryVariables,
} from "@/features/core/leagues/crud/__generated__/getLeagueParticipants.types";
import { GET_LEAGUE_PARTICIPANT_FRAGMENT } from "@/features/core/leagues/crud/getLeagueParticipant";

export const GET_LEAGUE_PARTICIPANTS = gql<
  GetLeagueParticipantsQuery,
  GetLeagueParticipantsQueryVariables
>`
  ${GET_LEAGUE_PARTICIPANT_FRAGMENT}
  query GetLeagueParticipants($filter: league_participantsFilter) {
    league_participantsCollection(filter: $filter) {
      edges {
        node {
          ...GetLeagueParticipant
        }
      }
    }
  }
`;

export const useGetLeagueParticipants = (
  variables: GetLeagueParticipantsQueryVariables,
  pause?: boolean
) => useAuthQuery({ query: GET_LEAGUE_PARTICIPANTS, variables, pause });
