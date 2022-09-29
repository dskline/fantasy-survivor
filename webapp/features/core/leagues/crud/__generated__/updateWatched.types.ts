import * as Types from "../../../db/graphql/schema";

export type UnwatchEpisodeMutationVariables = Types.Exact<{
  deleteFilter?: Types.InputMaybe<Types.UserWatchedFilter>;
}>;

export type UnwatchEpisodeMutation = {
  __typename?: "Mutation";
  deleteFromuser_watchedCollection: {
    __typename?: "user_watchedDeleteResponse";
    records: Array<{ __typename?: "user_watched"; id: any }>;
  };
};

export type WatchedEpisodeMutationVariables = Types.Exact<{
  inserted: Array<Types.UserWatchedInsertInput> | Types.UserWatchedInsertInput;
}>;

export type WatchedEpisodeMutation = {
  __typename?: "Mutation";
  insertIntouser_watchedCollection?: {
    __typename: "user_watchedInsertResponse";
    records: Array<{ __typename?: "user_watched"; id: any }>;
  } | null;
};
