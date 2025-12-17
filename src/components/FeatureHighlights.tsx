const highlights = [
  {
    title: "Procure at scale",
    description:
      "Bundle hardware, ISVs, and services into a single commercial-grade order flow.",
  },
  {
    title: "Ready for compliance",
    description:
      "ID verification, audit logs, and PCI-aligned payment gateways by design.",
  },
  {
    title: "Global deployments",
    description:
      "ZIP-based delivery checks, shipping rules, and logistics integrations.",
  },
];

export function FeatureHighlights() {
  return (
    <section className="border-b border-zinc-200 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-sm font-semibold tracking-tight text-zinc-50 sm:text-base">
              Why enterprises choose Red Stone
            </h2>
            <p className="mt-1 text-xs text-zinc-400 sm:text-sm">
              Enterprise-ready ecommerce for VR hardware, software, and services.
            </p>
          </div>
          <span className="hidden rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-[11px] font-medium text-zinc-200 sm:inline-flex">
            Meta Premier Partner • Authorized Distributor
          </span>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 p-4 text-xs text-zinc-300 shadow-sm sm:text-sm"
            >
              <h2 className="text-sm font-semibold text-zinc-50 sm:text-base">
                {item.title}
              </h2>
              <p className="mt-2">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


