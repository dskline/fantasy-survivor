import React from "react";

import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

import { client } from "@/features/core/db/graphql/client";

import "react-toastify/dist/ReactToastify.min.css";
import "@/theme/global.css";

const BasePage = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
    <ToastContainer />
  </ApolloProvider>
);

export default BasePage;
