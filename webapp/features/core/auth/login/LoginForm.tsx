import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { useUser } from "@supabase/auth-helpers-react";
import { useForm } from "react-hook-form";

type FormData = {
  signin: string;
  register: string;
};
type Props = {
  onLogin?: () => void;
};
export const LoginForm = ({ onLogin }: Props) => {
  const { register, handleSubmit } = useForm<FormData>();
  const { user, error } = useUser();

  const handleLogin = async ({ signin }: FormData) => {
    // TODO: change this before going to production
    await supabaseClient.auth.signIn({ email: signin, password: "123123" });
    onLogin?.();
  };

  const handleSignup = async ({ register }: FormData) => {
    // TODO: change this before going to production
    await supabaseClient.auth.signUp({ email: register, password: "123123" });
  };

  return (
    <div>
      <form className="grid auto-cols-min" onSubmit={handleSubmit(handleLogin)}>
        <input {...register("signin")} placeholder="Email" />
        <button type="submit">Sign in</button>
      </form>
      <form
        className="grid auto-cols-min"
        onSubmit={handleSubmit(handleSignup)}
      >
        <input {...register("register")} placeholder="Email" />
        <button type="submit">Sign up</button>
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
