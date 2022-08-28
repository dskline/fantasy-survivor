import React from "react";

import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

import { client } from "@/features/core/db/graphql/client";

import "react-toastify/dist/ReactToastify.min.css";
import "@/theme/global.css";

const BasePage = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={client}>
    <Head>
      <title>Fantasy Survivor</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
    <ToastContainer />
  </ApolloProvider>
);

export default BasePage;
