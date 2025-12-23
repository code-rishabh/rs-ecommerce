const usps = [
  {
    title: "ISV Marketplace for VR",
    description:
      "Pre-validated independent software vendors (ISVs) for training, collaboration, analytics, and more – all ready for Meta & PICO.",
    tag: "ISVs",
  },
  {
    title: "Smart Bundles & Lifecycle Services",
    description:
      "Bundle hardware, ISVs, MDM, provisioning, labeling, and kitting into a single commercial-grade procurement flow.",
    tag: "Bundles",
  },
  {
    title: "Enterprise-grade Compliance",
    description:
      "ID verification, PCI-aligned payments, encrypted ID storage, and audit-ready admin workflows for approvals.",
    tag: "Compliance",
  },
];

export function USPsSection() {
  return (
    <section className="border-b border-zinc-200 bg-white py-16 lg:py-20">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700">
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>TRUSTED BY 500+ ENTERPRISES</span>
          </div>
          <h2 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl">
            Why Enterprises Choose Red Stone
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-zinc-600">
            Red Stone connects enterprise VR hardware with an ecosystem of ISVs,
            MDM platforms, and lifecycle services – all in one commercial storefront.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {usps.map((item, index) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-red-300 hover:shadow-md"
            >
              {/* Decorative Number - Compact */}
              <div className="absolute right-4 top-4 text-4xl font-black text-zinc-100 transition-colors group-hover:text-red-50">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              <div className="relative z-10">
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1 rounded-lg bg-gradient-to-r from-red-600 to-red-700 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-md">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item.tag}
                  </span>
                </div>
                <h3 className="mb-3 text-lg font-extrabold text-zinc-900 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600">
                  {item.description}
                </p>
              </div>
              
              {/* Hover Gradient Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-600 to-orange-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
