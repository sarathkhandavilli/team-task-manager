import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import type { User } from "@supabase/supabase-js";

// Hook: returns the current authenticated user (or null)
export function useAuth(): User | null {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // get the current session once on mount
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });

    // listen for auth state changes and update user
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    const subscription = data?.subscription;

    // cleanup: unsubscribe if subscription exists
    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  return user;
}
