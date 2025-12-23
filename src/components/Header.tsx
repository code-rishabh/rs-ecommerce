"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import { useWishlist } from "../contexts/WishlistContext";
import { SearchAutocomplete } from "./SearchAutocomplete";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/bundles", label: "Bundles" },
  { href: "/hardware", label: "Hardware" },
  { href: "/isvs", label: "ISVs" },
  { href: "/deals", label: "Deals" },
];

export function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showSearchAutocomplete, setShowSearchAutocomplete] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPromoBanner, setShowPromoBanner] = useState(true);
  const lastScrollY = useRef(0);
  const { getTotalItems } = useCart();
  const { items: wishlistItems } = useWishlist();
  const { user, isAuthenticated } = useAuth();
  const cartItemCount = getTotalItems();
  const wishlistCount = wishlistItems.length;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY.current && currentScrollY > 100) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowHeader(false);
      } else if (currentScrollY <= 100) {
        setShowHeader(true);
      }
      
      setIsScrolled(currentScrollY > 10);
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Promotional Top Banner - eBay/Signs.com inspired */}
      {showPromoBanner && (
        <div className="relative bg-gradient-to-r from-red-500 via-red-500 to-orange-500 text-white">
          <div className="mx-auto max-w-7xl px-4 py-1.5">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 text-center">
                <p className="text-xs font-semibold">
                  <span className="mr-1.5">🎉</span>
                  <span>Limited Time: Save up to 25% on enterprise bundles</span>
                  <Link href="/deals" className="ml-1.5 underline underline-offset-1 hover:text-white/90 font-bold">
                    Shop Now →
                  </Link>
                </p>
              </div>
              <button
                onClick={() => setShowPromoBanner(false)}
                className="shrink-0 rounded p-1 hover:bg-white/20 transition"
                aria-label="Close banner"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Header */}
      <div
        className={`border-b border-zinc-200/80 bg-white transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-md"
            : "bg-white"
        }`}
      >
        {/* Main Navigation - Compact eBay Style */}
        <div className="mx-auto max-w-7xl px-3 py-2 lg:px-6">
          <div className="flex items-center justify-between gap-3">
            {/* Logo - Compact */}
            <Link href="/" className="flex items-center gap-2 shrink-0 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-red-500 to-red-600 text-sm font-extrabold text-white shadow-md transition-transform group-hover:scale-105">
                RS
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-extrabold text-zinc-900 leading-tight">Red Stone</div>
                <div className="text-[9px] font-semibold text-zinc-500 uppercase tracking-wide">Enterprise VR</div>
              </div>
            </Link>

            {/* Navigation Links - Compact */}
            <nav className="hidden items-center gap-0.5 lg:flex">
              {navItems.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded px-2.5 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Search Bar - Compact eBay Style */}
            <form onSubmit={handleSearch} className="relative flex flex-1 max-w-md">
              <div className="relative flex w-full items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSearchAutocomplete(true);
                  }}
                  onFocus={() => setShowSearchAutocomplete(true)}
                  placeholder="Search products..."
                  className="w-full rounded-l-lg border border-zinc-300 bg-white px-3 py-1.5 text-xs text-zinc-900 placeholder:text-zinc-400 transition-all focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                />
                <button
                  type="submit"
                  className="rounded-r-lg border border-l-0 border-zinc-300 bg-gradient-to-r from-red-500 to-red-600 px-3 py-1.5 text-white transition-all hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                  aria-label="Search"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              {showSearchAutocomplete && (
                <SearchAutocomplete
                  query={searchQuery}
                  onSelect={(suggestion) => {
                    setSearchQuery(suggestion);
                    setShowSearchAutocomplete(false);
                  }}
                  onClose={() => setShowSearchAutocomplete(false)}
                />
              )}
            </div>
          </form>

            {/* Right Side Actions - Compact Inline */}
            <div className="flex items-center gap-1.5 shrink-0">
              {/* Contact Link - Compact */}
              <Link
                href="/contact"
                className="hidden rounded px-2 py-1 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 sm:inline-block"
              >
                Contact
              </Link>
              
              {/* Wishlist Icon - Compact */}
              <Link
                href="/account/wishlist"
                  className="relative flex items-center justify-center rounded-lg p-1.5 text-zinc-700 transition-all hover:bg-zinc-100 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                aria-label="Wishlist"
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-red-600 text-[10px] font-bold text-white">
                    {wishlistCount > 9 ? "9+" : wishlistCount}
                  </span>
                )}
              </Link>
              
              {/* Shopping Cart Icon - Compact */}
              <Link
                href="/cart"
                className="relative flex items-center justify-center rounded-lg p-1.5 text-zinc-700 transition-all hover:bg-zinc-100 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                aria-label="Shopping cart"
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-red-600 text-[10px] font-bold text-white">
                    {cartItemCount > 9 ? "9+" : cartItemCount}
                  </span>
                )}
              </Link>
              {/* User Account Icon - Compact */}
              <div className="relative">
                {isAuthenticated ? (
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center justify-center rounded-lg p-1.5 text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                    aria-label="User account"
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </button>
              ) : (
                <Link
                  href="/login"
                  className="flex items-center justify-center rounded-lg p-2 text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                  aria-label="Sign in"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </Link>
              )}
              {/* User Menu Dropdown */}
              {showUserMenu && isAuthenticated && (
                <div
                  className="absolute right-0 top-full z-50 mt-1 w-48 rounded-lg border border-zinc-200 bg-white/95 backdrop-blur-md shadow-lg"
                  onMouseLeave={() => setShowUserMenu(false)}
                >
                  <div className="p-2">
                    <div className="border-b border-zinc-200 px-3 py-2">
                      <p className="text-xs font-semibold text-zinc-900">
                        {user?.name}
                      </p>
                      <p className="text-xs text-zinc-500">{user?.email}</p>
                    </div>
                    <Link
                      href="/account"
                      className="block rounded px-3 py-2 text-sm text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                      onClick={() => setShowUserMenu(false)}
                    >
                      My Account
                    </Link>
                    <Link
                      href="/account?tab=orders"
                      className="block rounded px-3 py-2 text-sm text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                      onClick={() => setShowUserMenu(false)}
                    >
                      Order History
                    </Link>
                    <Link
                      href="/account/wishlist"
                      className="block rounded px-3 py-2 text-sm text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                      onClick={() => setShowUserMenu(false)}
                    >
                      Wishlist
                    </Link>
                  </div>
                </div>
              )}
            </div>
              {/* Build Bundle Button - Compact Inline */}
              <Link
                href="/bundles"
                className="rounded-lg bg-gradient-to-r from-red-500 to-red-600 px-3 py-1.5 text-xs font-bold text-white shadow-md transition-all hover:from-red-600 hover:to-red-700 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Build Bundle
              </Link>
            </div>
          </div>
        </div>
        
        {/* Trust Bar - Compact eBay Style */}
        <div className="border-t border-zinc-100 bg-zinc-50/50 py-0.5">
          <div className="mx-auto max-w-7xl px-3 lg:px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-0.5 text-[9px]">
              <div className="flex items-center gap-1 text-zinc-600">
                <svg className="h-3 w-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-medium">Meta Premier Partner</span>
              </div>
              <div className="flex items-center gap-1 text-zinc-600">
                <svg className="h-3 w-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">Free Shipping $50+</span>
              </div>
              <div className="flex items-center gap-1 text-zinc-600">
                <svg className="h-3 w-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-medium">4.8/5 (2,450+)</span>
              </div>
              <div className="flex items-center gap-1 text-zinc-600">
                <svg className="h-3 w-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
