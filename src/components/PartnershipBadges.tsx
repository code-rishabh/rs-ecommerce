import Image from "next/image";

const partnerships = [
  {
    image: "/images/logos/apple-authorized-reseller.png",
    alt: "Apple Authorized Reseller",
    title: "Apple Authorized Reseller",
    description: "Authorized reseller for Apple products",
  },
  {
    image: "/images/logos/meta-work-partner-premier.png",
    alt: "Meta Work Partner Premier",
    title: "Meta Premier Partner",
    description: "Premier partner for Meta headsets and MDMs",
  },
  {
    image: "/images/logos/authorized-distributor.png",
    alt: "Authorized Distributor",
    title: "Authorized Distributor",
    description: "Authorized distributor for Pico headsets",
  },
];

export function PartnershipBadges() {
  return (
    <section className="border-b border-zinc-200 bg-gradient-to-b from-white via-zinc-50 to-white py-12 lg:py-16">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 sm:text-3xl mb-2">
            Trusted Partnerships
          </h2>
          <p className="text-sm text-zinc-600 sm:text-base max-w-2xl mx-auto">
            Our authorized partnerships ensure you receive genuine products with full manufacturer support and warranties
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center justify-items-center">
          {partnerships.map((partnership, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-6 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-lg transition-all duration-300 w-full max-w-sm"
            >
              <div className="relative w-full h-32 mb-4 flex items-center justify-center">
                <Image
                  src={partnership.image}
                  alt={partnership.alt}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-1 text-center">
                {partnership.title}
              </h3>
              <p className="text-sm text-zinc-600 text-center">
                {partnership.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

