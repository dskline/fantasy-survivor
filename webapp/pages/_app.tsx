import React, { useState } from "react";

import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
import "@/features/debug/wdyr";
import "@/theme/global.css";

const BasePage = ({ Component, pageProps }: AppProps) => {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      <Head>
        <title>Fantasy Survivor</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <ToastContainer position="bottom-center" />
    </SessionContextProvider>
  );
};

export default BasePage;
