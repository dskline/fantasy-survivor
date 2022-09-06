import { Database } from "@/features/core/db/supabase/__generated__/types";

export type InsertValues<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Insert"];

type DbFunctionDict = Database["public"]["Functions"];
export type DbFunctionKey = keyof DbFunctionDict;
export type DbFunction<T extends DbFunctionKey> = DbFunctionDict[T];
