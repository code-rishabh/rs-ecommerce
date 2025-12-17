"use client";

import Image from "next/image";
import Link from "next/link";
import { useWishlist } from "../../../contexts/WishlistContext";
import { useCart } from "../../../contexts/CartContext";
import { PageHero } from "../../../components/PageHero";
import { useState } from "react";
import { Toast } from "../../../components/Toast";

export default function WishlistPage() {
  const { items, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [addingId, setAddingId] = useState<string | null>(null);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null);

  const handleAddToCart = (item: typeof items[0]) => {
    setAddingId(item.id);
    
    addToCart({
      id: item.id,
      name: item.name,
      type: item.type,
      price: item.price,
      imageUrl: item.imageUrl,
      metadata: item.metadata,
    });

    setToast({ message: "Added to Cart", type: "success" });
    setTimeout(() => {
      setAddingId(null);
      setToast(null);
    }, 2000);
  };

  const handleRemove = (id: string) => {
    removeFromWishlist(id);
    setToast({ message: "Removed from Wishlist", type: "info" });
    setTimeout(() => setToast(null), 3000);
  };

  if (items.length === 0) {
    return (
      <div className="bg-white">
        <PageHero
          title="My Wishlist"
          subtitle="Save your favorite products for later"
          badge="Wishlist"
        />
        <section className="border-b border-zinc-200 bg-white py-20">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="text-center">
              <div className="mb-6 text-6xl">❤️</div>
              <h2 className="mb-4 text-2xl font-bold text-zinc-900">
                Your wishlist is empty
              </h2>
              <p className="mb-8 text-zinc-600">
                Start adding products you love to your wishlist
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
        title="My Wishlist"
        subtitle={`${items.length} item${items.length !== 1 ? "s" : ""} saved`}
        badge="Wishlist"
      />

      <section className="border-b border-zinc-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-zinc-900">
              Saved Items ({items.length})
            </h2>
            <button
              onClick={clearWishlist}
              className="text-sm font-medium text-red-600 hover:text-red-700"
            >
              Clear All
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <Link href={item.link} className="flex flex-1 flex-col">
                  {/* Product Image */}
                  {item.imageUrl && (
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-50">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      />
                    </div>
                  )}

                  {/* Product Info */}
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="mb-2 text-sm font-bold text-zinc-900 line-clamp-2 group-hover:text-red-600 transition-colors">
                      {item.name}
                    </h3>
                    {item.metadata?.brand && (
                      <p className="mb-2 text-xs text-zinc-500">{item.metadata.brand}</p>
                    )}
                    <div className="mt-auto">
                      <p className="text-lg font-extrabold text-zinc-900">
                        ${item.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Actions */}
                <div className="flex gap-2 p-4 pt-0">
                  <button
                    onClick={() => handleAddToCart(item)}
                    disabled={addingId === item.id}
                    className="flex-1 rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white transition-all hover:bg-red-700 hover:scale-[1.02] disabled:opacity-50"
                  >
                    {addingId === item.id ? (
                      <span className="flex items-center justify-center gap-1.5 text-xs">
                        <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Adding...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-1.5 text-xs">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Add to Cart
                      </span>
                    )}
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="rounded-lg border border-red-600 bg-red-50 p-2 text-red-600 transition-all hover:bg-red-100 hover:scale-110"
                    aria-label="Remove from wishlist"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}

