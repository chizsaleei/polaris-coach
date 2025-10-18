import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/**
 * Use in Server Components or Server Actions.
 * Read only. No cookie mutation here.
 */
export function supabaseServer() {
  return createServerClient(URL, KEY, {
    cookies: {
      get(name: string) {
        return cookies().get(name)?.value;
      },
      // No-ops in Server Components
      set() {},
      remove() {},
    },
  });
}

/**
 * Use inside Route Handlers where you have a NextResponse
 * and can mutate cookies on the outgoing response.
 */
export function supabaseServerWithResponse(res: NextResponse) {
  return createServerClient(URL, KEY, {
    cookies: {
      get(name: string) {
        return cookies().get(name)?.value;
      },
      set(name: string, value: string, options: any) {
        res.cookies.set(name, value, options);
      },
      remove(name: string, options: any) {
        res.cookies.set(name, '', { ...options, maxAge: 0 });
      },
    },
  });
}
