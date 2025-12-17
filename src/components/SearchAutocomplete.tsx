"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// Mock search suggestions - in production, this would come from an API
const searchSuggestions = [
  "Meta Quest 3",
  "Meta Quest Pro",
  "PICO 4",
  "PICO Neo 3",
  "VR Training Software",
  "VirtualSpeech",
  "ShapesXR",
  "Enterprise Bundles",
  "MDM Solutions",
  "VR Accessories",
  "Meta Quest Controllers",
  "VR Charging Station",
];

type SearchAutocompleteProps = {
  query: string;
  onSelect: (suggestion: string) => void;
  onClose: () => void;
};

export function SearchAutocomplete({
  query,
  onSelect,
  onClose,
}: SearchAutocompleteProps) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim().length > 0) {
      const filtered = searchSuggestions
        .filter((suggestion) =>
          suggestion.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 8);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (suggestions.length === 0) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="absolute left-0 right-0 top-full z-50 mt-1 rounded-lg border border-zinc-200 bg-white shadow-lg"
    >
      <div className="max-h-64 overflow-y-auto p-2">
        {suggestions.map((suggestion, index) => (
          <Link
            key={index}
            href={`/search?q=${encodeURIComponent(suggestion)}`}
            onClick={() => onSelect(suggestion)}
            className="block rounded px-3 py-2 text-sm text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
          >
            <div className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-zinc-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span>{suggestion}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

