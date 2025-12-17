import Image from "next/image";

type Product = {
  id: number;
  name: string;
  category: string;
  brand: "Meta" | "PICO" | "Apple";
  commercialOnly?: boolean;
  authorization: "Authorized Distributor" | "Authorized Reseller";
  price: string;
  badges?: string[];
  imageUrl: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Meta Quest for Business",
    category: "VR Headsets",
    brand: "Meta",
    commercialOnly: true,
    authorization: "Authorized Distributor",
    price: "$995",
    badges: ["Business Warranty", "MDM Ready"],
    imageUrl:
      "https://www.technewsworld.com/wp-content/uploads/sites/3/2023/10/Meta-Quest-3.jpg",
  },
  {
    id: 2,
    name: "PICO Neo 3 Pro",
    category: "VR Headsets",
    brand: "PICO",
    authorization: "Authorized Reseller",
    price: "$899",
    badges: ["ISV Ready"],
    imageUrl:
      "https://m.media-amazon.com/images/I/41K8lbQEogL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 3,
    name: "Meta Quest Controllers – Enterprise Pack",
    category: "Accessories",
    brand: "Meta",
    authorization: "Authorized Distributor",
    price: "$199",
    badges: ["Enterprise Accessory"],
    imageUrl:
      "https://cdn.mos.cms.futurecdn.net/kofNLytfdMVuKPazzJXrNV-1200-80.jpg",
  },
];

export function ProductGrid() {
  return (
    <section id="products" className="border-b border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl">
              Enterprise Hardware Catalog
            </h2>
            <p className="mt-1 text-xs text-zinc-600 sm:text-sm">
              Curated Meta &amp; PICO devices, optimized for commercial
              deployments and ISV compatibility.
            </p>
          </div>
          <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white">
            Commercial-only pricing
          </span>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="flex flex-col justify-between overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50/60 shadow-sm"
            >
              <div className="relative h-40 w-full overflow-hidden border-b border-zinc-200 bg-zinc-900">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 280px, 100vw"
                  className="object-cover opacity-85"
                />
              </div>
              <div className="space-y-2 p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-zinc-900 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                    {product.brand}
                  </span>
                  <span className="rounded-full border border-emerald-500 bg-emerald-50 px-2 py-1 text-[10px] font-medium text-emerald-700">
                    {product.authorization}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-zinc-900 sm:text-base">
                  {product.name}
                </h3>
                <p className="text-xs text-zinc-500">{product.category}</p>
                {product.commercialOnly && (
                  <p className="mt-1 inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-red-700">
                    Commercial version only
                  </p>
                )}
                {product.badges && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {product.badges.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full bg-white px-2 py-0.5 text-[10px] font-medium text-zinc-700 ring-1 ring-zinc-200"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-zinc-500">Starting at</p>
                  <p className="text-base font-semibold text-zinc-900 sm:text-lg">
                    {product.price}
                  </p>
                </div>
                <button className="inline-flex items-center rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-[11px] font-semibold text-zinc-900 hover:border-zinc-400">
                  View configuration
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
