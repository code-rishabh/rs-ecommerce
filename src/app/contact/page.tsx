"use client";

import { FormEvent, useState } from "react";
import { PageHero } from "../../components/PageHero";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-white">
      <PageHero
        title="Contact Us"
        subtitle="Reach out to Red Stone USA Inc for enterprise VR inquiries, partnership opportunities, or general questions. Our team is here to help."
        badge="Get in Touch"
      />

      <section className="border-b border-zinc-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)]">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl border-2 border-zinc-200 bg-white p-8 shadow-lg"
            >
              <h2 className="text-xl font-bold text-zinc-900">
                Send us a Message
              </h2>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-zinc-700">
                    Name *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full rounded-xl border-2 border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm transition focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold text-zinc-700">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full rounded-xl border-2 border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm transition focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-zinc-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-xl border-2 border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm transition focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold text-zinc-700">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border-2 border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm transition focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-zinc-700">
                  Message *
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full resize-none rounded-xl border-2 border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm transition focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-6 py-4 text-base font-bold text-white shadow-lg transition hover:from-red-700 hover:to-red-800 hover:scale-105"
              >
                Send Message
              </button>

              {submitted && (
                <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4">
                  <p className="text-sm font-semibold text-emerald-700">
                    ✓ Thank you! Your message has been received. Our team will get back to you within 24 hours.
                  </p>
                </div>
              )}
            </form>

            {/* Contact Info Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-2xl border-2 border-zinc-200 bg-gradient-to-br from-red-50 to-orange-50 p-8 shadow-lg">
                <div className="mb-6 text-4xl">📧</div>
                <h3 className="mb-4 text-xl font-bold text-zinc-900">
                  Enterprise Sales
                </h3>
                <p className="mb-2 text-base font-semibold text-zinc-900">
                  sales@redstoneusainc.com
                </p>
                <p className="text-sm text-zinc-600">
                  For bulk orders, custom bundles, and enterprise partnerships
                </p>
              </div>

              <div className="rounded-2xl border-2 border-zinc-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 shadow-lg">
                <div className="mb-6 text-4xl">🛟</div>
                <h3 className="mb-4 text-xl font-bold text-zinc-900">
                  Customer Support
                </h3>
                <p className="mb-2 text-base font-semibold text-zinc-900">
                  support@redstoneusainc.com
                </p>
                <p className="mb-4 text-sm text-zinc-600">
                  Available 24/7 for order inquiries and technical support
                </p>
                <p className="text-lg font-bold text-zinc-900">
                  +1 (800) 000-0000
                </p>
              </div>

              <div className="rounded-2xl border-2 border-zinc-200 bg-white p-6 shadow-md">
                <h4 className="mb-3 text-sm font-bold text-zinc-900">
                  Response Time
                </h4>
                <p className="text-xs leading-relaxed text-zinc-600">
                  All inquiries are routed directly to the appropriate team. Typical response time is within 24 hours for enterprise inquiries. For urgent matters, please call our support line.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
