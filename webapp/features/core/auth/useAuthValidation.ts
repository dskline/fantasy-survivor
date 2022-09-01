import { useUser } from "@supabase/auth-helpers-react";

export const useAuthValidation = () => {
  const { user, isLoading } = useUser();

  return {
    user,
    isLoggedIn: !isLoading && user !== null,
  }
}
