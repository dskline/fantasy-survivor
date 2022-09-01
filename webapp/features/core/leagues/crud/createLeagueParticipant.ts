import { cache } from "@/features/core/db/graphql/client";
import { supabase } from "@/features/core/db/supabase";
import { InsertValues } from "@/features/core/db/supabase/types";
import {
  GetLeagueParticipantsQuery,
  GetLeagueParticipantsQueryVariables,
} from "@/features/core/leagues/crud/__generated__/getLeagueParticipant.types";
import { GET_LEAGUE_PARTICIPANTS } from "@/features/core/leagues/crud/getLeagueParticipants";

export const createLeagueParticipant = async (
  insertData: InsertValues<"league_participants">
) => {
  const insertResult = await supabase
    .from<InsertValues<"league_participants">>("league_participants")
    .insert(insertData);

  if (insertResult.data) {
    const createdId = insertResult.data[0].id;
    try {
      cache.updateQuery<
        GetLeagueParticipantsQuery,
        GetLeagueParticipantsQueryVariables
      >(
        {
          query: GET_LEAGUE_PARTICIPANTS,
          variables: {
            filter: {
              league: { eq: insertData.league },
              participant: { eq: insertData.participant },
            },
          },
        },
        () => ({
          league_participantsCollection: {
            edges: [
              {
                node: {
                  __typename: "league_participants",
                  id: createdId,
                  profiles: {
                    __typename: "profiles",
                    id: insertData.participant,
                    thumbnail_src: "",
                    display_name: "",
                  },
                  lp_contestantsCollection: {
                    __typename: "lp_contestantsConnection",
                    edges: [],
                  },
                },
              },
            ],
          },
        })
      );
    } catch (error) {
      console.error(error);
    }
  }

  return insertResult;
};
