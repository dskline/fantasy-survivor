import { useSupabaseClient } from "@supabase/auth-helpers-react";

import { Database } from "@/features/core/db/supabase/__generated__/types";

export const useSupabase = () => useSupabaseClient<Database>();
