import { useSessionContext } from "@supabase/auth-helpers-react";
import {
  AnyVariables,
  OperationContext,
  TypedDocumentNode,
  useMutation,
} from "urql";

export const useAuthMutation = <D, V extends AnyVariables>(
  query: TypedDocumentNode<D, V>
) => {
  const { session } = useSessionContext();
  const [data, execute] = useMutation<D, V>(query);
  return {
    data,
    execute: (variables: V, context?: Partial<OperationContext>) =>
      execute(variables, {
        fetchOptions: {
          headers: {
            apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
            Authorization: `Bearer ${session?.access_token}`,
          },
        },
        ...context,
      }),
  };
};
