"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        // Force a hard refresh to ensure middleware picks up the cookie and server components re-render correctly
        window.location.href = "/admin";
      } else {
        const data = await res.json();
        setError(data.error || "Invalid password");
        setIsLoading(false);
      }
    } catch {
      setError("An unexpected error occurred");
      setIsLoading(false);
    }
  }

  return (
    <main className="flex min-h-[calc(100vh-140px)] items-center justify-center p-4">
      <div className="w-full max-w-sm rounded-xl border border-zinc-200 bg-white p-8 shadow-sm">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-100 shadow-inner">
            <Image src="/dtecalc.png" alt="DTECALC Logo" width={64} height={64} className="object-cover" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-950">Admin Login</h1>
          <p className="mt-2 text-sm text-zinc-500">Enter your master key to access the console</p>
        </div>

        {error && (
          <div className="mb-6 rounded-md bg-red-50 p-4 text-sm font-medium text-red-800 border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-semibold text-zinc-900">
              Admin Key
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-zinc-200 px-3 py-2 text-sm placeholder:text-zinc-400 focus:border-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-950"
              placeholder="Enter your API key..."
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || !password}
            className="inline-flex w-full min-h-10 items-center justify-center rounded-md bg-zinc-950 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-zinc-800 disabled:opacity-50"
          >
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Authenticate"}
          </button>
        </form>
      </div>
    </main>
  );
}
