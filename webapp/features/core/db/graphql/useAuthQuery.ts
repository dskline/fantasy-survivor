import { useMemo } from "react";

import { useUser } from "@supabase/auth-helpers-react";
import { AnyVariables, useQuery } from "urql";
import { UseQueryArgs } from "urql/dist/types/hooks/useQuery";

export const useAuthQuery = <D, V extends AnyVariables>(
  queryArgs: UseQueryArgs<V, D>,
  force?: boolean
) => {
  const { accessToken } = useUser();
  return useQuery<D, V>({
    ...queryArgs,
    pause: !accessToken && !force,
    context: useMemo(
      () => ({
        fetchOptions: {
          headers: {
            apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
            Authorization: `Bearer ${accessToken}`,
          },
        },
      }),
      [accessToken]
    ),
  })[0];
};
