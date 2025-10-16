"use client";

import { supabaseBrowser } from "./supabaseBrowser";

export async function signInWithEmailOtp(email: string, redirectTo?: string) {
  const supabase = supabaseBrowser();
  return supabase.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: redirectTo ?? `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback` },
  });
}

export async function signUpWithEmailPassword(email: string, password: string, fullName?: string) {
  const supabase = supabaseBrowser();
  return supabase.auth.signUp({
    email,
    password,
    options: { data: { full_name: fullName } },
  });
}

export async function signOut() {
  const supabase = supabaseBrowser();
  return supabase.auth.signOut();
}
