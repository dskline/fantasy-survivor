import { SupabaseClient } from "@supabase/supabase-js";

import { Database } from "@/features/core/db/supabase/__generated__/types";
import { InsertValues } from "@/features/core/db/supabase/types";

export const createRuleset = async (
  supabase: SupabaseClient<Database>,
  insertData: InsertValues<"rulesets">
) =>
  await supabase.from("rulesets").insert(insertData);
