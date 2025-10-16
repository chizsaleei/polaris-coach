"use client";

import { useState } from "react";
import { signInWithEmailOtp } from "@/lib/auth";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const { error } = await signInWithEmailOtp(email);
    if (error) setError(error.message);
    else setSent(true);
  }

  if (sent) return <p>Check your email for the sign in link.</p>;

  return (
    <form onSubmit={onSubmit} className="max-w-sm mx-auto space-y-4 p-6">
      <h1 className="text-2xl font-semibold">Sign in</h1>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="w-full border rounded-xl p-3"
      />
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <button className="w-full rounded-xl p-3 bg-black text-white">Send magic link</button>
    </form>
  );
}
