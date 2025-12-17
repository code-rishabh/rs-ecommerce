"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { PageHero } from "../../components/PageHero";
import { useCart } from "../../contexts/CartContext";
import Image from "next/image";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotalPrice, clearCart } = useCart();
  const [consent, setConsent] = useState(false);
  const [idFileName, setIdFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [sameAsShipping, setSameAsShipping] = useState(true);

  // Shipping Address
  const [shippingAddress, setShippingAddress] = useState({
    fullName: "",
    company: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
  });

  // Billing Address
  const [billingAddress, setBillingAddress] = useState({
    fullName: "",
    company: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
  });

  const total = getTotalPrice();
  const shipping = total >= 50 ? 0 : 10;
  const finalTotal = total + shipping;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!consent) return;
    
    // In production, this would submit to backend
    setSubmitted(true);
    
    // Clear cart and redirect after a delay
    setTimeout(() => {
      clearCart();
      router.push("/checkout/confirmation");
    }, 2000);
  };

  // Show empty cart message if cart is empty
  if (items.length === 0 && !submitted) {
    return (
      <div className="bg-white">
        <PageHero
          title="Secure Checkout"
          subtitle="Your cart is empty"
          badge="Cart"
        />
        <section className="border-b border-zinc-200 bg-white py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="mb-8 text-zinc-600">
              Please add items to your cart before proceeding to checkout.
            </p>
            <Link
              href="/cart"
              className="inline-block rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              View Cart
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <PageHero
        title="Secure Checkout"
        subtitle="Review your order, upload a valid photo ID for credit card payments, and confirm mandatory terms & conditions."
        badge="🔒 Secure Payment"
      />

      <section className="border-b border-zinc-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1.1fr)]">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl border-2 border-zinc-200 bg-white p-8 shadow-lg"
            >
              {/* Shipping Address */}
              <div>
                <h2 className="mb-4 text-xl font-bold text-zinc-900">
                  Shipping Address
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-sm font-semibold text-zinc-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={shippingAddress.fullName}
                      onChange={(e) =>
                        setShippingAddress({
                          ...shippingAddress,
                          fullName: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-sm font-semibold text-zinc-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={shippingAddress.company}
                      onChange={(e) =>
                        setShippingAddress({
                          ...shippingAddress,
                          company: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-sm font-semibold text-zinc-700">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      required
                      value={shippingAddress.street}
                      onChange={(e) =>
                        setShippingAddress({
                          ...shippingAddress,
                          street: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-zinc-700">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      value={shippingAddress.city}
                      onChange={(e) =>
                        setShippingAddress({
                          ...shippingAddress,
                          city: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-zinc-700">
                      State *
                    </label>
                    <input
                      type="text"
                      required
                      value={shippingAddress.state}
                      onChange={(e) =>
                        setShippingAddress({
                          ...shippingAddress,
                          state: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-zinc-700">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      required
                      value={shippingAddress.zip}
                      onChange={(e) =>
                        setShippingAddress({
                          ...shippingAddress,
                          zip: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-zinc-700">
                      Country *
                    </label>
                    <select
                      required
                      value={shippingAddress.country}
                      onChange={(e) =>
                        setShippingAddress({
                          ...shippingAddress,
                          country: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Billing Address */}
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-bold text-zinc-900">
                    Billing Address
                  </h2>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={sameAsShipping}
                      onChange={(e) => setSameAsShipping(e.target.checked)}
                      className="h-4 w-4 rounded border-zinc-300 text-red-600 focus:ring-2 focus:ring-red-500"
                    />
                    <span className="text-sm text-zinc-700">
                      Same as shipping address
                    </span>
                  </label>
                </div>
                {!sameAsShipping && (
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label className="mb-1 block text-sm font-semibold text-zinc-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={billingAddress.fullName}
                        onChange={(e) =>
                          setBillingAddress({
                            ...billingAddress,
                            fullName: e.target.value,
                          })
                        }
                        className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-1 block text-sm font-semibold text-zinc-700">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={billingAddress.company}
                        onChange={(e) =>
                          setBillingAddress({
                            ...billingAddress,
                            company: e.target.value,
                          })
                        }
                        className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-1 block text-sm font-semibold text-zinc-700">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        required
                        value={billingAddress.street}
                        onChange={(e) =>
                          setBillingAddress({
                            ...billingAddress,
                            street: e.target.value,
                          })
                        }
                        className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-semibold text-zinc-700">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        value={billingAddress.city}
                        onChange={(e) =>
                          setBillingAddress({
                            ...billingAddress,
                            city: e.target.value,
                          })
                        }
                        className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-semibold text-zinc-700">
                        State *
                      </label>
                      <input
                        type="text"
                        required
                        value={billingAddress.state}
                        onChange={(e) =>
                          setBillingAddress({
                            ...billingAddress,
                            state: e.target.value,
                          })
                        }
                        className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-semibold text-zinc-700">
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        required
                        value={billingAddress.zip}
                        onChange={(e) =>
                          setBillingAddress({
                            ...billingAddress,
                            zip: e.target.value,
                          })
                        }
                        className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-semibold text-zinc-700">
                        Country *
                      </label>
                      <select
                        required
                        value={billingAddress.country}
                        onChange={(e) =>
                          setBillingAddress({
                            ...billingAddress,
                            country: e.target.value,
                          })
                        }
                        className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              <h2 className="text-xl font-bold text-zinc-900">
                Payment & Verification
              </h2>

              {/* Payment Method Selection */}
              <div>
                <label className="mb-3 block text-sm font-bold text-zinc-700">
                  Payment Method
                </label>
                <div className="grid gap-4 sm:grid-cols-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("credit-card")}
                    className={`rounded-xl border-2 p-4 text-left transition-all ${
                      paymentMethod === "credit-card"
                        ? "border-red-600 bg-red-50 shadow-md"
                        : "border-zinc-200 bg-white hover:border-zinc-300"
                    }`}
                  >
                    <div className="mb-2 text-2xl">💳</div>
                    <p className="text-sm font-bold text-zinc-900">Credit Card</p>
                    <p className="mt-1 text-xs text-zinc-600">
                      Visa, MasterCard, Amex
                    </p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("paypal")}
                    disabled
                    className="cursor-not-allowed rounded-xl border-2 border-dashed border-zinc-300 bg-zinc-50 p-4 text-left opacity-60"
                  >
                    <div className="mb-2 text-2xl">🅿️</div>
                    <p className="text-sm font-bold text-zinc-400">PayPal / BNPL</p>
                    <p className="mt-1 text-xs text-zinc-400">
                      Phase II (Coming Soon)
                    </p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("ach")}
                    disabled
                    className="cursor-not-allowed rounded-xl border-2 border-dashed border-zinc-300 bg-zinc-50 p-4 text-left opacity-60"
                  >
                    <div className="mb-2 text-2xl">🏦</div>
                    <p className="text-sm font-bold text-zinc-400">ACH Transfer</p>
                    <p className="mt-1 text-xs text-zinc-400">
                      Business-only (Coming Soon)
                    </p>
                  </button>
                </div>
              </div>

              {/* ID Upload */}
              {paymentMethod === "credit-card" && (
                <div className="rounded-xl border-2 border-zinc-200 bg-zinc-50 p-6">
                  <label className="mb-3 block text-sm font-bold text-zinc-700">
                    Upload Photo ID (Required for Credit Card)
                  </label>
                  <div className="space-y-3 rounded-lg border-2 border-dashed border-zinc-300 bg-white p-4">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(event) =>
                        setIdFileName(event.target.files?.[0]?.name ?? null)
                      }
                      className="w-full text-sm file:mr-3 file:rounded-lg file:border-0 file:bg-red-600 file:px-4 file:py-2 file:text-sm file:font-bold file:text-white hover:file:bg-red-700"
                    />
                    {idFileName && (
                      <p className="text-sm font-semibold text-emerald-700">
                        ✓ Selected: {idFileName}
                      </p>
                    )}
                    <p className="text-xs leading-relaxed text-zinc-600">
                      ID must match the cardholder name, be valid and unexpired, and be clearly readable. Duplicate ID usage and mismatched billing details will be flagged for review.
                    </p>
                  </div>
                </div>
              )}

              {/* Shipping Info */}
              <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
                <h3 className="mb-3 text-base font-bold text-zinc-900">
                  Shipping Charges
                </h3>
                <p className="text-sm leading-relaxed text-zinc-700">
                  Orders under <span className="font-bold">$50</span> incur a <span className="font-bold">$10</span> flat shipping fee. Orders of <span className="font-bold">$50 or more</span> qualify for <span className="font-bold text-emerald-700">free shipping</span>. Final tax logic will be applied based on state rules; currently, no sales tax applies.
                </p>
              </div>

              {/* Consent Checkbox */}
              <div className="rounded-xl border-2 border-zinc-200 bg-white p-6">
                <label className="flex items-start gap-4">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(event) => setConsent(event.target.checked)}
                    className="mt-1 h-5 w-5 rounded border-2 border-zinc-300 text-red-600 focus:ring-2 focus:ring-red-500"
                  />
                  <span className="text-sm leading-relaxed text-zinc-700">
                    "I have read and accept the Terms & Conditions, and I willingly provide my photo ID for verification purposes. I confirm that this order involves no fraud or perjury."
                  </span>
                </label>
                {!consent && (
                  <p className="mt-3 text-sm font-semibold text-red-700">
                    ⚠️ This consent is mandatory. The order cannot be placed unless it is accepted.
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={!consent}
                className={`w-full rounded-xl px-6 py-4 text-base font-bold text-white shadow-lg transition-all ${
                  consent
                    ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 hover:scale-105"
                    : "cursor-not-allowed bg-zinc-300"
                }`}
              >
                Place Order Securely
              </button>

              {submitted && (
                <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4">
                  <p className="text-sm font-semibold text-emerald-700">
                    ✓ Order submitted for verification. In production, automated and manual checks will validate ID authenticity, cardholder match, and billing details before payment capture.
                  </p>
                </div>
              )}
            </form>

            {/* Order Summary Sidebar */}
            <aside className="space-y-6 rounded-2xl border-2 border-zinc-200 bg-gradient-to-br from-zinc-50 to-white p-6 shadow-lg">
              <h3 className="text-lg font-bold text-zinc-900">
                Order Summary
              </h3>

              {/* Cart Items */}
              <div className="space-y-3 rounded-xl border border-zinc-200 bg-white p-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    {item.imageUrl && (
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-zinc-100">
                        <Image
                          src={item.imageUrl}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-zinc-900 line-clamp-2">
                        {item.name}
                      </p>
                      <p className="text-xs text-zinc-500">
                        Qty: {item.quantity}
                      </p>
                      <p className="text-sm font-bold text-zinc-900">
                        ${(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3 rounded-xl border border-zinc-200 bg-white p-4">
                <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                  <span className="text-sm text-zinc-600">Subtotal</span>
                  <span className="text-base font-bold text-zinc-900">
                    ${total.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                  <span className="text-sm text-zinc-600">Shipping</span>
                  <span
                    className={`text-base font-bold ${
                      shipping === 0 ? "text-emerald-700" : "text-zinc-900"
                    }`}
                  >
                    {shipping === 0 ? "FREE" : `$${shipping.toLocaleString()}`}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                  <span className="text-sm text-zinc-600">Tax</span>
                  <span className="text-base font-bold text-zinc-900">$0.00</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-lg font-bold text-zinc-900">Total</span>
                  <span className="text-2xl font-bold text-zinc-900">
                    ${finalTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-white p-4">
                <h4 className="mb-2 text-sm font-bold text-zinc-900">
                  Approval Flow
                </h4>
                <p className="text-xs leading-relaxed text-zinc-600">
                  Payment may be subject to automated fraud checks and manual admin approval, especially for large orders or mismatched identity details.
                </p>
              </div>

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                <h4 className="mb-2 text-sm font-bold text-zinc-900">
                  Need Help?
                </h4>
                <p className="mb-2 text-xs text-zinc-700">
                  Enterprise Sales: <span className="font-semibold">sales@redstoneusainc.com</span>
                </p>
                <p className="text-xs text-zinc-700">
                  Support: <span className="font-semibold">+1 (800) 000-0000</span>
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
