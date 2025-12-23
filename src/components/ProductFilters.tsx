"use client";

import { useState } from "react";

type FilterOption = {
  id: string;
  label: string;
  count?: number;
};

const brandFilters: FilterOption[] = [
  { id: "meta", label: "Meta", count: 24 },
  { id: "pico", label: "PICO", count: 18 },
  { id: "apple", label: "Apple", count: 6 },
  { id: "htc-vive", label: "HTC Vive", count: 8 },
  { id: "realwear", label: "RealWear", count: 5 },
  { id: "jabra", label: "Jabra", count: 12 },
  { id: "yealink", label: "Yealink", count: 10 },
  { id: "logitech", label: "Logitech", count: 15 },
  { id: "dell", label: "Dell", count: 20 },
  { id: "hp", label: "HP", count: 18 },
  { id: "lenovo", label: "Lenovo", count: 16 },
  { id: "acer", label: "Acer", count: 12 },
  { id: "asus", label: "Asus", count: 14 },
  { id: "samsung", label: "Samsung", count: 10 },
  { id: "microsoft", label: "Microsoft", count: 8 },
  { id: "kiwi-design", label: "Kiwi Design", count: 25 },
  { id: "syntech", label: "Syntech", count: 15 },
  { id: "bobovr", label: "BoboVR", count: 12 },
  { id: "extreme-networks", label: "Extreme Networks", count: 8 },
  { id: "simply-nuc", label: "Simply NUC", count: 8 },
];

const categoryFilters: FilterOption[] = [
  { id: "vr-ar-hardware", label: "VR/AR Hardware", count: 50 },
  { id: "vr-accessories", label: "VR Accessories", count: 30 },
  { id: "computers", label: "Computers", count: 40 },
  { id: "audio", label: "Audio Solutions", count: 25 },
  { id: "conferencing", label: "Conferencing", count: 15 },
  { id: "peripherals", label: "Peripherals", count: 35 },
  { id: "motion-capture-haptics", label: "Motion Capture & Haptics", count: 12 },
  { id: "networking", label: "Networking", count: 18 },
  { id: "mdm-services", label: "MDM & Services", count: 10 },
  { id: "mini-pc", label: "Mini-PC Solutions", count: 8 },
  { id: "electronics", label: "Electronics", count: 20 },
  { id: "electronic-device-hygiene", label: "Device Hygiene", count: 5 },
];

const priceRanges = [
  { id: "0-500", label: "Under $500" },
  { id: "500-1000", label: "$500 - $1,000" },
  { id: "1000-2000", label: "$1,000 - $2,000" },
  { id: "2000+", label: "$2,000+" },
];

const authorizationFilters: FilterOption[] = [
  { id: "distributor", label: "Authorized Distributor" },
  { id: "reseller", label: "Authorized Reseller" },
];

export function ProductFilters() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("");
  const [selectedAuth, setSelectedAuth] = useState<string>("");

  const toggleFilter = (
    id: string,
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setter((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));
  };

  const clearAllFilters = () => {
    setSelectedBrands([]);
    setSelectedCategories([]);
    setSelectedPriceRange("");
    setSelectedAuth("");
  };

  const hasActiveFilters =
    selectedBrands.length > 0 ||
    selectedCategories.length > 0 ||
    selectedPriceRange !== "" ||
    selectedAuth !== "";

  return (
    <aside className="w-full rounded-lg border border-zinc-200 bg-white p-4 lg:w-64">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-semibold text-zinc-900">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-xs font-medium text-red-600 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500/20"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Brand Filter */}
      <div className="mb-6 border-b border-zinc-200 pb-4">
        <h4 className="mb-3 text-sm font-semibold text-zinc-900">Brand</h4>
        <div className="max-h-64 space-y-2 overflow-y-auto pr-2">
          {brandFilters.map((brand) => (
            <label
              key={brand.id}
              className="flex cursor-pointer items-center justify-between rounded px-2 py-1.5 text-sm text-zinc-700 transition hover:bg-zinc-50"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand.id)}
                  onChange={() => toggleFilter(brand.id, setSelectedBrands)}
                  className="h-4 w-4 rounded border-zinc-300 text-red-600 focus:ring-2 focus:ring-red-500/20"
                />
                <span>{brand.label}</span>
              </div>
              {brand.count && (
                <span className="text-xs text-zinc-400">({brand.count})</span>
              )}
            </label>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-6 border-b border-zinc-200 pb-4">
        <h4 className="mb-3 text-sm font-semibold text-zinc-900">Category</h4>
        <div className="max-h-64 space-y-2 overflow-y-auto pr-2">
          {categoryFilters.map((category) => (
            <label
              key={category.id}
              className="flex cursor-pointer items-center justify-between rounded px-2 py-1.5 text-sm text-zinc-700 transition hover:bg-zinc-50"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => toggleFilter(category.id, setSelectedCategories)}
                  className="h-4 w-4 rounded border-zinc-300 text-red-600 focus:ring-2 focus:ring-red-500/20"
                />
                <span>{category.label}</span>
              </div>
              {category.count && (
                <span className="text-xs text-zinc-400">({category.count})</span>
              )}
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6 border-b border-zinc-200 pb-4">
        <h4 className="mb-3 text-sm font-semibold text-zinc-900">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label
              key={range.id}
              className="flex cursor-pointer items-center rounded px-2 py-1.5 text-sm text-zinc-700 transition hover:bg-zinc-50"
            >
              <input
                type="radio"
                name="priceRange"
                value={range.id}
                checked={selectedPriceRange === range.id}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="h-4 w-4 border-zinc-300 text-red-600 focus:ring-2 focus:ring-red-500/20"
              />
              <span className="ml-2">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Authorization Filter */}
      <div className="mb-4">
        <h4 className="mb-3 text-sm font-semibold text-zinc-900">Authorization</h4>
        <div className="space-y-2">
          {authorizationFilters.map((auth) => (
            <label
              key={auth.id}
              className="flex cursor-pointer items-center rounded px-2 py-1.5 text-sm text-zinc-700 transition hover:bg-zinc-50"
            >
              <input
                type="radio"
                name="authorization"
                value={auth.id}
                checked={selectedAuth === auth.id}
                onChange={(e) => setSelectedAuth(e.target.value)}
                className="h-4 w-4 border-zinc-300 text-red-600 focus:ring-2 focus:ring-red-500/20"
              />
              <span className="ml-2">{auth.label}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}

