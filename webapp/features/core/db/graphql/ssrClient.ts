import { initUrqlClient } from "next-urql";
import { Client, ssrExchange } from "urql";

import { clientOptions } from "@/features/core/db/graphql/client";

export const ssrClient = () => {
  const ssrCache = ssrExchange({ isClient: false });
  const client = initUrqlClient(
    clientOptions(ssrCache),
    false /* set to false to disable suspense */
  ) as Client;
  return { client, ssrCache };
};
