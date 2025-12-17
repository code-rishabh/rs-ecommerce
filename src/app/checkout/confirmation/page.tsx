"use client";

import Link from "next/link";
import { PageHero } from "../../../components/PageHero";

export default function OrderConfirmationPage() {
  // Generate a mock order number
  const orderNumber = `RS-${Date.now().toString().slice(-8)}`;

  return (
    <div className="bg-white">
      <PageHero
        title="Order Confirmed!"
        subtitle="Thank you for your purchase. Your order has been received and is being processed."
        badge="✓ Confirmed"
      />

      <section className="border-b border-zinc-200 bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-8 text-center">
            <div className="mb-4 text-6xl">✓</div>
            <h2 className="mb-2 text-2xl font-bold text-zinc-900">
              Order Placed Successfully
            </h2>
            <p className="mb-6 text-zinc-600">
              Your order has been received and is being processed. You will
              receive an email confirmation shortly.
            </p>
            <div className="rounded-lg border border-emerald-200 bg-white p-6">
              <p className="text-sm text-zinc-600">Order Number</p>
              <p className="mt-1 text-2xl font-bold text-zinc-900">
                {orderNumber}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* What's Next */}
            <div className="rounded-lg border border-zinc-200 bg-white p-6">
              <h3 className="mb-4 text-lg font-bold text-zinc-900">
                What's Next?
              </h3>
              <ul className="space-y-3 text-sm text-zinc-600">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-emerald-600">✓</span>
                  <span>
                    You'll receive an order confirmation email within a few
                    minutes
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-emerald-600">✓</span>
                  <span>
                    Our sales team will review your order and contact you if
                    needed
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-emerald-600">✓</span>
                  <span>
                    Once approved, your order will be processed and shipped
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-emerald-600">✓</span>
                  <span>
                    You'll receive tracking information once your order ships
                  </span>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="rounded-lg border border-zinc-200 bg-white p-6">
              <h3 className="mb-4 text-lg font-bold text-zinc-900">
                Need Help?
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-zinc-700">Enterprise Sales</p>
                  <p className="text-zinc-600">sales@redstoneusainc.com</p>
                </div>
                <div>
                  <p className="font-semibold text-zinc-700">Support</p>
                  <p className="text-zinc-600">+1 (800) 000-0000</p>
                </div>
                <div>
                  <p className="font-semibold text-zinc-700">Order Status</p>
                  <p className="text-zinc-600">
                    Check your email for updates or contact support with your
                    order number
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Continue Shopping
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50"
            >
              Contact Support
            </Link>
          </div>

          {/* Important Notice */}
          <div className="mt-8 rounded-lg border-2 border-amber-200 bg-amber-50 p-6">
            <h4 className="mb-2 text-base font-bold text-zinc-900">
              ⚠️ Important Notice
            </h4>
            <p className="text-sm leading-relaxed text-zinc-700">
              Your order is subject to verification and approval. Our team will
              review your photo ID, billing information, and order details. For
              large orders or if there are any discrepancies, we may contact you
              for additional verification. Payment will only be processed after
              order approval.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

