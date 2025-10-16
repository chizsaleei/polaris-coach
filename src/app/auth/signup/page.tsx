"use client";

import { useState } from "react";
import { signUpWithEmailPassword } from "@/lib/auth";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [ok, setOk] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const { error } = await signUpWithEmailPassword(email, password, fullName);
    if (error) setError(error.message);
    else setOk(true);
  }

  if (ok) return <p>Account created. Check your email to confirm.</p>;

  return (
    <form onSubmit={onSubmit} className="max-w-sm mx-auto space-y-4 p-6">
      <h1 className="text-2xl font-semibold">Create account</h1>
      <input className="w-full border rounded-xl p-3" placeholder="Full name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      <input className="w-full border rounded-xl p-3" placeholder="you@example.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="w-full border rounded-xl p-3" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <button className="w-full rounded-xl p-3 bg-black text-white">Sign up</button>
    </form>
  );
}
