import { PageHero } from "../../components/PageHero";
import Link from "next/link";

export default function SecurityPage() {
  const securityFeatures = [
    {
      title: "PCI-DSS Alignment",
      icon: "🔐",
      description: "Payment flows are implemented with PCI-DSS-aligned providers, ensuring that cardholder data never touches your core application layer and that tokenization is enforced.",
      color: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      details: [
        "Tokenized payment processing",
        "No card data storage on servers",
        "PCI-DSS Level 1 compliant",
        "Regular security audits",
      ],
    },
    {
      title: "Encrypted ID Storage",
      icon: "🛡️",
      description: "Uploaded identity documents for credit card verification are encrypted at rest, access-controlled, and retained only for defined compliance windows.",
      color: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200",
      details: [
        "AES-256 encryption",
        "Role-based access control",
        "Automated retention policies",
        "Secure document deletion",
      ],
    },
    {
      title: "Admin Access & Audit Logs",
      icon: "📋",
      description: "Every approval, rejection, and payment decision is logged with timestamps, admin identity, and relevant metadata to support audits and investigations.",
      color: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      details: [
        "Complete audit trail",
        "Real-time monitoring",
        "Compliance reporting",
        "Forensic analysis ready",
      ],
    },
  ];

  const complianceBadges = [
    { name: "PCI-DSS", icon: "💳" },
    { name: "SOC 2", icon: "🏆" },
    { name: "GDPR", icon: "🌍" },
    { name: "HIPAA", icon: "🏥" },
  ];

  return (
    <div className="bg-white">
      <PageHero
        title="Security & Compliance"
        subtitle="Design for PCI-DSS compliance, encrypted ID storage, access controls, and full audit trails across checkout and payment workflows. Your data security is our priority."
        badge="🔒 Enterprise Security"
      />

      <section className="border-b border-zinc-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Compliance Badges */}
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-2xl font-bold text-zinc-900">
              Compliance Certifications
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {complianceBadges.map((badge) => (
                <div
                  key={badge.name}
                  className="flex items-center gap-3 rounded-xl border-2 border-zinc-200 bg-white px-6 py-4 shadow-md"
                >
                  <span className="text-3xl">{badge.icon}</span>
                  <span className="text-base font-bold text-zinc-900">{badge.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Security Features */}
          <div className="grid gap-8 md:grid-cols-3">
            {securityFeatures.map((feature) => (
              <article
                key={feature.title}
                className={`group relative overflow-hidden rounded-2xl border-2 ${feature.borderColor} bg-gradient-to-br ${feature.color} p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="mb-4 text-5xl">{feature.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">
                  {feature.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-zinc-700">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-zinc-600">
                      <span className="mt-1 text-emerald-600">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* Additional Security Info */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-zinc-200 bg-gradient-to-br from-zinc-50 to-white p-8">
              <div className="mb-4 text-4xl">🔍</div>
              <h3 className="mb-3 text-lg font-bold text-zinc-900">
                Security Monitoring
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-zinc-700">
                Our platform includes 24/7 security monitoring, intrusion detection, and automated threat response systems to protect your data and transactions.
              </p>
              <ul className="space-y-2 text-xs text-zinc-600">
                <li>• Real-time threat detection</li>
                <li>• Automated incident response</li>
                <li>• Regular penetration testing</li>
                <li>• Security updates and patches</li>
              </ul>
            </div>

            <div className="rounded-2xl border-2 border-zinc-200 bg-gradient-to-br from-zinc-50 to-white p-8">
              <div className="mb-4 text-4xl">📞</div>
              <h3 className="mb-3 text-lg font-bold text-zinc-900">
                Report Security Issues
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-zinc-700">
                If you discover a security vulnerability or have concerns about our security practices, please report it immediately.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-red-700 hover:scale-105"
              >
                Report Security Issue
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Trust Statement */}
          <div className="mt-12 rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-zinc-900">
              Your Security is Our Priority
            </h3>
            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-zinc-700">
              We understand that enterprise customers require the highest levels of security and compliance. Our platform is designed with security-first principles, regular audits, and continuous monitoring to ensure your data and transactions are protected at all times.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
