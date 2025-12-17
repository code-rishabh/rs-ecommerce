"use client";

import { useSearchParams } from "next/navigation";
import { EnhancedProductGrid } from "../../components/EnhancedProductGrid";
import { ProductFilters } from "../../components/ProductFilters";
import { PageHero } from "../../components/PageHero";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  return (
    <div className="bg-white">
      <PageHero
        title={query ? `Search Results for "${query}"` : "Search Products"}
        subtitle={query ? "Find the perfect enterprise VR solution for your needs" : "Search our catalog of enterprise hardware, ISVs, and bundles"}
        badge="Search"
      />

      <section className="border-b border-zinc-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Filters Sidebar - Etsy Style */}
            <div className="lg:w-64">
              <ProductFilters />
            </div>

            {/* Search Results */}
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-zinc-900">
                    {query ? `Results for "${query}"` : "All Products"}
                  </h2>
                  <p className="mt-1 text-sm text-zinc-600">
                    Showing 24 products
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-sm text-zinc-600">Sort by:</label>
                  <select className="rounded border border-zinc-300 bg-white px-3 py-1.5 text-sm text-zinc-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20">
                    <option>Relevance</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest First</option>
                    <option>Highest Rated</option>
                  </select>
                </div>
              </div>

              {/* Product Grid */}
              <EnhancedProductGrid />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

