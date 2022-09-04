import { initUrqlClient, SSRExchange } from "next-urql";
import { Client } from "urql";
import {
  cacheExchange,
  ClientOptions,
  dedupExchange,
  ssrExchange,
  fetchExchange,
} from "urql";

if (!process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL_URL) {
  throw new Error("NEXT_PUBLIC_SUPABASE_ANON_KEY is not set");
}
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error("NEXT_PUBLIC_SUPABASE_ANON_KEY is not set");
}

export const clientOptions = (ssrExchange?: SSRExchange) =>
  ({
    url: process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL_URL,
    fetchOptions: {
      headers: {
        apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      },
    },
    exchanges: [dedupExchange, cacheExchange, ssrExchange, fetchExchange],
  } as ClientOptions);

export const ssrCache = ssrExchange({ isClient: false });
export const client = initUrqlClient(
  clientOptions(ssrCache),
  false /* set to false to disable suspense */
) as Client;
