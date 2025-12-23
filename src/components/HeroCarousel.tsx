"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const heroSlides = [
  {
    id: 1,
    title: "Enterprise VR Solutions",
    subtitle: "Meta & PICO Commercial Hardware",
    description: "Deploy at scale with business-grade warranties and MDM compatibility",
    cta: "Shop Hardware",
    ctaLink: "/hardware",
    image: "https://images.pexels.com/photos/123335/pexels-photo-123335.jpeg",
  },
  {
    id: 2,
    title: "ISV Ecosystem",
    subtitle: "Pre-validated Software Solutions",
    description: "Access 50+ enterprise ISVs with quantity-based pricing and volume discounts",
    cta: "Explore ISVs",
    ctaLink: "/isvs",
    image: "https://images.pexels.com/photos/3183187/pexels-photo-3183187.jpeg",
  },
  {
    id: 3,
    title: "Today's Deals",
    subtitle: "Limited-Time Enterprise Offers",
    description: "Save up to 25% on Meta Quest for Business bundles and PICO deployments",
    cta: "View Deals",
    ctaLink: "/deals",
    image: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[400px] overflow-hidden bg-zinc-900 pt-20 sm:h-[440px] sm:pt-22 lg:h-[480px] lg:pt-24">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image - Enhanced Overlay with Gradient */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
          
          {/* Content - Enhanced Typography & Spacing */}
          <div className="relative z-10 container-custom flex h-full items-center pt-8">
            <div className="max-w-3xl space-y-4 sm:space-y-5 animate-slide-up">
              {/* Badge - Etsy style */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2">
                <span className="h-2 w-2 bg-red-500 rounded-full animate-pulse-subtle"></span>
                <span className="text-sm font-semibold uppercase tracking-wider text-white">
                  {slide.subtitle}
                </span>
              </div>
              
              {/* Headline - Dramatic eBay style */}
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              
              {/* Description - Larger, more prominent */}
              <p className="text-lg leading-relaxed text-white/95 sm:text-xl lg:max-w-2xl">
                {slide.description}
              </p>
              {/* CTA - Enhanced with shadow and hover effects */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href={slide.ctaLink}
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 text-base font-bold text-white shadow-xl shadow-red-600/30 transition-all hover:from-red-600 hover:to-red-700 hover:shadow-red-600/50 hover:scale-105"
                >
                  <svg 
                    className="h-6 w-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>{slide.cta}</span>
                  <svg 
                    className="h-5 w-5 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-md px-6 py-3 text-base font-bold text-white transition-all hover:bg-white/20 hover:border-white/50"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements - Signs.com inspired */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none"></div>
        </div>
      ))}
      
      {/* Carousel Indicators - Enhanced */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2.5">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === currentSlide
                ? "w-12 bg-white shadow-lg shadow-white/30"
                : "w-2.5 bg-white/40 hover:bg-white/70 hover:w-8"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Navigation Arrows - eBay style */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 p-3 text-white transition-all hover:bg-white/20 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 p-3 text-white transition-all hover:bg-white/20 hover:scale-110"
        aria-label="Next slide"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
