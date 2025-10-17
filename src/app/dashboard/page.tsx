// src/app/dashboard/page.tsx
export const dynamic = 'force-dynamic'; // don't prerender this route
export const revalidate = 0;

import { redirect } from 'next/navigation';
import { supabaseServer } from '@/lib/supabaseServer';

export default async function DashboardPage() {
  const supabase = await supabaseServer();

  // Read the session/user on the server at request time
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // If not signed in, send them to auth
  if (!user) {
    return redirect('/auth/signin');
  }

  // Render your dashboard for signed-in users
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">Welcome, {user.email}</h1>
      {/* TODO: your dashboard content */}
    </main>
  );
}
