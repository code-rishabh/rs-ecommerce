const hardwareBrands = ["Meta", "PICO", "Apple*"];
const isvBrands = ["Training ISVs", "Collaboration ISVs", "Analytics ISVs"];

export function BrandExplorer() {
  return (
    <section className="border-b border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-sm font-semibold tracking-tight text-zinc-900 sm:text-base">
              Browse by brand
            </h2>
            <p className="mt-1 text-xs text-zinc-600 sm:text-sm">
              Jump straight to hardware and ISVs from your preferred vendors.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Hardware brands
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {hardwareBrands.map((brand) => (
                <a
                  key={brand}
                  href={`/hardware?brand=${encodeURIComponent(brand)}`}
                  className="inline-flex items-center rounded-full border border-zinc-300 bg-zinc-50 px-4 py-2 text-xs font-semibold text-zinc-800 transition hover:border-red-500 hover:bg-red-50"
                >
                  {brand}
                </a>
              ))}
            </div>
            <p className="mt-3 text-[11px] text-zinc-500">
              Brand filters can be expanded as additional OEM partners are added
              to the catalog.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              ISV categories
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {isvBrands.map((brand) => (
                <a
                  key={brand}
                  href={`/isvs?category=${encodeURIComponent(brand)}`}
                  className="inline-flex items-center rounded-full border border-zinc-300 bg-zinc-50 px-4 py-2 text-xs font-semibold text-zinc-800 transition hover:border-red-500 hover:bg-red-50"
                >
                  {brand}
                </a>
              ))}
            </div>
            <p className="mt-3 text-[11px] text-zinc-500">
              This makes it easy for buyers to discover software by outcome:
              training, collaboration, analytics, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


