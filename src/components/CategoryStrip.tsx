import Link from "next/link";

const categories = [
  {
    name: "VR Headsets",
    description: "Meta & PICO devices for commercial deployments",
    link: "/hardware",
  },
  {
    name: "Enterprise Bundles",
    description: "Preconfigured hardware, ISVs, and services",
    link: "/bundles",
  },
  {
    name: "Services & MDM",
    description: "Provisioning, labeling, kitting, and MDM platforms",
    link: "/hardware?category=mdm",
  },
];

export function CategoryStrip() {
  return (
    <section className="border-b border-zinc-200 bg-gradient-to-br from-zinc-50 via-white to-zinc-50 py-8">
      <div className="container-custom">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl">
            Shop by Category
          </h2>
          <p className="mt-2 text-base text-zinc-600">
            Jump directly into the most relevant catalog or bundle view
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.link}
              className="group block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-red-300 hover:shadow-md"
            >
              <h3 className="mb-2 text-lg font-bold text-zinc-900 transition-colors group-hover:text-red-600">
                {category.name}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-zinc-600">
                {category.description}
              </p>
              <div className="flex items-center gap-1.5 text-sm font-bold text-red-600">
                <span>Explore</span>
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
