import Link from "next/link";

const banners = [
  {
    id: 1,
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    title: "Free Shipping",
    subtitle: "On orders over $50",
    description: "Fast, insured delivery to your business location",
    link: "/hardware",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    id: 2,
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Volume Discounts",
    subtitle: "Save up to 30%",
    description: "Custom pricing for 50+ unit deployments",
    link: "/bundles",
    gradient: "from-emerald-500 to-green-500",
    bgGradient: "from-emerald-50 to-green-50",
  },
  {
    id: 3,
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "MDM Ready",
    subtitle: "Enterprise Management",
    description: "Pre-configured for Microsoft Intune & VMware",
    link: "/hardware",
    gradient: "from-purple-500 to-indigo-500",
    bgGradient: "from-purple-50 to-indigo-50",
  },
];

export function PromotionalBanners() {
  return (
    <section className="border-b border-zinc-200 bg-white py-12">
      <div className="container-custom">
        <div className="grid gap-4 md:grid-cols-3">
          {banners.map((banner) => (
            <Link
              key={banner.id}
              href={banner.link}
              className="group block relative overflow-hidden rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-md"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${banner.bgGradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}></div>
              
              {/* Content - Compact */}
              <div className="relative z-10">
                {/* Icon with Gradient - Smaller */}
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${banner.gradient} text-white shadow-md transition-transform duration-300 group-hover:scale-105`}>
                  {banner.icon}
                </div>
                
                <div className="mb-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                  {banner.subtitle}
                </div>
                <h3 className="mb-2 text-lg font-extrabold text-zinc-900">
                  {banner.title}
                </h3>
                <p className="mb-4 text-xs leading-relaxed text-zinc-600">
                  {banner.description}
                </p>
                
                {/* CTA with Arrow - Compact */}
                <div className="flex items-center gap-1.5 text-sm font-bold text-red-600">
                  <span>Learn more</span>
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
