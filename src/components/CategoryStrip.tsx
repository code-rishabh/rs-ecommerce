"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";

// Categories based on Primary Sectors from the provided data
const categories = [
  {
    name: "VR/AR Hardware",
    description: "Meta, PICO, HTC Vive",
    link: "/hardware?category=vr-ar-hardware",
    icon: "🥽",
  },
  {
    name: "VR Accessories",
    description: "Kiwi Design, Syntech",
    link: "/hardware?category=vr-accessories",
    icon: "🎮",
  },
  {
    name: "Computers",
    description: "Dell, HP, Lenovo",
    link: "/hardware?category=computers",
    icon: "💻",
  },
  {
    name: "Audio Solutions",
    description: "Jabra, Yealink",
    link: "/hardware?category=audio",
    icon: "🎧",
  },
  {
    name: "Conferencing",
    description: "Owl-Labs, Kandao",
    link: "/hardware?category=conferencing",
    icon: "📹",
  },
  {
    name: "Peripherals",
    description: "Logitech, Monoprice",
    link: "/hardware?category=peripherals",
    icon: "⌨️",
  },
  {
    name: "Motion Capture",
    description: "Moxi, Buttkicker",
    link: "/hardware?category=motion-capture-haptics",
    icon: "🤲",
  },
  {
    name: "Networking",
    description: "Extreme Networks",
    link: "/hardware?category=networking",
    icon: "🌐",
  },
  {
    name: "ISV Solutions",
    description: "Training & Collaboration",
    link: "/isvs",
    icon: "💼",
  },
  {
    name: "MDM & Services",
    description: "ManageXR",
    link: "/hardware?category=mdm-services",
    icon: "🔐",
  },
  {
    name: "Enterprise Bundles",
    description: "Preconfigured solutions",
    link: "/bundles",
    icon: "📦",
  },
  {
    name: "Mini-PC",
    description: "Simply NUC",
    link: "/hardware?category=mini-pc",
    icon: "🖥️",
  },
];

// Style Variant: "prominent" | "spacious" | "modern" | "classic"
// Change this value to switch between styles
const STYLE_VARIANT: "prominent" | "spacious" | "modern" | "classic" = "prominent";

const styleConfigs = {
  prominent: {
    card: "rounded-xl border border-zinc-200 bg-white px-6 py-5 hover:border-red-400 hover:bg-red-50/50 hover:shadow-lg transition-all duration-300",
    icon: "h-16 w-16 rounded-full border-2 border-zinc-200 bg-gradient-to-br from-white to-zinc-50 text-3xl",
    iconHover: "group-hover:border-red-400 group-hover:from-red-50 group-hover:to-red-100 group-hover:scale-110",
    minWidth: "min-w-[150px]",
    gap: "gap-4",
    titleSize: "text-sm",
    descSize: "text-[10px]",
  },
  spacious: {
    card: "rounded-2xl border-2 border-zinc-200 bg-white px-7 py-6 hover:border-red-400 hover:bg-red-50/40 hover:shadow-md transition-all duration-300",
    icon: "h-20 w-20 rounded-full border-2 border-zinc-200 bg-white text-4xl shadow-sm",
    iconHover: "group-hover:border-red-400 group-hover:bg-red-50 group-hover:shadow-md group-hover:scale-110",
    minWidth: "min-w-[160px]",
    gap: "gap-4",
    titleSize: "text-sm font-bold",
    descSize: "text-[10px]",
  },
  modern: {
    card: "rounded-xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 px-6 py-5 hover:border-red-300 hover:from-red-50 hover:to-red-100/50 hover:shadow-lg transition-all duration-300",
    icon: "h-[72px] w-[72px] rounded-full border-2 border-zinc-300 bg-white text-3xl shadow-sm",
    iconHover: "group-hover:border-red-400 group-hover:bg-red-50 group-hover:shadow-md group-hover:scale-110",
    minWidth: "min-w-[145px]",
    gap: "gap-3.5",
    titleSize: "text-sm font-semibold",
    descSize: "text-[10px]",
  },
  classic: {
    card: "rounded-lg border-2 border-zinc-300 bg-white px-6 py-5 hover:border-red-500 hover:bg-red-50 hover:shadow-md transition-all duration-300",
    icon: "h-16 w-16 rounded-full border-2 border-zinc-300 bg-zinc-50 text-3xl",
    iconHover: "group-hover:border-red-500 group-hover:bg-red-100 group-hover:scale-110",
    minWidth: "min-w-[150px]",
    gap: "gap-4",
    titleSize: "text-sm font-bold",
    descSize: "text-[10px]",
  },
};

export function CategoryStrip() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const currentStyle = styleConfigs[STYLE_VARIANT];

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      window.addEventListener("resize", checkScrollPosition);
      return () => {
        container.removeEventListener("scroll", checkScrollPosition);
        window.removeEventListener("resize", checkScrollPosition);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Increased for larger cards
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "right" ? scrollAmount : -scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="border-b border-zinc-200 bg-white py-12">
      <div className="container-custom">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl">
            Shop by Category
          </h2>
          <p className="mt-2 text-base text-zinc-600">
            Browse our comprehensive catalog organized by product category
          </p>
        </div>
        
        {/* Horizontal Scrollable Category List with Controls */}
        <div className="relative">
          {/* Left Scroll Button */}
          {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/95 backdrop-blur-sm border border-zinc-300 shadow-md p-2.5 text-zinc-700 transition-all hover:bg-white hover:border-red-300 hover:text-red-600 hover:shadow-lg hidden lg:flex items-center justify-center"
              aria-label="Scroll left"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollPosition}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.link}
                className={`group flex ${currentStyle.minWidth} flex-col items-center ${currentStyle.gap} ${currentStyle.card}`}
              >
                {/* Circular Icon Container */}
                <div className={`flex items-center justify-center transition-all duration-300 ${currentStyle.icon} ${currentStyle.iconHover}`}>
                  {category.icon}
                </div>
                
                {/* Category Name */}
                <div className="text-center w-full">
                  <h3 className={`${currentStyle.titleSize} text-zinc-900 transition-colors group-hover:text-red-600 leading-tight`}>
                    {category.name}
                  </h3>
                  <p className={`mt-1 ${currentStyle.descSize} leading-tight text-zinc-500`}>
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Right Scroll Button */}
          {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/95 backdrop-blur-sm border border-zinc-300 shadow-md p-2.5 text-zinc-700 transition-all hover:bg-white hover:border-red-300 hover:text-red-600 hover:shadow-lg hidden lg:flex items-center justify-center"
              aria-label="Scroll right"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
          
          {/* Gradient Fade Indicators */}
          {showLeftArrow && (
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent hidden lg:block"></div>
          )}
          {showRightArrow && (
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent hidden lg:block"></div>
          )}
        </div>
      </div>
    </section>
  );
}
