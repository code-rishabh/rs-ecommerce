import { TodayDealsSection } from "../../components/TodayDealsSection";
import { PageHero } from "../../components/PageHero";

export default function DealsPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="Today's Enterprise Deals"
        subtitle="Time-bound, admin-controlled offers for Meta & PICO bundles, designed for procurement teams running pilots or refresh cycles."
        imageUrl="https://m.media-amazon.com/images/I/41K8lbQEogL._AC_UF1000,1000_QL80_.jpg"
        badge="🔥 Limited Time"
      />
      <section className="border-b border-zinc-200 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 py-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="rounded-2xl border-2 border-red-200 bg-white p-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-xl">
                ⏰
              </div>
              <div>
                <h3 className="mb-2 text-base font-bold text-zinc-900">
                  How Enterprise Deals Work
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-zinc-700">
                  Our admin-controlled deals feature countdown timers, promotional tags, and direct links to detailed bundle configurations. All deals are time-bound and designed specifically for enterprise procurement teams.
                </p>
                <p className="text-xs text-zinc-600">
                  Once wired to backend services, deals will automatically update pricing, availability, and expiration times in real-time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TodayDealsSection />
    </div>
  );
}
