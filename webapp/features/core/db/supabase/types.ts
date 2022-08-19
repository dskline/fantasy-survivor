import { Database } from "@/features/core/db/supabase/__generated__/types";

export type InsertValues<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Insert"];
