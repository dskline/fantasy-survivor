import { supabase } from "@/features/core/db/supabase";
import { InsertValues } from "@/features/core/db/supabase/types";

export const createNotificationToken = async (
  insertData: InsertValues<"user_fcm_tokens">
) =>
  await supabase
    .from<InsertValues<"user_fcm_tokens">>("user_fcm_tokens")
    .insert(insertData);
