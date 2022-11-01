import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { UserProvider as SupabaseUserProvider } from "@supabase/auth-helpers-react";

import { WhatsNewModal } from "@/features/core/users/whats-new/WhatsNewModal";

type Props = {
  children: React.ReactNode;
};
export const UserProvider = ({ children }: Props) => (
  <SupabaseUserProvider supabaseClient={supabaseClient}>
    {children}
    <WhatsNewModal />
  </SupabaseUserProvider>
);
