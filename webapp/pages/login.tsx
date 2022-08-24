import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { UserProvider } from "@supabase/auth-helpers-react";
import { NextPage } from "next";

import { LoginForm } from "@/features/core/auth/login/LoginForm";

const Page: NextPage = () => (
  <UserProvider supabaseClient={supabaseClient}>
    <div className="p-8 lg:m-auto lg:w-1/2">
      <LoginForm />
    </div>
  </UserProvider>
);
export default Page;
