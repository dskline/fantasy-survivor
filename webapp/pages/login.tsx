import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { UserProvider } from "@supabase/auth-helpers-react";
import { NextPage } from "next";

import { LoginForm } from "@/features/core/auth/login/LoginForm";

const Page: NextPage = () => (
  <UserProvider supabaseClient={supabaseClient}>
    <LoginForm />
  </UserProvider>
);
export default Page;
