"use client";

import { PageHero } from "../../components/PageHero";
import Link from "next/link";
import Image from "next/image";

type Isv = {
  id: string;
  name: string;
  category: string;
  basePrice: string;
  description: string;
  icon: string;
  logoUrl: string;
};

const tiers = [
  { 
    label: "1–10 licenses", 
    description: "Base ISV license price.",
    icon: "📦",
    color: "from-blue-50 to-blue-100",
  },
  {
    label: "11–50 licenses",
    description: "Discounted per-seat pricing for mid-scale deployments.",
    icon: "💼",
    color: "from-purple-50 to-purple-100",
  },
  {
    label: "50+ licenses",
    description: "Custom enterprise pricing – contact sales.",
    icon: "🏢",
    color: "from-emerald-50 to-emerald-100",
  },
];

// Real ISV partners with detail page links
const isvs: Isv[] = [
  {
    id: "virtualspeech",
    name: "VirtualSpeech",
    category: "Training & Simulation",
    basePrice: "$45",
    description:
      "VR soft skills training platform for public speaking, presentation skills, and communication training.",
    icon: "🎤",
    logoUrl: "https://virtualspeech-com.b-cdn.net/wp-content/uploads/virtualspeech-logo-horizontal.svg",
  },
  {
    id: "gwpro",
    name: "GW Pro",
    category: "Training & Simulation",
    basePrice: "$52",
    description:
      "Enterprise VR training solutions for technical skills, safety training, and operational procedures.",
    icon: "🛠️",
    logoUrl: "https://optim.tildacdn.com/tild6636-6638-4263-b138-343336306436/-/resize/69x/-/format/webp/logonum01.png.webp",
  },
  {
    id: "shapesxr",
    name: "ShapesXR",
    category: "Collaboration",
    basePrice: "$38",
    description:
      "3D design and collaboration platform for teams to create, prototype, and collaborate in VR.",
    icon: "🎨",
    logoUrl: "https://cdn.prod.website-files.com/615dc84364c5917b852e46b2/658a9d493b3c693fff968a75_ShapesXR_Logo.svg",
  },
  {
    id: "metaverselearning",
    name: "Metaverse Learning",
    category: "Training & Simulation",
    basePrice: "$42",
    description:
      "VR education and training platform specializing in vocational skills and professional development.",
    icon: "🎓",
    logoUrl: "https://metaverselearning.co.uk/wp-content/uploads/2023/07/logo-ml-colour.svg",
  },
  {
    id: "vrelax",
    name: "VRelax",
    category: "Wellness",
    basePrice: "$28",
    description:
      "VR wellness and meditation platform for stress reduction, mindfulness, and mental health support.",
    icon: "🧘",
    logoUrl: "https://vrelax.com/wp-content/uploads/2022/04/VRelax_LOGO-KLEUR.png",
  },
  {
    id: "airvear",
    name: "AirVear",
    category: "Platform",
    basePrice: "$35",
    description:
      "VR platform and content management system for enterprise VR deployments.",
    icon: "☁️",
    logoUrl: "https://airvear.com/wp-content/uploads/2024/02/airvear-logo.png",
  },
  {
    id: "imersifi",
    name: "Imersifi",
    category: "Platform",
    basePrice: "$40",
    description:
      "VR software platform for immersive experiences, content creation, and enterprise solutions.",
    icon: "🚀",
    logoUrl: "https://imersifi.com/wp-content/uploads/2022/05/imersifi-logo-web.png",
  },
];

export default function IsvsPage() {

  return (
    <div className="bg-white">
      <PageHero
        title="ISV Ecosystem"
        subtitle="Explore independent software vendors pre-validated for Meta & PICO devices, with quantity-based licensing and enterprise onboarding."
        imageUrl="https://cdn.mos.cms.futurecdn.net/kofNLytfdMVuKPazzJXrNV-1200-80.jpg"
        badge="Software Partners"
      />
      
      {/* Pricing Tiers */}
      <section className="border-b border-zinc-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="mb-6 text-center text-2xl font-bold text-zinc-900">
            Quantity-Based Pricing
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.label}
                className={`rounded-lg border border-zinc-200 bg-gradient-to-br ${tier.color} p-6 shadow-sm`}
              >
                <div className="mb-4 text-4xl">{tier.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-zinc-900">{tier.label}</h3>
                <p className="text-sm text-zinc-700">{tier.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ISV Grid */}
      <section className="border-b border-zinc-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
              Available ISVs
            </h2>
            <p className="mt-2 text-sm text-zinc-600">
              {isvs.length} ISV{isvs.length !== 1 ? "s" : ""} available
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {isvs.map((isv) => (
              <div
                key={isv.id}
                className="group flex flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition hover:border-zinc-300 hover:shadow-md"
              >
                <Link href={`/isvs/${isv.id}`} className="flex flex-1 flex-col">
                  {/* Logo Header - Compact */}
                  <div className={`p-4 text-center ${isv.id === 'virtualspeech' || isv.id === 'shapesxr' ? 'bg-zinc-800' : 'bg-zinc-50'}`}>
                    <div className="relative h-12 w-full">
                      <Image
                        src={isv.logoUrl}
                        alt={`${isv.name} logo`}
                        fill
                        className="object-contain object-center"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      />
                    </div>
                  </div>

                  {/* Content - Compact & Uniform */}
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="mb-1.5 text-sm font-bold text-zinc-900 line-clamp-2 min-h-[2.5rem] group-hover:text-red-600 transition-colors">
                      {isv.name}
                    </h3>
                    <p className="mb-2 text-[10px] font-medium text-zinc-500 uppercase tracking-wide">
                      {isv.category}
                    </p>
                    <p className="mb-3 text-xs leading-relaxed text-zinc-600 line-clamp-2 flex-1">
                      {isv.description}
                    </p>
                    
                    <div className="mt-auto border-t border-zinc-200 pt-3">
                      <p className="text-[10px] text-zinc-500 mb-0.5">Base price</p>
                      <p className="text-base font-bold text-zinc-900">
                        {isv.basePrice}/license
                      </p>
                    </div>
                  </div>
                </Link>
                
                {/* View Details Button - Compact */}
                <div className="p-4 pt-0">
                  <Link
                    href={`/isvs/${isv.id}`}
                    className="block w-full rounded-lg bg-red-600 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-red-700"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
