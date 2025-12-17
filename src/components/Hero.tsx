import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-zinc-200 bg-gradient-to-b from-zinc-50 via-white to-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.12),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(24,24,27,0.08),_transparent_55%)]" />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.2fr)] md:items-center">
          <div className="relative space-y-6">
            <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-red-700 ring-1 ring-red-100">
              Enterprise VR Commerce Platform
            </span>
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
              Commercial-grade{" "}
              <span className="text-red-600">Meta &amp; PICO</span> VR solutions
              delivered at scale.
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
              Red Stone USA Inc provides end-to-end enterprise VR procurement —
              hardware, ISVs, MDM, provisioning, labeling, and lifecycle
              services — with compliance-first workflows and commercial
              warranties.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#bundles"
                className="inline-flex items-center rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700"
              >
                Shop Enterprise Bundles
              </a>
              <a
                href="#isvs"
                className="inline-flex items-center rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-800 shadow-sm transition hover:border-zinc-400"
              >
                Explore ISV Ecosystem
              </a>
            </div>
            <dl className="grid gap-4 text-xs text-zinc-600 sm:grid-cols-3 sm:text-sm">
              <div>
                <dt className="font-medium text-zinc-800">
                  Meta Premier Partner
                </dt>
                <dd>Authorized commercial distributor for VR deployments.</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-800">
                  Commercial-grade pricing
                </dt>
                <dd>
                  Enterprise warranty, MDM compatibility, and ISV readiness.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-800">
                  End-to-end lifecycle
                </dt>
                <dd>Provisioning, labeling, kitting, and managed services.</dd>
              </div>
            </dl>
          </div>

            <div className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                  Rapid Bundle Estimator
                </p>
                <p className="text-sm font-semibold text-zinc-900">
                  Build a deployment-ready VR fleet in minutes.
                </p>
              </div>
              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                Live Preview
              </span>
            </div>
            <div className="space-y-3 text-xs text-zinc-600">
              <div className="flex items-center justify-between rounded-lg border border-dashed border-zinc-200 bg-zinc-50 px-3 py-2.5">
                <div>
                  <p className="font-medium text-zinc-800">
                    50 × Meta Quest for Business
                  </p>
                  <p>Includes commercial warranty &amp; MDM readiness.</p>
                </div>
                <p className="text-right text-sm font-semibold text-zinc-900">
                  $49,500
                </p>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-dashed border-zinc-200 bg-zinc-50 px-3 py-2.5">
                <div>
                  <p className="font-medium text-zinc-800">ISVs &amp; MDM</p>
                  <p>3 enterprise ISVs, 1 MDM platform, provisioning enabled.</p>
                </div>
                <p className="text-right text-sm font-semibold text-zinc-900">
                  $18,200
                </p>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-dashed border-zinc-200 bg-zinc-50 px-3 py-2.5">
                <div>
                  <p className="font-medium text-zinc-800">
                    Services &amp; Logistics
                  </p>
                  <p>Labeling, kitting, and insured shipping included.</p>
                </div>
                <p className="text-right text-sm font-semibold text-zinc-900">
                  $6,750
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-zinc-200 pt-3">
              <p className="text-xs text-zinc-500">
                All prices are indicative and can be customized with sales.
              </p>
              <button className="inline-flex items-center rounded-full bg-zinc-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-zinc-800">
                Request Enterprise Quote
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative h-80 w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950">
              <Image
                src="https://www.technewsworld.com/wp-content/uploads/sites/3/2023/10/Meta-Quest-3.jpg"
                alt="Enterprise VR deployment"
                fill
                priority
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover opacity-80"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-xs text-zinc-200">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-300">
                  Production-ready design
                </p>
                <p className="mt-1 max-w-xs text-sm">
                  This space will feature final creative assets highlighting
                  Meta &amp; PICO enterprise deployments once available.
                </p>
                <p className="mt-2 text-[11px] text-zinc-400">
                  Using high-fidelity placeholders ensures a smooth handoff when
                  marketing imagery is finalized.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
