"use client";

import { FormEvent, useState } from "react";
import { PageHero } from "../../components/PageHero";

export default function OnboardingPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-white">
      <PageHero
        title="Customer Onboarding"
        subtitle="Capture key business details to qualify enterprise customers and streamline procurement, compliance, and credit checks."
        badge="🚀 Get Started"
      />

      <section className="border-b border-zinc-200 bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="mb-8 rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">ℹ️</div>
              <div>
                <h3 className="mb-2 text-base font-bold text-zinc-900">
                  Why We Need This Information
                </h3>
                <p className="text-sm leading-relaxed text-zinc-700">
                  This data feeds into CRM, risk assessment, and credit workflows. It helps us provide you with the best enterprise pricing, faster approvals, and personalized service.
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl border-2 border-zinc-200 bg-white p-8 shadow-lg"
          >
            <h2 className="text-xl font-bold text-zinc-900">
              Business Information
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold text-zinc-700">
                  Company Name *
                </label>
                <input
                  required
                  type="text"
                  className="w-full rounded-xl border-2 border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm transition focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-zinc-700">
                  Contact Person *
                </label>
                <input
                  required
                  type="text"
                  className="w-full rounded-xl border-2 border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm transition focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
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
                  Intended Use (Commercial)
                </label>
                <input
                  type="text"
                  placeholder="Training, collaboration, etc."
                  className="w-full rounded-xl border-2 border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm transition focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-zinc-700">
                Business Address
              </label>
              <textarea
                rows={3}
                className="w-full resize-none rounded-xl border-2 border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm transition focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-6 py-4 text-base font-bold text-white shadow-lg transition hover:from-red-700 hover:to-red-800 hover:scale-105"
            >
              Complete Onboarding
            </button>

            {submitted && (
              <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4">
                <p className="text-sm font-semibold text-emerald-700">
                  ✓ Thank you! Your information has been submitted. Our sales team will review and contact you within 24 hours.
                </p>
              </div>
            )}

            <p className="text-xs leading-relaxed text-zinc-500">
              In production, this data will be visible in the admin dashboard for sales, operations, and finance teams, enabling faster processing and personalized service.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
