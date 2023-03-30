import { useMemo } from "react";

import { useSession } from "@supabase/auth-helpers-react";
import { AnyVariables, useQuery } from "urql";
import { UseQueryArgs } from "urql/dist/types/hooks/useQuery";

export const useAuthQuery = <D, V extends AnyVariables>(
  queryArgs: UseQueryArgs<V, D>,
  force?: boolean
) => {
  const session = useSession();
  return useQuery<D, V>({
    ...queryArgs,
    pause: !session?.access_token && !force,
    context: useMemo(
      () => ({
        fetchOptions: {
          headers: {
            apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
            Authorization: `Bearer ${session?.access_token}`,
          },
        },
      }),
      [session?.access_token]
    ),
  })[0];
};
