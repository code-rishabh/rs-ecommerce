"use client";

import Link from "next/link";
import Image from "next/image";

const brands = [
  {
    id: "meta",
    name: "Meta",
    link: "/hardware?brand=meta",
    logoUrl: "https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg",
  },
  {
    id: "pico",
    name: "PICO",
    link: "/hardware?brand=pico",
    logoUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEyIiBoZWlnaHQ9IjQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGNsaXAtcGF0aD0idXJsKCNhKSIgZmlsbD0iIzAwMCI+PHBhdGggZD0iTTE3Ljc1NiA0LjAxN0M4LjkyIDMuNjA4IDEuNDI4IDEwLjQzMSAxLjAxOCAxOS4yNmMtLjQxIDguODI3IDYuNDE4IDE2LjMxNSAxNS4yNTMgMTYuNzI0IDguODM0LjQwOSAxNi4zMjctNi40MTQgMTYuNzM3LTE1LjI0Mi40MS04LjgyNi02LjQyLTE2LjMxMy0xNS4yNTItMTYuNzI0Wm0tLjE5IDQuMDc1YzYuNTgzLjMwNSAxMS42NzEgNS44ODQgMTEuMzY1IDEyLjQ2MmExMS44NjggMTEuODY4IDAgMCAxLTEuMzMzIDQuOTUzbC03LjQ1Ni05LjQ2M2ExMTYuNTg3IDExNi41ODcgMCAwIDAtLjMxOS0uNDA0IDExLjk3IDExLjk3IDAgMCAwLTkuMTU4LTQuMzU5bC0uMDk1LS4wMDFjLS42MjUgMC0xLjI0LjA0OS0xLjgzOC4xNGExMS44OTIgMTEuODkyIDAgMCAxIDguODM1LTMuMzI4Wk0xNi40NiAzMS45MWMtNi41ODMtLjMwNS0xMS42NzEtNS44ODQtMTEuMzY1LTEyLjQ2MS4wNTQtMS4xNTguMjcyLTIuMjY5LjYzLTMuMzEzbC4wNjItLjA0NmE4LjA5NiA4LjA5NiAwIDAgMSAxMS4xNDcgMS41MTZsNS41NSA3LjAzOCAyLjk3NSAzLjc3N2ExMS45MDcgMTEuOTA3IDAgMCAxLTkgMy40OVoiLz48cGF0aCBkPSJNMTIuMTI0IDIwLjk4NGMuMDE3LS4wMjYuMDMzLS4wNTEuMDQ4LS4wNzhsLjAzLS4wNTdjLjAyMS0uMDQuMDQtLjA4LjA1OC0uMTJsLjAxLS4wMjFhMS44NDYgMS44NDYgMCAwIDAtMy4xMjMtMS44OTJsLS4wMi4wMjNhMS42NDUgMS42NDUgMCAwIDAtLjA3Ni4xMDIgMS40NiAxLjQ2IDAgMCAwLS4xNDIuMjM5bC0uMDE1LjAzNGMtLjExNC4yNC0uMTguNTA2LS4xOC43ODhhMS44NDcgMS44NDcgMCAwIDAgMy40MS45ODJaTTY2LjAzNSAxOC4xNjJWMjkuNjFoNC4xODh2LTE5LjJoLTQuMTg4djcuNzUzWk0xMDEuMTQ3IDEwLjE0NmE5Ljg1NiA5Ljg1NiAwIDAgMC05LjIyMyA2LjM3NSA5LjgwNSA5LjgwNSAwIDAgMC0uNjMxIDMuNDcgOS44MzUgOS44MzUgMCAwIDAgMS4xOTEgNC42OTcgOS44NTMgOS44NTMgMCAwIDAgOC42NjIgNS4xNDdjNS40NDIgMCA5Ljg1NC00LjQwNyA5Ljg1NC05Ljg0NSAwLTUuNDM3LTQuNDExLTkuODQ0LTkuODUzLTkuODQ0Wm0wIDE1Ljc1NGE1LjkxIDUuOTEgMCAwIDEtNS45MTMtNS45MDkgNS45MSA1LjkxIDAgMCAxIDUuOTEzLTUuOTA4IDUuOTEgNS45MSAwIDEgMSAwIDExLjgxN1pNNTUuNjQ3IDEwLjQyMmMtLjE1LS4wMS0uOTE1LS4wMTQtMS4wNjctLjAxNEg0NC4xMVYyOS42MWg0LjA2NXYtNC40MzFoNi40MDVjLjE0OCAwIC45MTMtLjAwNSAxLjA2LS4wMTNhNy4zOSA3LjM5IDAgMCAwIDYuOTQ3LTcuMzcyYzAtLjA3LS4wMDMtLjE0LS4wMDUtLjIxYTcuMzkgNy4zOSAwIDAgMC02LjkzNS03LjE2MVptLS4wMDggMTAuNzljLS4xNDUuMDE4LS42NjIuMDI4LS44MTIuMDI4aC02LjY1di02Ljg5M2g2LjY1Yy4xNDcgMCAuNjYzLjAxLjgwNS4wMjdhMy40NDggMy40NDggMCAwIDEgLjAwNyA2LjgzOFpNNzcuNjc0IDIwLjAwNWMuMDA0LTQuODE5IDUuMjEtNy45NjEgMTAuNDItNC41NDNsMi4zMjYtMi45NTFjLTYuODc5LTUuMzctMTYuNzQtMS4wNjctMTYuNzUgNy40ODh2LjAxMmMuMDEgOC41NTUgOS44NzEgMTIuODYgMTYuNzUgNy40ODlsLTIuMzI2LTIuOTUyYy01LjIxIDMuNDE5LTEwLjQxNi4yNzUtMTAuNDItNC41NDNaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSA0KSIgZD0iTTAgMGgxMTB2MzJIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=",
  },
  {
    id: "apple",
    name: "Apple",
    link: "/hardware?brand=apple",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    id: "mdm",
    name: "MDM Partners",
    link: "/hardware?category=mdm",
  },
  {
    id: "isv",
    name: "ISV Ecosystem",
    link: "/isvs",
  },
];

export function BrandStrip() {
  return (
    <section className="border-b border-zinc-200 bg-white py-6">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6">
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">
            Trusted Partner For:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {brands.map((brand) => (
              <Link
                key={brand.id}
                href={brand.link}
                className="flex items-center transition hover:opacity-80"
              >
                {brand.logoUrl ? (
                  <div className="relative h-6 w-auto">
                    <Image
                      src={brand.logoUrl}
                      alt={`${brand.name} logo`}
                      fill
                      className="object-contain object-center"
                      sizes="120px"
                    />
                  </div>
                ) : (
                  <span className="text-sm font-medium text-zinc-700 transition hover:text-red-600">
                    {brand.name}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
