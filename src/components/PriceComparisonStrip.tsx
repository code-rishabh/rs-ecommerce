export function PriceComparisonStrip() {
  const comparisons = [
    {
      item: "Meta Quest 3 (128GB)",
      competitor: "Best Buy",
      competitorPrice: "$499",
      ourPrice: "$459",
      savings: "$40",
    },
    {
      item: "PICO 4 Enterprise",
      competitor: "Amazon Business",
      competitorPrice: "$1,399",
      ourPrice: "$1,299",
      savings: "$100",
    },
    {
      item: "Meta Quest Pro",
      competitor: "Meta.com",
      competitorPrice: "$1,499",
      ourPrice: "$1,399",
      savings: "$100",
    },
  ];

  return (
    <section className="border-b border-zinc-200 bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-50 py-3">
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
          <div className="flex items-center gap-1.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-emerald-900">Price Match</p>
              <p className="text-[10px] text-emerald-700">Beat any price</p>
            </div>
          </div>

          {comparisons.map((comp, index) => (
            <div key={index} className="flex items-center gap-2 text-xs">
              <div className="text-right">
                <p className="font-semibold text-zinc-700">{comp.item}</p>
                <p className="text-[10px] text-zinc-500">vs {comp.competitor}</p>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-zinc-400 line-through">{comp.competitorPrice}</span>
                <svg className="h-3 w-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span className="font-bold text-emerald-700">{comp.ourPrice}</span>
                <span className="rounded-full bg-emerald-600 px-1.5 py-0.5 text-[10px] font-bold text-white">Save {comp.savings}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

