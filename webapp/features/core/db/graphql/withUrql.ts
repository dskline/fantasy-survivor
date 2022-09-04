import { NextPage } from "next";
import { withUrqlClient } from "next-urql";

import { clientOptions } from "@/features/core/db/graphql/client";

export const withUrql = <T>(Component: NextPage<T>) =>
  withUrqlClient((ssrExchange) => clientOptions(ssrExchange))(Component);
