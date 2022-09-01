import { gql, useQuery } from "@apollo/client";
import { QueryHookOptions } from "@apollo/client/react/types/types";

import { cache } from "@/features/core/db/graphql/client";
import {
  GetLeagueParticipantsQuery,
  GetLeagueParticipantsQueryVariables,
} from "@/features/core/leagues/crud/__generated__/getLeagueParticipants.types";
import { GET_LEAGUE_PARTICIPANT_FRAGMENT } from "@/features/core/leagues/crud/getLeagueParticipant";

cache.policies.addTypePolicies({
  Query: {
    fields: {
      league_participantsCollection: {
        merge(existing, incoming, { mergeObjects }) {
          return mergeObjects(existing, incoming);
        },
      },
    },
  },
});

export const GET_LEAGUE_PARTICIPANTS = gql`
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
  leagueId: string,
  userId?: string,
  options?: QueryHookOptions<
    GetLeagueParticipantsQuery,
    GetLeagueParticipantsQueryVariables
  >
) =>
  useQuery<GetLeagueParticipantsQuery, GetLeagueParticipantsQueryVariables>(
    GET_LEAGUE_PARTICIPANTS,
    {
      variables: {
        filter: {
          league: { eq: leagueId },
          participant: { eq: userId },
        },
      },
      ...options,
    }
  );
