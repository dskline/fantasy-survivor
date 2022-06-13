import { ApolloClient, InMemoryCache } from "@apollo/client";

if (!process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL_URL) {
  throw new Error("NEXT_PUBLIC_SUPABASE_GRAPHQL_URL is not set");
}

export default function initClient (apiKey: string) {
  return new ApolloClient({
    uri: process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL_URL,
    cache: new InMemoryCache(),
    headers: {
      apiKey,
    }
  })
}
