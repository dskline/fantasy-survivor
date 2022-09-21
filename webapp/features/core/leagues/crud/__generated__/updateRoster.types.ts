import * as Types from "../../../db/graphql/schema";

export type DeleteRosterMutationVariables = Types.Exact<{
  participantId: Types.Scalars["UUID"];
}>;

export type DeleteRosterMutation = {
  __typename?: "Mutation";
  deleteFromlp_contestantsCollection: {
    __typename?: "lp_contestantsDeleteResponse";
    records: Array<{ __typename?: "lp_contestants"; id: any }>;
  };
};

export type UpdateRosterMutationVariables = Types.Exact<{
  participantId: Types.Scalars["UUID"];
  inserted:
    | Array<Types.LpContestantsInsertInput>
    | Types.LpContestantsInsertInput;
}>;

export type UpdateRosterMutation = {
  __typename?: "Mutation";
  deleteFromlp_contestantsCollection: {
    __typename?: "lp_contestantsDeleteResponse";
    records: Array<{ __typename?: "lp_contestants"; id: any }>;
  };
  insertIntolp_contestantsCollection?: {
    __typename: "lp_contestantsInsertResponse";
    records: Array<{ __typename?: "lp_contestants"; id: any }>;
  } | null;
};
