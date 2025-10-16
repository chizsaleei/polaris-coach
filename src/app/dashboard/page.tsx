import { supabaseServer } from "@/lib/supabaseServer";
import Link from "next/link";

export default async function Dashboard() {
  const supabase = supabaseServer();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div className="p-8">
        <p>You are not signed in.</p>
        <Link href="/auth/signin" className="underline">Sign in</Link>
      </div>
    );
  }

  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single();

  return (
    <div className="p-8 space-y-2">
      <h1 className="text-2xl font-semibold">Welcome</h1>
      <pre className="text-sm bg-gray-50 p-4 rounded-xl">{JSON.stringify({ user, profile }, null, 2)}</pre>
    </div>
  );
}
