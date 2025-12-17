"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishlistContext";
import { useState } from "react";
import { Toast } from "./Toast";

type Product = {
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
  isBestseller?: boolean;
  isTrending?: boolean;
  stock?: string;
  lowStock?: boolean;
};

const products: Product[] = [
  {
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
    imageUrl: "https://www.technewsworld.com/wp-content/uploads/sites/3/2023/10/Meta-Quest-3.jpg",
    rating: 4.8,
    reviews: 124,
    isBestseller: true,
    stock: "In Stock",
  },
  {
    id: 2,
    name: "PICO Neo 3 Pro",
    category: "VR Headsets",
    brand: "PICO",
    authorization: "Authorized Reseller",
    price: "$899",
    badges: ["ISV Ready", "Enterprise Grade"],
    imageUrl: "https://m.media-amazon.com/images/I/41K8lbQEogL._AC_UF1000,1000_QL80_.jpg",
    rating: 4.6,
    reviews: 89,
  },
  {
    id: 3,
    name: "Meta Quest Controllers – Enterprise Pack",
    category: "Accessories",
    brand: "Meta",
    authorization: "Authorized Distributor",
    price: "$199",
    badges: ["Enterprise Accessory", "Bulk Pricing"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/kofNLytfdMVuKPazzJXrNV-1200-80.jpg",
    rating: 4.7,
    reviews: 56,
  },
  {
    id: 4,
    name: "PICO 4 Enterprise",
    category: "VR Headsets",
    brand: "PICO",
    authorization: "Authorized Reseller",
    price: "$1,299",
    badges: ["Latest Model", "MDM Ready"],
    imageUrl: "https://lf16-statics.picovr.com/obj/pico-fe-sg/pico/pico_website/image/connect_1.88626afd.jpg",
    rating: 4.9,
    reviews: 203,
    isTrending: true,
    stock: "In Stock",
  },
  {
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
    imageUrl: "https://www.technewsworld.com/wp-content/uploads/sites/3/2023/10/Meta-Quest-3.jpg",
    rating: 4.8,
    reviews: 167,
  },
  {
    id: 6,
    name: "VR Charging Station – 6-Bay",
    category: "Accessories",
    brand: "Meta",
    authorization: "Authorized Distributor",
    price: "$349",
    badges: ["Bulk Solution", "Fast Charge"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/kofNLytfdMVuKPazzJXrNV-1200-80.jpg",
    rating: 4.5,
    reviews: 78,
    stock: "Only 3 left",
    lowStock: true,
  },
];

export function EnhancedProductGrid() {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [addingId, setAddingId] = useState<number | null>(null);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null);

  const handleAddToCart = (
    e: React.MouseEvent,
    product: Product
  ) => {
    e.preventDefault();
    e.stopPropagation();
    
    setAddingId(product.id);
    
    const priceNum = parseFloat(
      product.price.replace("$", "").replace(",", "")
    );
    
    addToCart({
      id: `hardware-${product.id}`,
      name: product.name,
      type: "hardware",
      price: priceNum,
      imageUrl: product.imageUrl,
      metadata: {
        brand: product.brand,
        category: product.category,
        originalPrice: product.originalPrice
          ? parseFloat(product.originalPrice.replace("$", "").replace(",", ""))
          : undefined,
        discount: product.discount,
      },
    });

    setTimeout(() => setAddingId(null), 800);
  };

  const handleWishlistToggle = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    
    const itemId = `hardware-${product.id}`;
    const priceNum = parseFloat(product.price.replace("$", "").replace(",", ""));
    
    if (isInWishlist(itemId)) {
      removeFromWishlist(itemId);
      setToast({ message: "Removed from Wishlist", type: "info" });
    } else {
      addToWishlist({
        id: itemId,
        name: product.name,
        type: "hardware",
        price: priceNum,
        imageUrl: product.imageUrl,
        link: `/hardware/${product.id}`,
        metadata: {
          brand: product.brand,
          category: product.category,
        },
      });
      setToast({ message: "Added to Wishlist", type: "success" });
    }
    
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <section id="featured-products" className="border-b border-zinc-200 bg-white section-spacing">
      <div className="container-custom">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl">
            Featured Hardware
          </h2>
          <p className="mt-2 text-base text-zinc-600">
            Enterprise-grade VR devices with commercial warranties and MDM compatibility
          </p>
        </div>

        {/* Compact Product Grid - eBay Style Uniform Heights */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <Link
                href={`/hardware/${product.id}`}
                className="flex flex-1 flex-col"
              >
                <div className="flex flex-1 flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-md">
                  {/* Product Image - Compact */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-50">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    
                    {/* Badges - Compact */}
                    {product.discount && (
                      <div className="absolute right-2 top-2 z-10 rounded-md bg-gradient-to-r from-emerald-600 to-emerald-500 px-2 py-1 text-[10px] font-bold text-white shadow-md">
                        {product.discount}
                      </div>
                    )}
                    
                    {product.commercialOnly && !product.isBestseller && !product.isTrending && (
                      <div className="absolute left-2 top-2 z-10 rounded-md bg-zinc-900/90 backdrop-blur-sm px-2 py-1 text-[10px] font-bold text-white shadow-md">
                        Commercial
                      </div>
                    )}
                    
                    {product.isBestseller && (
                      <div className="absolute left-2 top-2 z-10 flex items-center gap-1 rounded-md bg-gradient-to-r from-amber-500 to-orange-500 px-2 py-1 text-[10px] font-bold text-white shadow-md">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        BEST
                      </div>
                    )}
                    
                    {product.isTrending && (
                      <div className="absolute left-2 top-2 z-10 flex items-center gap-1 rounded-md bg-gradient-to-r from-pink-500 to-rose-500 px-2 py-1 text-[10px] font-bold text-white shadow-md">
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        TREND
                      </div>
                    )}
                  </div>
                
                  {/* Product Info - Compact & Uniform */}
                  <div className="flex flex-1 flex-col p-4">
                    {/* Brand & Rating - Compact */}
                    <div className="mb-2 flex items-center justify-between">
                      <span className="inline-flex items-center rounded-full bg-zinc-900 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                        {product.brand}
                      </span>
                      {product.rating && (
                        <div className="flex items-center gap-0.5">
                          <svg className="h-3 w-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-xs font-semibold text-zinc-900">{product.rating}</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Product Name - Truncated */}
                    <h3 className="mb-1.5 text-sm font-bold text-zinc-900 line-clamp-2 min-h-[2.5rem] group-hover:text-red-600 transition-colors">
                      {product.name}
                    </h3>
                    
                    {/* Category & Stock - Compact */}
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-xs text-zinc-500">{product.category}</p>
                      {product.stock && (
                        <span className={`text-[10px] font-semibold ${
                          product.lowStock ? 'text-orange-600' : 'text-emerald-600'
                        }`}>
                          {product.lowStock && '⚠️ '}{product.stock}
                        </span>
                      )}
                    </div>
                    
                    {/* Price - Compact */}
                    <div className="mb-2 flex items-baseline gap-1.5">
                      <span className="text-lg font-extrabold text-zinc-900">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-zinc-400 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    
                    {/* Savings - Compact */}
                    {product.discount && (
                      <div className="mb-2 inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                        </svg>
                        Save {product.discount}
                      </div>
                    )}
                    
                    {/* Product Badges - Compact, Limited */}
                    {product.badges && product.badges.length > 0 && (
                      <div className="mt-auto flex flex-wrap gap-1.5 pt-2 border-t border-zinc-100">
                        {product.badges.slice(0, 2).map((badge) => (
                          <span
                            key={badge}
                            className="inline-flex items-center gap-0.5 rounded bg-zinc-100 px-1.5 py-0.5 text-[10px] font-medium text-zinc-700"
                          >
                            <svg className="h-2.5 w-2.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {badge}
                          </span>
                        ))}
                        {product.badges.length > 2 && (
                          <span className="text-[10px] text-zinc-500">+{product.badges.length - 2}</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
              
              {/* Add to Cart & Wishlist - Always Visible, Compact */}
              <div className="mt-2 flex gap-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddToCart(e, product);
                  }}
                  disabled={addingId === product.id}
                  className="flex-1 rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-md hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {addingId === product.id ? (
                    <span className="flex items-center justify-center gap-1.5">
                      <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span className="text-xs">Adding...</span>
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
                  onClick={(e) => handleWishlistToggle(e, product)}
                  className={`rounded-lg border p-2 transition-all hover:scale-110 ${
                    isInWishlist(`hardware-${product.id}`)
                      ? "border-red-600 bg-red-50 text-red-600"
                      : "border-zinc-200 bg-white text-zinc-600 hover:border-red-600 hover:text-red-600"
                  }`}
                  aria-label={isInWishlist(`hardware-${product.id}`) ? "Remove from wishlist" : "Add to wishlist"}
                >
                  {isInWishlist(`hardware-${product.id}`) ? (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ) : (
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA - Compact */}
        <div className="mt-10 text-center">
          <Link
            href="/hardware"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-6 py-2.5 text-sm font-semibold text-zinc-900 transition-all hover:border-zinc-400 hover:bg-zinc-50"
          >
            View All Hardware
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
      
      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
}
