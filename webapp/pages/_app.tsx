import React from "react";

import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

import { client } from "@/features/core/db/graphql/client";
import "@/theme/global.css";

const BasePage = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default BasePage;
