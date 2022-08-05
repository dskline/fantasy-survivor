import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { useUser } from "@supabase/auth-helpers-react";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
};
export const LoginForm = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const { user, error } = useUser();

  const handleLogin = async ({ email }: FormData) => {
    // TODO: change this before going to production
    await supabaseClient.auth.signIn({ email, password: "123123" });
    // await supabaseClient.auth.signUp({ email, password: "123123" });
  };

  return (
    <div>
      <form className="grid auto-cols-min" onSubmit={handleSubmit(handleLogin)}>
        <input {...register("email")} placeholder="Email" />
        <button type="submit">Sign in</button>
      </form>
      {error && <p>{error.message}</p>}
      {user && (
        <span>
          Welcome {user.email} ({user.id})
        </span>
      )}
    </div>
  );
};
