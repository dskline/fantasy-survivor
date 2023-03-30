import { createClient } from "@supabase/supabase-js";

import { Database } from "@/features/core/db/supabase/__generated__/types";
import { DbFunction, DbFunctionKey } from "@/features/core/db/supabase/types";

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error("NEXT_PUBLIC_SUPABASE_URL is not set");
}
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error("NEXT_PUBLIC_SUPABASE_ANON_KEY is not set");
}

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Type-friendlier wrapper around supabase.rpc
type DbFunctionResponse<T extends DbFunctionKey> = {
  data: DbFunction<T>["Returns"];
  error?: string;
};
export const dbFunction = async <T extends DbFunctionKey>(
  name: T,
  params?: DbFunction<T>["Args"]
): Promise<DbFunctionResponse<T>> => {
  const { data, error } = await supabase.rpc(name, params);
  return {
    data: data as unknown as DbFunction<T>["Returns"],
    error: error?.message,
  };
};
