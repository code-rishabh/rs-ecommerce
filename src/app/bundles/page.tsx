import { BundleBuilderPreview } from "../../components/BundleBuilderPreview";
import { PageHero } from "../../components/PageHero";

export default function BundlesPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="Enterprise VR Bundles"
        subtitle="Configure Meta & PICO hardware with ISVs, MDM, provisioning, labeling, and kitting services. Build your complete enterprise VR solution in one place."
        imageUrl="https://lf16-statics.picovr.com/obj/pico-fe-sg/pico/pico_website/image/connect_1.88626afd.jpg"
        badge="Bundle Builder"
      />
      <section className="border-b border-zinc-200 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 py-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="rounded-2xl border-2 border-amber-200 bg-white p-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xl">
                💡
              </div>
              <div>
                <h3 className="mb-2 text-base font-bold text-zinc-900">
                  Commercial Pricing Differentiator
                </h3>
                <p className="text-sm leading-relaxed text-zinc-700">
                  Red Stone commercial pricing includes business-grade warranties, MDM compatibility, ISV readiness, provisioning, labeling, and lifecycle support that are not part of consumer marketplaces. This ensures your VR deployment is enterprise-ready from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BundleBuilderPreview />
    </div>
  );
}
