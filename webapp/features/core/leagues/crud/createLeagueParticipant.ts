import { SupabaseClient } from '@supabase/supabase-js'

import { Database } from '@/features/core/db/supabase/__generated__/types'
import { InsertValues } from "@/features/core/db/supabase/types";

export const createLeagueParticipant = async (
  supabase: SupabaseClient<Database>,
  insertData: InsertValues<"league_participants">
) =>
  await supabase
    .from("league_participants")
    .insert(insertData);
