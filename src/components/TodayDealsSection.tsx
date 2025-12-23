"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../contexts/CartContext";
import { useState } from "react";

const deals = [
  {
    id: 1,
    title: "Meta Quest for Business – Starter Fleet (10 units)",
    description:
      "Ideal for pilot deployments. Includes business-grade warranty and basic onboarding support.",
    discountLabel: "Save 18%",
    endsIn: "Ends in 02:14:36",
    originalPrice: "$12,200",
    dealPrice: "$9,980",
    image: "https://www.technewsworld.com/wp-content/uploads/sites/3/2023/10/Meta-Quest-3.jpg",
  },
  {
    id: 2,
    title: "PICO Neo 3 Pro – Training & Simulation Bundle",
    description:
      "Includes device management, ISV-ready configuration, and optional kitting services.",
    discountLabel: "Limited-time offer",
    endsIn: "Ends in 11:52:08",
    originalPrice: "$21,600",
    dealPrice: "$17,900",
    image: "https://m.media-amazon.com/images/I/41K8lbQEogL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 3,
    title: "Enterprise Bundle – 50 Units",
    description:
      "Complete deployment package with MDM, ISVs, provisioning, and labeling services included.",
    discountLabel: "Save 25%",
    endsIn: "Ends in 05:23:15",
    originalPrice: "$74,750",
    dealPrice: "$56,100",
    image: "https://lf16-statics.picovr.com/obj/pico-fe-sg/pico/pico_website/image/connect_1.88626afd.jpg",
  },
  {
    id: 4,
    title: "Meta Quest Pro – Enterprise Pack (25 units)",
    description:
      "Premium VR solution with advanced tracking, eye tracking, and enterprise-grade support.",
    discountLabel: "Save 20%",
    endsIn: "Ends in 08:45:22",
    originalPrice: "$37,475",
    dealPrice: "$29,980",
    image: "https://www.technewsworld.com/wp-content/uploads/sites/3/2023/10/Meta-Quest-3.jpg",
  },
];

export function TodayDealsSection() {
  const { addToCart } = useCart();
  const [addingId, setAddingId] = useState<number | null>(null);

  const handleAddToCart = (
    e: React.MouseEvent,
    deal: typeof deals[0]
  ) => {
    e.preventDefault();
    e.stopPropagation();
    
    setAddingId(deal.id);
    
    // Parse deal price string to number
    const priceNum = parseFloat(
      deal.dealPrice.replace("$", "").replace(",", "")
    );
    
    addToCart({
      id: `deal-${deal.id}`,
      name: deal.title,
      type: "deal",
      price: priceNum,
      imageUrl: deal.image,
      metadata: {
        originalPrice: parseFloat(
          deal.originalPrice.replace("$", "").replace(",", "")
        ),
        discountLabel: deal.discountLabel,
      },
    });

    setTimeout(() => setAddingId(null), 500);
  };

  return (
    <section id="deals" className="relative overflow-hidden border-b border-zinc-200 gradient-mesh-light py-16 lg:py-20">
      {/* Decorative Elements - Softer Red Shades */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-red-400/4 blur-3xl"></div>
      <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-red-300/4 blur-3xl"></div>
      
      <div className="relative z-10 container-custom">
        {/* Header with View All Button */}
        <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-end">
          <div className="text-center sm:text-left">
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-red-500 to-red-600 px-3 py-1 text-xs font-bold text-white shadow-md">
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
              </span>
              <span>LIMITED TIME</span>
            </div>
            
            <h2 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl">
              🔥 Today's Hot Deals
            </h2>
            <p className="mt-2 text-base text-zinc-600">
              Exclusive enterprise bundles—save up to 25% while supplies last
            </p>
          </div>
          <Link
            href="/deals"
            className="group inline-flex items-center gap-2 rounded-lg border-2 border-red-500 bg-white px-6 py-3 text-sm font-bold text-red-600 transition-all hover:bg-red-500 hover:text-white hover:shadow-lg hover:scale-105"
          >
            <span>View All Deals</span>
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
        
        {/* Compact Deal Cards Grid - 4 Cards Per Row, Smaller Size */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {deals.slice(0, 4).map((deal) => (
            <div key={deal.id} className="group flex flex-col">
              <Link
                href={`/deals#deal-${deal.id}`}
                className="flex flex-1 flex-col"
              >
                <div className="flex flex-1 flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:border-red-300 hover:shadow-md">
                  {/* Product Image - Compact, Smaller */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-50">
                    <Image
                      src={deal.image}
                      alt={deal.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    
                    {/* Urgency Timer Badge - Compact */}
                    <div className="absolute left-2 top-2 z-10 rounded-md bg-zinc-900/90 backdrop-blur-sm px-1.5 py-0.5 text-[9px] font-bold text-white shadow-sm">
                      <div className="flex items-center gap-0.5">
                        <svg className="h-2.5 w-2.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-[9px]">{deal.endsIn}</span>
                      </div>
                    </div>
                    
                    {/* Discount Badge - Compact */}
                    <div className="absolute right-2 top-2 z-10 rounded-md bg-gradient-to-r from-emerald-500 to-emerald-600 px-1.5 py-0.5 text-[9px] font-bold text-white shadow-sm">
                      {deal.discountLabel}
                    </div>

                    {/* Add to Cart Button - Slides up from bottom on hover */}
                    <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-full bg-gradient-to-t from-black/90 via-black/80 to-transparent p-3 transition-all duration-300 ease-out group-hover:translate-y-0">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleAddToCart(e, deal);
                        }}
                        disabled={addingId === deal.id}
                        className="w-full rounded-lg bg-gradient-to-r from-red-500 to-red-600 px-3 py-2.5 text-xs font-bold text-white shadow-lg transition-all hover:from-red-600 hover:to-red-700 hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {addingId === deal.id ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg
                              className="h-4 w-4 animate-spin"
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
                            Adding...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Add to Cart
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                  
                  {/* Product Info - Compact & Smaller */}
                  <div className="flex flex-1 flex-col p-3">
                    <h3 className="mb-1.5 text-sm font-bold text-zinc-900 line-clamp-2 min-h-[2.25rem] group-hover:text-red-600 transition-colors">
                      {deal.title}
                    </h3>
                    <p className="mb-2 text-[11px] leading-relaxed text-zinc-600 line-clamp-2">
                      {deal.description}
                    </p>
                    
                    {/* Price - Compact */}
                    <div className="mt-auto rounded-lg bg-gradient-to-r from-emerald-50 to-green-50 p-2.5">
                      <div className="flex items-baseline justify-between gap-2">
                        <div>
                          <p className="text-[9px] font-semibold uppercase tracking-wide text-zinc-500 mb-0.5">Deal</p>
                          <p className="text-lg font-extrabold text-emerald-600">
                            {deal.dealPrice}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-[9px] font-semibold uppercase tracking-wide text-zinc-500 mb-0.5">Was</p>
                          <p className="text-xs font-bold text-zinc-400 line-through">
                            {deal.originalPrice}
                          </p>
                        </div>
                      </div>
                      
                      {/* Savings - Compact */}
                      <div className="mt-1.5 pt-1.5 border-t border-emerald-200 flex items-center justify-between">
                        <span className="text-[9px] font-semibold text-zinc-600">Save:</span>
                        <span className="text-xs font-extrabold text-emerald-700">
                          ${(parseFloat(deal.originalPrice.replace('$', '').replace(',', '')) - parseFloat(deal.dealPrice.replace('$', '').replace(',', ''))).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
