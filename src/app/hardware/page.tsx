import { EnhancedProductGrid } from "../../components/EnhancedProductGrid";
import { PageHero } from "../../components/PageHero";
import { ProductFilters } from "../../components/ProductFilters";

export default function HardwarePage() {
  return (
    <div className="bg-white">
      <PageHero
        title="Enterprise Hardware Catalog"
        subtitle="Centralized product master for Meta, PICO, and accessories with commercial vs consumer flags, authorization mapping, and enterprise-ready specifications."
        imageUrl="https://www.technewsworld.com/wp-content/uploads/sites/3/2023/10/Meta-Quest-3.jpg"
        badge="Hardware Partners"
      />
      
      <section className="border-b border-zinc-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 rounded-lg border border-zinc-200 bg-white p-6 md:grid-cols-3">
            <div className="text-center md:text-left">
              <div className="mb-2 text-2xl">🏆</div>
              <h3 className="mb-2 text-sm font-semibold text-zinc-900">Authorization Badges</h3>
              <p className="text-xs text-zinc-600">
                Meta Premier Partner, Authorized Distributor, Authorized Reseller certifications displayed on every product.
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="mb-2 text-2xl">⚙️</div>
              <h3 className="mb-2 text-sm font-semibold text-zinc-900">Commercial Attributes</h3>
              <p className="text-xs text-zinc-600">
                Business warranty, MDM compatibility, ISV readiness, stock availability, and enterprise pricing included.
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="mb-2 text-2xl">🔮</div>
              <h3 className="mb-2 text-sm font-semibold text-zinc-900">Future Data Integration</h3>
              <p className="text-xs text-zinc-600">
                Warranty details, stock availability, and bundle eligibility will be dynamically loaded from backend APIs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products with Filters - Etsy Style Layout */}
      <section className="border-b border-zinc-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Filters Sidebar */}
            <div className="lg:w-64">
              <ProductFilters />
            </div>

            {/* Product Grid */}
            <div className="flex-1">
              <EnhancedProductGrid />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
