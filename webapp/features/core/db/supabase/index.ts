import { supabaseClient } from "@supabase/auth-helpers-nextjs";

import { DbFunction, DbFunctionKey } from "@/features/core/db/supabase/types";

export const supabase = supabaseClient;

// Type-friendlier wrapper around supabase.rpc
type DbFunctionResponse<T extends DbFunctionKey> = {
  data: DbFunction<T>["Returns"];
  error?: string;
};
export const dbFunction = async <T extends DbFunctionKey>(
  name: T,
  params?: DbFunction<T>["Args"]
): Promise<DbFunctionResponse<T>> => {
  const { data, error } = await supabase.rpc<T>(name, params);
  return {
    data: data as unknown as DbFunction<T>["Returns"],
    error: error?.message,
  };
};
