import { gql } from "urql";

import { useAuthMutation } from "@/features/core/db/graphql/useAuthMutation";
import {
  DeleteRosterMutation,
  DeleteRosterMutationVariables,
  UpdateRosterMutation,
  UpdateRosterMutationVariables,
} from "@/features/core/leagues/crud/__generated__/updateRoster.types";
import { Roster } from "@/features/core/leagues/LeaguePage/types";

const DELETE_ROSTER = gql<DeleteRosterMutation, DeleteRosterMutationVariables>`
  mutation DeleteRoster($deleteFilter: lp_contestantsFilter) {
    deleteFromlp_contestantsCollection(atMost: 20, filter: $deleteFilter) {
      records {
        id
      }
    }
  }
`;

const UPDATE_ROSTER = gql<UpdateRosterMutation, UpdateRosterMutationVariables>`
  mutation UpdateRoster(
    $deleteFilter: lp_contestantsFilter
    $inserted: [lp_contestantsInsertInput!]!
  ) {
    deleteFromlp_contestantsCollection(atMost: 20, filter: $deleteFilter) {
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

  return (participantId: string, roster: Roster) => {
    const deleteFilter: DeleteRosterMutationVariables["deleteFilter"] = {
      league_participant: {
        eq: participantId,
      },
      updated_at: {
        lt: new Date(),
      },
    };
    return roster.length > 0
      ? update({
          deleteFilter,
          inserted: toLpContestants(participantId, roster),
        })
      : deleteRoster({ deleteFilter });
  };
};

const toLpContestants = (participantId: string, roster: Roster) =>
  (roster || []).map((contestant, i) => ({
    contestant_season: contestant.data.id,
    rank: `${i}`,
    league_participant: participantId,
  }));
