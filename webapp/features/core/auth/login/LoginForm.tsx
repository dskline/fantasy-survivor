import { useEffect, useState } from "react";

import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useUser } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

type Props = {
  onLogin?: () => void;
};
export const LoginForm = ({ onLogin }: Props) => {
  const user = useUser();
  const userId = user?.id;
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  useEffect(() => {
    if (userId) {
      onLogin?.();
    }
  }, [userId, onLogin]);

  return (
    <Auth.UserContextProvider supabaseClient={supabaseClient}>
      <Auth
        supabaseClient={supabaseClient}
        providers={[]}
        appearance={{ theme: ThemeSupa }}
      />
      {user && (
        <div>
          <button onClick={() => supabaseClient.auth.signOut()}>
            Sign out
          </button>
        </div>
      )}
    </Auth.UserContextProvider>
  );
};
