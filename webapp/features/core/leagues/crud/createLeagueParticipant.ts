import { supabase } from "@/features/core/db/supabase";
import { InsertValues } from "@/features/core/db/supabase/types";

export const createLeagueParticipant = async (
  insertData: InsertValues<"league_participants">
) =>
  await supabase
    .from<InsertValues<"league_participants">>("league_participants")
    .insert(insertData);
