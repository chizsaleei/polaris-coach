'use client';

export const dynamic = 'force-dynamic';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { supabaseBrowser } from '@/lib/supabaseBrowser';

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ||
  (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000');

export default function SignInPage() {
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function onGoogle() {
    setError(null);
    setLoading(true);
    const sb = supabaseBrowser();
    const { error } = await sb.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${APP_URL}/auth/callback` },
    });
    if (error) setError(error.message);
    setLoading(false);
  }

  async function onEmail(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const sb = supabaseBrowser();
    const { error } = await sb.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${APP_URL}/auth/callback` },
    });
    setLoading(false);
    if (error) setError(error.message);
    else setSent(true);
  }

  return (
    <main className="min-h-[calc(100svh-80px)] grid place-items-center px-4">
      <div className="w-full max-w-md rounded-2xl border bg-card text-card-foreground shadow-sm p-6">
        <Logo />
        <h1 className="mt-4 text-2xl font-semibold">Hey friend! Welcome back</h1>

        <div className="mt-6 space-y-4">
          <Button
            variant="muted"
            className="w-full justify-center gap-3 rounded-2xl"
            onClick={onGoogle}
            disabled={loading}
          >
            <GoogleIcon className="h-5 w-5" />
            Continue with Google
          </Button>

          <div className="relative text-center text-sm text-muted-foreground">
            <span className="px-2 bg-card relative z-10">Or</span>
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-border" />
          </div>

          {sent ? (
            <p className="text-sm rounded-xl bg-[hsl(var(--muted))] p-3">
              Magic link sent to <span className="font-medium">{email}</span>. Check your inbox.
            </p>
          ) : (
            <form onSubmit={onEmail} className="space-y-3">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
                placeholder="you@example.com"
              />
              {error ? <p className="text-sm text-red-400">{error}</p> : null}
              <Button type="submit" className="w-full rounded-2xl" disabled={loading}>
                Continue
              </Button>
            </form>
          )}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          No account?{' '}
          <Link href="/auth/signup" className="underline">
            Create one
          </Link>
        </p>
      </div>
    </main>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Compass className="h-6 w-6 text-[hsl(var(--brand-sky))]" />
      <span className="text-lg font-semibold">Polaris</span>
    </div>
  );
}

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="#EA4335" d="M12 10.2v3.8h5.3c-.2 1.2-1.3 3.5-5.3 3.5-3.2 0-5.8-2.7-5.8-6s2.6-6 5.8-6c1.8 0 3 .7 3.7 1.3l2.5-2.5C16.6 2.8 14.5 2 12 2 6.9 2 2.8 6.1 2.8 11.2S6.9 20.4 12 20.4c6.5 0 9.1-4.5 9.1-8.4 0-.6-.1-1-.2-1.4H12z" />
    </svg>
  );
}

function Compass(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
      <path d="M14.5 9.5l-2 5-3-3 5-2z" strokeWidth="1.5" />
    </svg>
  );
}
