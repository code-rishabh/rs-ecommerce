"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useCart } from "../../../contexts/CartContext";
import { useState } from "react";

// Mock product data - in production, this would come from an API
const products: Record<
  string,
  {
    id: number;
    name: string;
    category: string;
    brand: "Meta" | "PICO" | "Apple";
    commercialOnly?: boolean;
    authorization: "Authorized Distributor" | "Authorized Reseller";
    price: string;
    originalPrice?: string;
    discount?: string;
    badges?: string[];
    imageUrl: string;
    rating?: number;
    reviews?: number;
    description: string;
    specifications: {
      display?: string;
      storage?: string;
      processor?: string;
      battery?: string;
      connectivity?: string;
      weight?: string;
    };
  }
> = {
  "1": {
    id: 1,
    name: "Meta Quest for Business",
    category: "VR Headsets",
    brand: "Meta",
    commercialOnly: true,
    authorization: "Authorized Distributor",
    price: "$995",
    originalPrice: "$1,199",
    discount: "17% off",
    badges: ["Business Warranty", "MDM Ready", "ISV Ready"],
    imageUrl:
      "https://www.technewsworld.com/wp-content/uploads/sites/3/2023/10/Meta-Quest-3.jpg",
    rating: 4.8,
    reviews: 124,
    description:
      "Enterprise-grade VR headset designed for commercial deployments. Includes business-grade warranty, MDM compatibility, and ISV readiness out of the box. Perfect for training, collaboration, and enterprise applications.",
    specifications: {
      display: "2064 x 2208 per eye (LCD)",
      storage: "128GB / 512GB",
      processor: "Snapdragon XR2 Gen 2",
      battery: "Up to 2.5 hours",
      connectivity: "Wi-Fi 6E, USB-C",
      weight: "515g",
    },
  },
  "2": {
    id: 2,
    name: "PICO Neo 3 Pro",
    category: "VR Headsets",
    brand: "PICO",
    authorization: "Authorized Reseller",
    price: "$899",
    badges: ["ISV Ready", "Enterprise Grade"],
    imageUrl:
      "https://m.media-amazon.com/images/I/41K8lbQEogL._AC_UF1000,1000_QL80_.jpg",
    rating: 4.6,
    reviews: 89,
    description:
      "Professional VR headset optimized for enterprise training and simulation. Features high-resolution displays and enterprise management capabilities.",
    specifications: {
      display: "1832 x 1920 per eye (LCD)",
      storage: "128GB / 256GB",
      processor: "Snapdragon XR2",
      battery: "Up to 3 hours",
      connectivity: "Wi-Fi 6, USB-C",
      weight: "395g",
    },
  },
  "3": {
    id: 3,
    name: "Meta Quest Controllers – Enterprise Pack",
    category: "Accessories",
    brand: "Meta",
    authorization: "Authorized Distributor",
    price: "$199",
    badges: ["Enterprise Accessory", "Bulk Pricing"],
    imageUrl:
      "https://cdn.mos.cms.futurecdn.net/kofNLytfdMVuKPazzJXrNV-1200-80.jpg",
    rating: 4.7,
    reviews: 56,
    description:
      "Enterprise pack of Meta Quest controllers with enhanced durability and enterprise warranty. Perfect for bulk deployments.",
    specifications: {
      battery: "AA batteries (included)",
      connectivity: "Bluetooth",
      weight: "126g per controller",
    },
  },
  "4": {
    id: 4,
    name: "PICO 4 Enterprise",
    category: "VR Headsets",
    brand: "PICO",
    authorization: "Authorized Reseller",
    price: "$1,299",
    badges: ["Latest Model", "MDM Ready"],
    imageUrl:
      "https://lf16-statics.picovr.com/obj/pico-fe-sg/pico/pico_website/image/connect_1.88626afd.jpg",
    rating: 4.9,
    reviews: 203,
    description:
      "Latest generation PICO headset with enterprise features. Includes advanced tracking, high-resolution displays, and comprehensive MDM support.",
    specifications: {
      display: "2160 x 2160 per eye (LCD)",
      storage: "128GB / 256GB",
      processor: "Snapdragon XR2 Gen 2",
      battery: "Up to 3.5 hours",
      connectivity: "Wi-Fi 6E, USB-C",
      weight: "295g",
    },
  },
  "5": {
    id: 5,
    name: "Meta Quest Pro",
    category: "VR Headsets",
    brand: "Meta",
    commercialOnly: true,
    authorization: "Authorized Distributor",
    price: "$1,499",
    originalPrice: "$1,799",
    discount: "17% off",
    badges: ["Premium", "Business Warranty", "ISV Ready"],
    imageUrl:
      "https://www.technewsworld.com/wp-content/uploads/sites/3/2023/10/Meta-Quest-3.jpg",
    rating: 4.8,
    reviews: 167,
    description:
      "Premium enterprise VR headset with advanced features for professional use. Includes eye tracking, face tracking, and enterprise-grade warranty.",
    specifications: {
      display: "1800 x 1920 per eye (LCD)",
      storage: "256GB",
      processor: "Snapdragon XR2+",
      battery: "Up to 2 hours",
      connectivity: "Wi-Fi 6E, USB-C",
      weight: "722g",
    },
  },
  "6": {
    id: 6,
    name: "VR Charging Station – 6-Bay",
    category: "Accessories",
    brand: "Meta",
    authorization: "Authorized Distributor",
    price: "$349",
    badges: ["Bulk Solution", "Fast Charge"],
    imageUrl:
      "https://cdn.mos.cms.futurecdn.net/kofNLytfdMVuKPazzJXrNV-1200-80.jpg",
    rating: 4.5,
    reviews: 42,
    description:
      "Enterprise charging solution for managing multiple VR headsets. Features fast charging, LED indicators, and durable construction for commercial use.",
    specifications: {
      connectivity: "USB-C",
      capacity: "6 headsets",
      power: "60W total",
      weight: "2.5kg",
    },
  },
};

export default function HardwareDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [addingToCart, setAddingToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const productId = params.id as string;
  const product = products[productId];

  if (!product) {
    return (
      <div className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 text-2xl font-bold text-zinc-900">
            Product Not Found
          </h1>
          <p className="mb-8 text-zinc-600">
            The product you're looking for doesn't exist.
          </p>
          <Link
            href="/hardware"
            className="inline-block rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Back to Hardware
          </Link>
        </div>
      </div>
    );
  }

  const priceNum = parseFloat(product.price.replace("$", "").replace(",", ""));

  const handleAddToCart = () => {
    setAddingToCart(true);
    
    addToCart({
      id: `hardware-${product.id}`,
      name: product.name,
      type: "hardware",
      price: priceNum,
      imageUrl: product.imageUrl,
      quantity,
      metadata: {
        brand: product.brand,
        category: product.category,
        authorization: product.authorization,
        originalPrice: product.originalPrice
          ? parseFloat(
              product.originalPrice.replace("$", "").replace(",", "")
            )
          : undefined,
        discount: product.discount,
      },
    });

    setTimeout(() => {
      setAddingToCart(false);
    }, 500);
  };

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="border-b border-zinc-200 bg-zinc-50 py-3">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-zinc-600 hover:text-zinc-900"
            >
              Home
            </Link>
            <span className="text-zinc-400">/</span>
            <Link
              href="/hardware"
              className="text-zinc-600 hover:text-zinc-900"
            >
              Hardware
            </Link>
            <span className="text-zinc-400">/</span>
            <span className="text-zinc-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="border-b border-zinc-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Product Image */}
            <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-zinc-100">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Brand & Category */}
              <div>
                <span className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                  {product.brand}
                </span>
                <span className="ml-2 inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {product.authorization}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
                {product.name}
              </h1>

              {/* Rating */}
              {product.rating && (
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating!)
                            ? "text-amber-400"
                            : "text-zinc-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-zinc-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              )}

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-baseline gap-3">
                  {product.originalPrice ? (
                    <>
                      <span className="text-3xl font-bold text-emerald-600">
                        {product.price}
                      </span>
                      <span className="text-lg text-zinc-400 line-through">
                        {product.originalPrice}
                      </span>
                      {product.discount && (
                        <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white">
                          {product.discount}
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="text-3xl font-bold text-zinc-900">
                      {product.price}
                    </span>
                  )}
                </div>
                <p className="text-sm text-zinc-600">
                  Commercial pricing includes enterprise warranty and MDM
                  compatibility
                </p>
              </div>

              {/* Badges */}
              {product.badges && product.badges.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {product.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}

              {/* Description */}
              <div>
                <h2 className="mb-2 text-lg font-bold text-zinc-900">
                  Description
                </h2>
                <p className="text-zinc-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="space-y-4 rounded-lg border-2 border-zinc-200 bg-zinc-50 p-6">
                <div className="flex items-center gap-4">
                  <label className="text-sm font-semibold text-zinc-700">
                    Quantity:
                  </label>
                  <div className="flex items-center rounded-lg border border-zinc-300 bg-white">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-zinc-600 hover:bg-zinc-100"
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
                    <span className="min-w-[4rem] px-4 py-2 text-center font-semibold text-zinc-900">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-zinc-600 hover:bg-zinc-100"
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
                <button
                  onClick={handleAddToCart}
                  disabled={addingToCart}
                  className="w-full rounded-lg bg-red-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {addingToCart ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="h-5 w-5 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Adding to Cart...
                    </span>
                  ) : (
                    "Add to Cart"
                  )}
                </button>
                <Link
                  href="/cart"
                  className="block w-full rounded-lg border-2 border-red-600 bg-white px-6 py-3 text-center text-base font-semibold text-red-600 transition hover:bg-red-50"
                >
                  View Cart
                </Link>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-12 rounded-lg border border-zinc-200 bg-white p-8">
            <h2 className="mb-6 text-2xl font-bold text-zinc-900">
              Specifications
            </h2>
            <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key}>
                  <dt className="text-sm font-semibold text-zinc-700 capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </dt>
                  <dd className="mt-1 text-sm text-zinc-600">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}

