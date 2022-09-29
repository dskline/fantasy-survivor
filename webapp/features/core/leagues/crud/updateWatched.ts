import { gql } from "urql";

import { useAuthMutation } from "@/features/core/db/graphql/useAuthMutation";
import {
  UnwatchEpisodeMutation,
  UnwatchEpisodeMutationVariables,
  WatchedEpisodeMutation,
  WatchedEpisodeMutationVariables,
} from "@/features/core/leagues/crud/__generated__/updateWatched.types";

const UNWATCH_EPISODE = gql<
  UnwatchEpisodeMutation,
  UnwatchEpisodeMutationVariables
>`
  mutation UnwatchEpisode($deleteFilter: user_watchedFilter) {
    deleteFromuser_watchedCollection(atMost: 1, filter: $deleteFilter) {
      records {
        id
      }
    }
  }
`;

const WATCHED_EPISODE = gql<
  WatchedEpisodeMutation,
  WatchedEpisodeMutationVariables
>`
  mutation WatchedEpisode($inserted: [user_watchedInsertInput!]!) {
    insertIntouser_watchedCollection(objects: $inserted) {
      __typename
      records {
        id
      }
    }
  }
`;

export const useUpdateWatched = () => {
  const { execute: watch } = useAuthMutation(WATCHED_EPISODE);
  const { execute: unwatch } = useAuthMutation(UNWATCH_EPISODE);

  return {
    setWatched: (userId: string, episodeId: string) => {
      watch({
        inserted: [
          {
            user: userId,
            episode: episodeId,
          },
        ],
      });
    },
    setUnwatched: (userId: string, episodeId: string) => {
      unwatch({
        deleteFilter: {
          user: {
            eq: userId,
          },
          episode: {
            eq: episodeId,
          },
        },
      });
    },
  };
};
