"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../../contexts/AuthContext";
import { PageHero } from "../../components/PageHero";

export default function SignupPage() {
  const router = useRouter();
  const { signup } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    const success = await signup(email, password, name, company || undefined);
    
    if (success) {
      router.push("/account");
    } else {
      setError("Failed to create account. Please try again.");
    }
    
    setLoading(false);
  };

  return (
    <div className="bg-white">
      <PageHero
        title="Create Account"
        subtitle="Sign up to access enterprise pricing, order tracking, and exclusive deals"
        badge="Sign Up"
      />

      <section className="border-b border-zinc-200 bg-white py-12">
        <div className="mx-auto max-w-md px-4 lg:px-8">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border-2 border-zinc-200 bg-white p-8 shadow-lg"
          >
            <h2 className="mb-6 text-2xl font-bold text-zinc-900">
              Create Your Account
            </h2>

            {error && (
              <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-semibold text-zinc-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                  placeholder="John Doe"
                />
              </div>

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
                  Company Name
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                  placeholder="Your Company Inc."
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
                  placeholder="At least 6 characters"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-zinc-700">
                  Confirm Password *
                </label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                  placeholder="Re-enter your password"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-red-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Creating account..." : "Create Account"}
              </button>
            </div>

            <div className="mt-6 text-center text-sm text-zinc-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-red-600 hover:text-red-700"
              >
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

