import { gql } from "urql";

import { useAuthMutation } from "@/features/core/db/graphql/useAuthMutation";
import {
  DeleteRosterMutation,
  DeleteRosterMutationVariables,
  UpdateRosterMutation,
  UpdateRosterMutationVariables,
} from "@/features/core/leagues/crud/__generated__/updateRoster.types";
import { Roster } from "@/features/core/leagues/LeaguePage/types";
import { toLpContestants } from "@/features/core/leagues/LeagueRoster/RosterAdapter";

const DELETE_ROSTER = gql<DeleteRosterMutation, DeleteRosterMutationVariables>`
  mutation DeleteRoster($participantId: UUID!) {
    deleteFromlp_contestantsCollection(
      atMost: 20
      filter: { league_participant: { eq: $participantId } }
    ) {
      records {
        id
      }
    }
  }
`;

const UPDATE_ROSTER = gql<UpdateRosterMutation, UpdateRosterMutationVariables>`
  mutation UpdateRoster(
    $participantId: UUID!
    $inserted: [lp_contestantsInsertInput!]!
  ) {
    deleteFromlp_contestantsCollection(
      atMost: 20
      filter: { league_participant: { eq: $participantId } }
    ) {
      records {
        id
      }
    }
    insertIntolp_contestantsCollection(objects: $inserted) {
      __typename
      records {
        id
      }
    }
  }
`;

export const useUpdateRoster = () => {
  const { execute: update } = useAuthMutation(UPDATE_ROSTER);
  const { execute: deleteRoster } = useAuthMutation(DELETE_ROSTER);

  return (participantId: string, roster: Roster) =>
    roster.length > 0
      ? update({
          participantId,
          inserted: toLpContestants(participantId, roster),
        })
      : deleteRoster({ participantId });
};
