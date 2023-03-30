import { NextPage } from "next";

import { LoginForm } from "@/features/core/auth/login/LoginForm";

const Page: NextPage = () => (
  <div className="p-8 lg:m-auto lg:w-1/2">
    <LoginForm />
  </div>
);
export default Page;
