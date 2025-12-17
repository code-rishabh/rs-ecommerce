import { PageHero } from "../../components/PageHero";

export default function PoliciesPage() {
  const sections = [
    {
      title: "Return Policy",
      icon: "↩️",
      description: "Our return policy covers enterprise hardware within 30 days of delivery. Items must be unopened and in original packaging. Custom bundles may have different return terms.",
      color: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
    },
    {
      title: "Refund Policy",
      icon: "💰",
      description: "Refunds are processed within 5-10 business days after return verification. Enterprise orders may require approval workflows. Contact sales for expedited processing.",
      color: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200",
    },
    {
      title: "Terms of Service",
      icon: "📜",
      description: "By using Red Stone's platform, you agree to our terms of service. Enterprise customers are subject to Master Service Agreements (MSAs) with custom terms.",
      color: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
    },
    {
      title: "Shipping Policy",
      icon: "🚚",
      description: "Free shipping on orders over $50. Standard delivery: 3-5 business days. Express options available. International shipping subject to customs and duties.",
      color: "from-orange-50 to-amber-50",
      borderColor: "border-orange-200",
    },
    {
      title: "Order Cancellation Policy",
      icon: "❌",
      description: "Orders can be cancelled within 24 hours of placement without penalty. After 24 hours, cancellation may incur restocking fees. Custom bundles require sales approval.",
      color: "from-red-50 to-rose-50",
      borderColor: "border-red-200",
    },
    {
      title: "Terms & Conditions",
      icon: "⚖️",
      description: "Comprehensive terms covering payment, delivery, warranties, liability, and dispute resolution. Enterprise customers should review MSA documents for complete terms.",
      color: "from-zinc-50 to-zinc-100",
      borderColor: "border-zinc-200",
    },
  ];

  return (
    <div className="bg-white">
      <PageHero
        title="Policies & Legal"
        subtitle="Centralized access to all legal documents governing Red Stone USA Inc's enterprise ecommerce platform. Review our policies to understand your rights and obligations."
        badge="Legal Information"
      />

      <section className="border-b border-zinc-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-8 rounded-2xl border-2 border-zinc-200 bg-gradient-to-br from-zinc-50 to-white p-6">
            <p className="text-sm leading-relaxed text-zinc-700">
              The following policies are placeholders for design purposes. Final text will be sourced from your legal and compliance teams and may include jurisdiction-specific clauses, return windows, shipping rules, and enterprise-specific terms.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <article
                key={section.title}
                className={`group relative overflow-hidden rounded-2xl border-2 ${section.borderColor} bg-gradient-to-br ${section.color} p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="mb-4 text-4xl">{section.icon}</div>
                <h2 className="mb-3 text-lg font-bold text-zinc-900">
                  {section.title}
                </h2>
                <p className="text-sm leading-relaxed text-zinc-700">
                  {section.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-red-600">
                  <span>Read Full Policy</span>
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border-2 border-zinc-200 bg-gradient-to-br from-zinc-50 to-white p-8">
            <h3 className="mb-4 text-xl font-bold text-zinc-900">
              Questions About Our Policies?
            </h3>
            <p className="mb-4 text-sm text-zinc-700">
              For enterprise customers, custom terms may apply. Contact our legal team or your account representative for clarification.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-red-700 hover:scale-105"
              >
                Contact Legal Team
              </a>
              <a
                href="/contact"
                className="rounded-full border-2 border-zinc-300 bg-white px-6 py-3 text-sm font-bold text-zinc-900 transition hover:border-red-500 hover:bg-red-50"
              >
                Open Support Ticket
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
