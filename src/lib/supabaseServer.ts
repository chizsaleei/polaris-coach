import { cookies } from "next/headers";
import { createServerClient, type CookieOptions } from "@supabase/ssr";

export async function supabaseServer() {
  // In Next 15 this can be async, so await it
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        // read
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        // write (may no-op outside route handlers)
        set(name: string, value: string, options?: CookieOptions) {
          try {
            (cookieStore as any)?.set?.(name, value, options);
          } catch {
            /* ignore */
          }
        },
        remove(name: string, options?: CookieOptions) {
          try {
            (cookieStore as any)?.delete?.(name, options);
          } catch {
            /* ignore */
          }
        },
      },
    }
  );
}
