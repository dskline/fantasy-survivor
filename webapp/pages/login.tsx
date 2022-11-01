import { NextPage } from "next";

import { LoginForm } from "@/features/core/auth/login/LoginForm";
import { UserProvider } from "@/features/core/auth/UserProvider";

const Page: NextPage = () => (
  <UserProvider>
    <div className="p-8 lg:m-auto lg:w-1/2">
      <LoginForm />
    </div>
  </UserProvider>
);
export default Page;
