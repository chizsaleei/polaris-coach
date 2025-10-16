import { supabaseServer } from "@/lib/supabaseServer";
import { redirect } from "next/navigation";

export default async function CallbackPage() {
  // Supabase handles session via cookies on redirect
  const supabase = supabaseServer();
  const { data: { user } } = await supabase.auth.getUser();

  // Ensure profile exists (trigger already created it)
  if (user?.id) {
    // optional: hydrate minimal prefs row if missing
    await supabase.from("user_preferences").upsert({ user_id: user.id }).select().single();
  }

  redirect("/dashboard");
}
