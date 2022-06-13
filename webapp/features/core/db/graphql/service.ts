import initClient from "@/features/core/db/graphql/initClient";

if (!process.env.SUPABASE_SERVICE_KEY) {
  throw new Error("SUPABASE_SERVICE_KEY is not set");
}

export const serviceClient = initClient(process.env.SUPABASE_SERVICE_KEY);
