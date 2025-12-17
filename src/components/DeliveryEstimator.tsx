"use client";

import { useState } from "react";

const MOCK_SERVICEABLE_ZIPS = ["10001", "30301", "60601", "90001", "94105"];

export function DeliveryEstimator() {
  const [zip, setZip] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  const handleCheck = () => {
    if (!zip) {
      setStatus("error");
      setMessage("Enter a ZIP code to check service availability.");
      return;
    }
    const isServiceable = MOCK_SERVICEABLE_ZIPS.includes(zip.trim());
    if (isServiceable) {
      setStatus("ok");
      setMessage("Estimated delivery by: 3–5 business days.");
    } else {
      setStatus("error");
      setMessage(
        "We currently do not ship to this ZIP code. Contact sales for custom logistics."
      );
    }
  };

  return (
    <section id="delivery" className="border-b border-zinc-200 bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.3fr)] md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900">
              Delivery Estimation & ZIP Validation
            </h2>
            <p className="mt-3 text-base text-zinc-600">
              Validate serviceability before checkout and provide transparent delivery ETAs by ZIP code and stock availability.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              <li>• Real-time ZIP validation on the storefront</li>
              <li>• Checkout blocking for non-serviceable regions</li>
              <li>• Configurable logic for multi-warehouse fulfillment</li>
            </ul>
          </div>
          
          {/* Clean Form - Minimal Design */}
          <div className="rounded-lg border border-zinc-200 bg-white p-6">
            <label className="mb-3 block text-sm font-semibold text-zinc-900">
              Check delivery availability
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                placeholder="Enter ZIP code"
                className="flex-1 rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
              />
              <button
                type="button"
                onClick={handleCheck}
                className="rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Check
              </button>
            </div>
            {message && (
              <p
                className={`mt-3 text-sm font-medium ${
                  status === "ok" ? "text-emerald-600" : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}
            <p className="mt-4 text-xs text-zinc-500">
              This widget uses mock data for design purposes. In production, it will connect to live logistics and inventory services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
