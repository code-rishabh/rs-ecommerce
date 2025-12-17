"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../../contexts/AuthContext";
import { PageHero } from "../../components/PageHero";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const success = await login(email, password);
    
    if (success) {
      router.push("/account");
    } else {
      setError("Invalid email or password. Please try again.");
    }
    
    setLoading(false);
  };

  return (
    <div className="bg-white">
      <PageHero
        title="Sign In"
        subtitle="Access your account to view orders, manage your profile, and track shipments"
        badge="Account"
      />

      <section className="border-b border-zinc-200 bg-white py-12">
        <div className="mx-auto max-w-md px-4 lg:px-8">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border-2 border-zinc-200 bg-white p-8 shadow-lg"
          >
            <h2 className="mb-6 text-2xl font-bold text-zinc-900">
              Sign In to Your Account
            </h2>

            {error && (
              <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-semibold text-zinc-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-zinc-700">
                  Password *
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-zinc-300 text-red-600 focus:ring-2 focus:ring-red-500"
                  />
                  <span className="text-sm text-zinc-600">Remember me</span>
                </label>
                <Link
                  href="/contact"
                  className="text-sm font-semibold text-red-600 hover:text-red-700"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-red-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </div>

            <div className="mt-6 text-center text-sm text-zinc-600">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="font-semibold text-red-600 hover:text-red-700"
              >
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

