"use client";

import Link from "next/link";
import Image from "next/image";

const hardwareBrands = [
  {
    id: "meta",
    name: "Meta",
    link: "/hardware?brand=meta",
    logoUrl: "https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg",
    productCount: 24,
    startingPrice: "$299",
  },
  {
    id: "pico",
    name: "PICO",
    link: "/hardware?brand=pico",
    logoUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEyIiBoZWlnaHQ9IjQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGNsaXAtcGF0aD0idXJsKCNhKSIgZmlsbD0iIzAwMCI+PHBhdGggZD0iTTE3Ljc1NiA0LjAxN0M4LjkyIDMuNjA4IDEuNDI4IDEwLjQzMSAxLjAxOCAxOS4yNmMtLjQxIDguODI3IDYuNDE4IDE2LjMxNSAxNS4yNTMgMTYuNzI0IDguODM0LjQwOSAxNi4zMjctNi40MTQgMTYuNzM3LTE1LjI0Mi40MS04LjgyNi02LjQyLTE2LjMxMy0xNS4yNTItMTYuNzI0Wm0tLjE5IDQuMDc1YzYuNTgzLjMwNSAxMS42NzEgNS44ODQgMTEuMzY1IDEyLjQ2MmExMS44NjggMTEuODY4IDAgMCAxLTEuMzMzIDQuOTUzbC03LjQ1Ni05LjQ2M2ExMTYuNTg3IDExNi41ODcgMCAwIDAtLjMxOS0uNDA0IDExLjk3IDExLjk3IDAgMCAwLTkuMTU4LTQuMzU5bC0uMDk1LS4wMDFjLS42MjUgMC0xLjI0LjA0OS0xLjgzOC4xNGExMS44OTIgMTEuODkyIDAgMCAxIDguODM1LTMuMzI4Wk0xNi40NiAzMS45MWMtNi41ODMtLjMwNS0xMS42NzEtNS44ODQtMTEuMzY1LTEyLjQ2MS4wNTQtMS4xNTguMjcyLTIuMjY5LjYzLTMuMzEzbC4wNjItLjA0NmE4LjA5NiA4LjA5NiAwIDAgMSAxMS4xNDcgMS41MTZsNS41NSA3LjAzOCAyLjk3NSAzLjc3N2ExMS45MDcgMTEuOTA3IDAgMCAxLTkgMy40OVoiLz48cGF0aCBkPSJNMTIuMTI0IDIwLjk4NGMuMDE3LS4wMjYuMDMzLS4wNTEuMDQ4LS4wNzhsLjAzLS4wNTdjLjAyMS0uMDQuMDQtLjA4LjA1OC0uMTJsLjAxLS4wMjFhMS44NDYgMS44NDYgMCAwIDAtMy4xMjMtMS44OTJsLS4wMi4wMjNhMS42NDUgMS42NDUgMCAwIDAtLjA3Ni4xMDIgMS40NiAxLjQ2IDAgMCAwLS4xNDIuMjM5bC0uMDE1LjAzNGMtLjExNC4yNC0uMTguNTA2LS4xOC43ODhhMS44NDcgMS44NDcgMCAwIDAgMy40MS45ODJaTTY2LjAzNSAxOC4xNjJWMjkuNjFoNC4xODh2LTE5LjJoLTQuMTg4djcuNzUzWk0xMDEuMTQ3IDEwLjE0NmE5Ljg1NiA5Ljg1NiAwIDAgMC05LjIyMyA2LjM3NSA5LjgwNSA5LjgwNSAwIDAgMC0uNjMxIDMuNDcgOS44MzUgOS44MzUgMCAwIDAgMS4xOTEgNC42OTcgOS44NTMgOS44NTMgMCAwIDAgOC42NjIgNS4xNDdjNS40NDIgMCA5Ljg1NC00LjQwNyA5Ljg1NC05Ljg0NSAwLTUuNDM3LTQuNDExLTkuODQ0LTkuODUzLTkuODQ0Wm0wIDE1Ljc1NGE1LjkxIDUuOTEgMCAwIDEtNS45MTMtNS45MDkgNS45MSA1LjkxIDAgMCAxIDUuOTEzLTUuOTA4IDUuOTEgNS45MSAwIDEgMSAwIDExLjgxN1pNNTUuNjQ3IDEwLjQyMmMtLjE1LS4wMS0uOTE1LS4wMTQtMS4wNjctLjAxNEg0NC4xMVYyOS42MWg0LjA2NXYtNC40MzFoNi40MDVjLjE0OCAwIC45MTMtLjAwNSAxLjA2LS4wMTNhNy4zOSA3LjM5IDAgMCAwIDYuOTQ3LTcuMzcyYzAtLjA3LS4wMDMtLjE0LS4wMDUtLjIxYTcuMzkgNy4zOSAwIDAgMC02LjkzNS03LjE2MVptLS4wMDggMTAuNzljLS4xNDUuMDE4LS42NjIuMDI4LS44MTIuMDI4aC02LjY1di02Ljg5M2g2LjY1Yy4xNDcgMCAuNjYzLjAxLjgwNS4wMjdhMy40NDggMy40NDggMCAwIDEgLjAwNyA2LjgzOFpNNzcuNjc0IDIwLjAwNWMuMDA0LTQuODE5IDUuMjEtNy45NjEgMTAuNDItNC41NDNsMi4zMjYtMi45NTFjLTYuODc5LTUuMzctMTYuNzQtMS4wNjctMTYuNzUgNy40ODh2LjAxMmMuMDEgOC41NTUgOS44NzEgMTIuODYgMTYuNzUgNy40ODlsLTIuMzI2LTIuOTUyYy01LjIxIDMuNDE5LTEwLjQxNi4yNzUtMTAuNDItNC41NDNaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSA0KSIgZD0iTTAgMGgxMTB2MzJIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=",
    productCount: 18,
    startingPrice: "$449",
  },
  {
    id: "apple",
    name: "Apple",
    link: "/hardware?brand=apple",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    productCount: 6,
    startingPrice: "$3,499",
  },
];

const isvPartners = [
  {
    id: "virtualspeech",
    name: "VirtualSpeech",
    logoUrl: "https://virtualspeech-com.b-cdn.net/wp-content/uploads/virtualspeech-logo-horizontal.svg",
  },
  {
    id: "gwpro",
    name: "GW Pro",
    logoUrl: "https://optim.tildacdn.com/tild6636-6638-4263-b138-343336306436/-/resize/69x/-/format/webp/logonum01.png.webp",
  },
  {
    id: "shapesxr",
    name: "ShapesXR",
    logoUrl: "https://cdn.prod.website-files.com/615dc84364c5917b852e46b2/658a9d493b3c693fff968a75_ShapesXR_Logo.svg",
  },
  {
    id: "metaverselearning",
    name: "Metaverse Learning",
    logoUrl: "https://metaverselearning.co.uk/wp-content/uploads/2023/07/logo-ml-colour.svg",
  },
  {
    id: "vrelax",
    name: "VRelax",
    logoUrl: "https://vrelax.com/wp-content/uploads/2022/04/VRelax_LOGO-KLEUR.png",
  },
  {
    id: "airvear",
    name: "AirVear",
    logoUrl: "https://airvear.com/wp-content/uploads/2024/02/airvear-logo.png",
  },
  {
    id: "imersifi",
    name: "Imersifi",
    logoUrl: "https://imersifi.com/wp-content/uploads/2022/05/imersifi-logo-web.png",
  },
];

export function BrandShowcase() {
  return (
    <section className="border-b border-zinc-200 bg-white py-10">
      <div className="container-custom">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
            Explore Our Ecosystem
          </h2>
          <p className="mt-2 text-sm text-zinc-600">
            Browse by hardware brand or ISV category
          </p>
        </div>

        {/* Hardware Brands - Compact eBay Style */}
        <div className="mb-8">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Hardware Partners
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {hardwareBrands.map((brand) => (
              <Link
                key={brand.id}
                href={brand.link}
                className="group flex flex-col items-center justify-center rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-red-300 hover:shadow-md"
              >
                <div className="relative mb-3 h-12 w-full">
                  <Image
                    src={brand.logoUrl}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain object-center"
                    sizes="(min-width: 640px) 33vw, 100vw"
                  />
                </div>
                <p className="mb-2 text-base font-bold text-zinc-900 group-hover:text-red-600 transition-colors">
                  {brand.name}
                </p>
                <div className="flex items-center gap-3 text-xs">
                  <div className="text-center">
                    <p className="text-lg font-extrabold text-red-600">{brand.productCount}</p>
                    <p className="text-[10px] text-zinc-500">Products</p>
                  </div>
                  <div className="h-6 w-px bg-zinc-200"></div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-zinc-900">From</p>
                    <p className="text-sm font-extrabold text-emerald-600">{brand.startingPrice}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ISV Partnerships Heading - Compact */}
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
          Our ISV Partnerships
        </h3>
      </div>

      {/* ISV Partnerships - Rotating Ribbon - Full Viewport Width - Compact */}
      <div className="w-full">
        <div className="relative overflow-hidden bg-zinc-800 py-4">
          <div className="flex animate-scroll space-x-16 px-4 lg:px-8">
            {[...isvPartners, ...isvPartners, ...isvPartners, ...isvPartners, ...isvPartners].map((partner, index) => (
              <div key={`${partner.id}-${index}`} className="flex-shrink-0">
                <div className="relative h-12 w-40">
                  <Image
                    src={partner.logoUrl}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain object-center"
                    style={{ filter: 'brightness(0) invert(1)' }}
                    sizes="192px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
