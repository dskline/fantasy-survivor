import { supabase } from "@/features/core/db/supabase";
import { InsertValues } from "@/features/core/db/supabase/types";

export const createRuleset = async (insertData: InsertValues<"rulesets">) =>
  await supabase.from<InsertValues<"rulesets">>("rulesets").insert(insertData);
