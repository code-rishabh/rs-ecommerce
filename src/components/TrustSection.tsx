"use client";

const trustItems = [
  {
    icon: "✓",
    title: "Meta Premier Partner",
    description: "Authorized commercial distributor",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: "✓",
    title: "Enterprise Warranty",
    description: "Business-grade coverage included",
    color: "from-emerald-500 to-emerald-700",
  },
  {
    icon: "✓",
    title: "PCI-DSS Compliant",
    description: "Secure payment processing",
    color: "from-purple-500 to-purple-700",
  },
  {
    icon: "✓",
    title: "24/7 Support",
    description: "Dedicated enterprise support team",
    color: "from-red-500 to-red-700",
  },
];

const stats = [
  { value: "10K+", label: "Devices Deployed" },
  { value: "500+", label: "Enterprise Clients" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "4.8/5", label: "Customer Rating" },
];

export function TrustSection() {
  return (
    <section className="border-b border-zinc-200 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 py-16 lg:py-20">
      <div className="container-custom">
        {/* Stats */}
        <div className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-4xl font-bold text-white sm:text-5xl">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-400 sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Items */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl bg-gradient-to-br ${item.color} p-6 text-white shadow-xl transition-transform hover:scale-105`}
            >
              <div className="mb-4 text-4xl font-bold">{item.icon}</div>
              <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
              <p className="text-sm opacity-90">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
