import { cookies } from "next/headers";
import { createServerClient, type CookieOptions } from "@supabase/ssr";

/**
 * Narrow type for the optional write APIs that exist only in route handlers
 * (and are no-ops in other server contexts).
 */
type WritableCookies = {
  set?: (name: string, value: string, options?: CookieOptions) => void;
  delete?: (name: string, options?: CookieOptions) => void;
};

export async function supabaseServer() {
  // Next 15 allows this to be async in some contexts
  const cookieStore = await cookies();

  // Provide a typed “maybe-writable” view without using `any`
  const writable = cookieStore as unknown as WritableCookies;

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        // read
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        // write (may be a no-op outside of Route Handlers/middleware)
        set(name: string, value: string, options?: CookieOptions) {
          try {
            writable.set?.(name, value, options);
          } catch {
            /* no-op */
          }
        },
        remove(name: string, options?: CookieOptions) {
          try {
            writable.delete?.(name, options);
          } catch {
            /* no-op */
          }
        },
      },
    }
  );
}
