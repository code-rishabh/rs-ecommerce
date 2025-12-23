"use client";

import { FormEvent, useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="border-b border-zinc-200 bg-zinc-50 py-12">
      <div className="container-custom max-w-4xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
            Stay Updated on Enterprise VR Deals
          </h2>
          <p className="mt-3 text-base text-zinc-600">
            Get exclusive access to volume discounts, new product launches, and enterprise bundle offers.
          </p>
          
          <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your business email"
              required
              className="flex-1 rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
            />
            <button
              type="submit"
              className="rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Subscribe
            </button>
          </form>
          
          {submitted && (
            <p className="mt-4 text-sm text-emerald-700">
              ✓ Thank you! You've been subscribed to our enterprise updates.
            </p>
          )}
          
          <p className="mt-6 text-xs text-zinc-500">
            By subscribing, you agree to receive enterprise-focused communications. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
