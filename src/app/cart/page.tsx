"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../contexts/CartContext";
import { PageHero } from "../../components/PageHero";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } =
    useCart();
  const total = getTotalPrice();
  const shipping = total >= 50 ? 0 : 10;
  const finalTotal = total + shipping;

  if (items.length === 0) {
    return (
      <div className="bg-white">
        <PageHero
          title="Your Shopping Cart"
          subtitle="Add products to your cart to get started"
          badge="Cart"
        />
        <section className="border-b border-zinc-200 bg-white py-20">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="text-center">
              <div className="mb-6 text-6xl">🛒</div>
              <h2 className="mb-4 text-2xl font-bold text-zinc-900">
                Your cart is empty
              </h2>
              <p className="mb-8 text-zinc-600">
                Start shopping to add items to your cart
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/hardware"
                  className="rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Shop Hardware
                </Link>
                <Link
                  href="/isvs"
                  className="rounded-lg border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50"
                >
                  Browse ISVs
                </Link>
                <Link
                  href="/deals"
                  className="rounded-lg border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50"
                >
                  View Deals
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <PageHero
        title="Your Shopping Cart"
        subtitle={`${items.length} item${items.length !== 1 ? "s" : ""} in your cart`}
        badge="Cart"
      />

      <section className="border-b border-zinc-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
            {/* Cart Items */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-zinc-900">
                  Cart Items ({items.length})
                </h2>
                <button
                  onClick={clearCart}
                  className="text-sm font-medium text-red-600 hover:text-red-700"
                >
                  Clear Cart
                </button>
              </div>

              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm"
                  >
                    {/* Product Image */}
                    {item.imageUrl && (
                      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-zinc-100">
                        <Image
                          src={item.imageUrl}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      </div>
                    )}

                    {/* Product Info */}
                    <div className="flex flex-1 flex-col gap-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-zinc-900">
                            {item.name}
                          </h3>
                          {item.metadata?.brand && (
                            <p className="text-sm text-zinc-500">
                              {item.metadata.brand}
                            </p>
                          )}
                          {item.metadata?.category && (
                            <p className="text-xs text-zinc-400">
                              {item.metadata.category}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-zinc-400 hover:text-red-600"
                          aria-label="Remove item"
                        >
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        {/* Quantity Selector */}
                        <div className="flex items-center gap-2">
                          <label className="text-sm text-zinc-600">Qty:</label>
                          <div className="flex items-center rounded-lg border border-zinc-300">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="px-2 py-1 text-zinc-600 hover:bg-zinc-100"
                              aria-label="Decrease quantity"
                            >
                              <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M20 12H4"
                                />
                              </svg>
                            </button>
                            <span className="min-w-[3rem] px-3 py-1 text-center text-sm font-semibold text-zinc-900">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="px-2 py-1 text-zinc-600 hover:bg-zinc-100"
                              aria-label="Increase quantity"
                            >
                              <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 4v16m8-8H4"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="text-lg font-bold text-zinc-900">
                            ${(item.price * item.quantity).toLocaleString()}
                          </p>
                          {item.quantity > 1 && (
                            <p className="text-xs text-zinc-500">
                              ${item.price.toLocaleString()} each
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <div className="rounded-lg border-2 border-zinc-200 bg-white p-6 shadow-lg">
                <h2 className="mb-4 text-lg font-bold text-zinc-900">
                  Order Summary
                </h2>

                <div className="space-y-3 border-b border-zinc-200 pb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-600">Subtotal</span>
                    <span className="font-semibold text-zinc-900">
                      ${total.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-600">Shipping</span>
                    <span
                      className={`font-semibold ${
                        shipping === 0
                          ? "text-emerald-600"
                          : "text-zinc-900"
                      }`}
                    >
                      {shipping === 0 ? "FREE" : `$${shipping.toLocaleString()}`}
                    </span>
                  </div>
                  {shipping > 0 && total < 50 && (
                    <p className="text-xs text-zinc-500">
                      Add ${(50 - total).toFixed(2)} more for free shipping
                    </p>
                  )}
                </div>

                <div className="mt-4 flex justify-between border-t border-zinc-200 pt-4">
                  <span className="text-lg font-bold text-zinc-900">Total</span>
                  <span className="text-2xl font-bold text-zinc-900">
                    ${finalTotal.toLocaleString()}
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  <Link
                    href="/checkout"
                    className="block w-full rounded-lg bg-red-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-700"
                  >
                    Proceed to Checkout
                  </Link>
                  <Link
                    href="/hardware"
                    className="block w-full rounded-lg border border-zinc-300 bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50"
                  >
                    Continue Shopping
                  </Link>
                </div>

                <div className="mt-6 rounded-lg bg-zinc-50 p-4 text-xs text-zinc-600">
                  <p className="font-semibold text-zinc-900">
                    💡 Free Shipping
                  </p>
                  <p className="mt-1">
                    Orders over $50 qualify for free shipping. All prices are
                    indicative and final quotes will be confirmed by our sales
                    team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

