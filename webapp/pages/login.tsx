import { useState } from "react";

import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { NextPage } from "next";

import { LoginForm } from "@/features/core/auth/login/LoginForm";

const Page: NextPage = () => {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      <div className="p-8 lg:m-auto lg:w-1/2">
        <LoginForm />
      </div>
    </SessionContextProvider>
  );
};
export default Page;
