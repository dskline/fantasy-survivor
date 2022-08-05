import initClient from "@/features/core/db/graphql/initClient";

if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error("NEXT_PUBLIC_SUPABASE_ANON_KEY is not set");
}

export const client = initClient(
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
