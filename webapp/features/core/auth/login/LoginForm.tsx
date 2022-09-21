import { useEffect } from "react";

import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { useUser } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/ui";

type Props = {
  onLogin?: () => void;
};
export const LoginForm = ({ onLogin }: Props) => {
  const { user } = useUser();
  const userId = user?.id;

  useEffect(() => {
    if (userId) {
      onLogin?.();
    }
  }, [userId, onLogin]);

  return (
    <div>
      <Auth
        supabaseClient={supabaseClient}
        // providers={["google", "twitter", "twitch"]}
        socialColors
      />
      {user && (
        <div>
          <button onClick={() => supabaseClient.auth.signOut()}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};
