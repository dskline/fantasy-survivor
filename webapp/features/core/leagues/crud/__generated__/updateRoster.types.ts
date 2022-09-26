import * as Types from "../../../db/graphql/schema";

export type DeleteRosterMutationVariables = Types.Exact<{
  deleteFilter?: Types.InputMaybe<Types.LpContestantsFilter>;
}>;

export type DeleteRosterMutation = {
  __typename?: "Mutation";
  deleteFromlp_contestantsCollection: {
    __typename?: "lp_contestantsDeleteResponse";
    records: Array<{ __typename?: "lp_contestants"; id: any }>;
  };
};

export type UpdateRosterMutationVariables = Types.Exact<{
  deleteFilter?: Types.InputMaybe<Types.LpContestantsFilter>;
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
