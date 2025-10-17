// src/app/auth/callback/page.tsx
export const dynamic = 'force-dynamic'; // don't prerender this page
export const revalidate = 0;

import { redirect } from 'next/navigation';
import { supabaseServer } from '@/lib/supabaseServer';

export default async function AuthCallbackPage() {
  // Always create the server client per request
  const supabase = await supabaseServer();

  try {
    // If this throws in weird environments, we still don't want build to fail
    const {
      data: { user },
    } = await supabase.auth.getUser();

    // Send users where you want them after email magic link / OAuth callback
    return redirect(user ? '/dashboard' : '/auth/signin');
  } catch {
    // If something goes wrong, fail-safe to sign-in page
    return redirect('/auth/signin');
  }
}
