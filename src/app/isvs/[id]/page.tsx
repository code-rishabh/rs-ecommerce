"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCart } from "../../../contexts/CartContext";
import { useState } from "react";

// Comprehensive ISV data based on real partners
const isvs: Record<
  string,
  {
    id: string;
    name: string;
    website: string;
    category: string;
    basePrice: number;
    description: string;
    longDescription: string;
    brand: "Meta Partner" | "PICO Partner" | "Multi-vendor";
    icon: string;
    gradient: string;
    logoUrl: string;
    features: string[];
    useCases: string[];
    industries: string[];
    pricingTiers: {
      min: number;
      max: number;
      price: number;
      discount?: string;
    }[];
    compatibility: string[];
    imageUrl?: string;
  }
> = {
  virtualspeech: {
    id: "virtualspeech",
    name: "VirtualSpeech",
    website: "https://virtualspeech.com/",
    category: "Training & Simulation",
    basePrice: 45,
    description:
      "VR soft skills training platform for public speaking, presentation skills, and communication training.",
    longDescription:
      "VirtualSpeech is a leading VR training platform specializing in soft skills development. It provides immersive environments for practicing public speaking, presentations, sales pitches, and leadership communication. The platform uses AI-powered feedback and analytics to help users improve their communication skills in a safe, controlled virtual environment.",
    brand: "Meta Partner",
    icon: "🎤",
    gradient: "from-blue-50 to-indigo-100",
    logoUrl: "https://virtualspeech-com.b-cdn.net/wp-content/uploads/virtualspeech-logo-horizontal.svg",
    features: [
      "AI-powered speech analysis and feedback",
      "Realistic audience simulations",
      "Customizable training scenarios",
      "Progress tracking and analytics",
      "Multi-language support",
      "Integration with LMS platforms",
    ],
    useCases: [
      "Public speaking training for executives",
      "Sales team presentation skills",
      "Leadership communication development",
      "Interview preparation",
      "Media training for spokespersons",
    ],
    industries: [
      "Corporate Training",
      "Sales & Marketing",
      "Higher Education",
      "Professional Development",
    ],
    pricingTiers: [
      { min: 1, max: 10, price: 45 },
      { min: 11, max: 50, price: 38, discount: "15% off" },
      { min: 51, max: 999999, price: 32, discount: "29% off" },
    ],
    compatibility: ["Meta Quest 2", "Meta Quest 3", "Meta Quest Pro"],
  },
  gwpro: {
    id: "gwpro",
    name: "GW Pro",
    website: "https://gwpro.io/",
    category: "Training & Simulation",
    basePrice: 52,
    description:
      "Enterprise VR training solutions for technical skills, safety training, and operational procedures.",
    longDescription:
      "GW Pro delivers comprehensive enterprise VR training solutions designed for technical workforce development. The platform specializes in hands-on training for complex procedures, safety protocols, and equipment operation. With industry-specific modules and detailed analytics, GW Pro helps organizations reduce training costs while improving learning outcomes.",
    brand: "Multi-vendor",
    icon: "🛠️",
    gradient: "from-purple-50 to-pink-100",
    logoUrl: "https://optim.tildacdn.com/tild6636-6638-4263-b138-343336306436/-/resize/69x/-/format/webp/logonum01.png.webp",
    features: [
      "Technical procedure training",
      "Safety protocol simulations",
      "Equipment operation training",
      "Compliance tracking",
      "Custom content development",
      "Multi-user collaborative training",
    ],
    useCases: [
      "Manufacturing training",
      "Healthcare procedure training",
      "Construction safety training",
      "Equipment maintenance training",
      "Emergency response drills",
    ],
    industries: [
      "Manufacturing",
      "Healthcare",
      "Construction",
      "Energy & Utilities",
      "Aerospace",
    ],
    pricingTiers: [
      { min: 1, max: 10, price: 52 },
      { min: 11, max: 50, price: 44, discount: "15% off" },
      { min: 51, max: 999999, price: 37, discount: "29% off" },
    ],
    compatibility: [
      "Meta Quest 2",
      "Meta Quest 3",
      "PICO 4",
      "PICO Neo 3",
    ],
  },
  shapesxr: {
    id: "shapesxr",
    name: "ShapesXR",
    website: "https://www.shapesxr.com/",
    category: "Collaboration",
    basePrice: 38,
    description:
      "3D design and collaboration platform for teams to create, prototype, and collaborate in VR.",
    longDescription:
      "ShapesXR is a powerful 3D design and collaboration platform that enables teams to create, prototype, and iterate on designs directly in virtual reality. The platform supports real-time collaboration, allowing multiple users to work together in shared virtual spaces. Perfect for product design, architecture, and creative teams looking to leverage VR for spatial design.",
    brand: "Meta Partner",
    icon: "🎨",
    gradient: "from-emerald-50 to-teal-100",
    logoUrl: "https://cdn.prod.website-files.com/615dc84364c5917b852e46b2/658a9d493b3c693fff968a75_ShapesXR_Logo.svg",
    features: [
      "Real-time 3D design tools",
      "Multi-user collaboration",
      "Import/export to CAD software",
      "Prototyping and iteration",
      "Presentation mode",
      "Version control",
    ],
    useCases: [
      "Product design and prototyping",
      "Architectural visualization",
      "Interior design",
      "Concept development",
      "Client presentations",
    ],
    industries: [
      "Product Design",
      "Architecture",
      "Engineering",
      "Creative Agencies",
      "Manufacturing",
    ],
    pricingTiers: [
      { min: 1, max: 10, price: 38 },
      { min: 11, max: 50, price: 32, discount: "16% off" },
      { min: 51, max: 999999, price: 28, discount: "26% off" },
    ],
    compatibility: ["Meta Quest 2", "Meta Quest 3", "Meta Quest Pro"],
  },
  metaverselearning: {
    id: "metaverselearning",
    name: "Metaverse Learning",
    website: "https://metaverselearning.co.uk/",
    category: "Training & Simulation",
    basePrice: 42,
    description:
      "VR education and training platform specializing in vocational skills and professional development.",
    longDescription:
      "Metaverse Learning provides immersive VR education solutions focused on vocational training and professional development. The platform offers a comprehensive library of training modules covering various industries, from healthcare to engineering. With emphasis on practical skills and hands-on learning, Metaverse Learning helps institutions and organizations deliver effective training at scale.",
    brand: "Multi-vendor",
    icon: "🎓",
    gradient: "from-blue-50 to-indigo-100",
    logoUrl: "https://metaverselearning.co.uk/wp-content/uploads/2023/07/logo-ml-colour.svg",
    features: [
      "Vocational training modules",
      "Skills assessment",
      "Progress tracking",
      "Certification programs",
      "LMS integration",
      "Multi-language content",
    ],
    useCases: [
      "Vocational education",
      "Apprenticeship training",
      "Professional certification",
      "Skills development",
      "Continuing education",
    ],
    industries: [
      "Education",
      "Healthcare Training",
      "Engineering",
      "Construction",
      "Hospitality",
    ],
    pricingTiers: [
      { min: 1, max: 10, price: 42 },
      { min: 11, max: 50, price: 36, discount: "14% off" },
      { min: 51, max: 999999, price: 30, discount: "29% off" },
    ],
    compatibility: [
      "Meta Quest 2",
      "Meta Quest 3",
      "PICO 4",
      "PICO Neo 3",
    ],
  },
  vrelax: {
    id: "vrelax",
    name: "VRelax",
    website: "https://vrelax.com/en/",
    category: "Wellness",
    basePrice: 28,
    description:
      "VR wellness and meditation platform for stress reduction, mindfulness, and mental health support.",
    longDescription:
      "VRelax offers immersive VR experiences designed for wellness, meditation, and mental health support. The platform provides guided meditation sessions, stress reduction programs, and therapeutic environments. With scientifically-backed content and customizable experiences, VRelax helps organizations support employee wellbeing and mental health initiatives.",
    brand: "Multi-vendor",
    icon: "🧘",
    gradient: "from-purple-50 to-pink-100",
    logoUrl: "https://vrelax.com/wp-content/uploads/2022/04/VRelax_LOGO-KLEUR.png",
    features: [
      "Guided meditation sessions",
      "Stress reduction programs",
      "Therapeutic environments",
      "Biofeedback integration",
      "Progress tracking",
      "Customizable experiences",
    ],
    useCases: [
      "Employee wellness programs",
      "Stress management",
      "Mental health support",
      "Mindfulness training",
      "Therapeutic interventions",
    ],
    industries: [
      "Corporate Wellness",
      "Healthcare",
      "Education",
      "Hospitality",
      "Retail",
    ],
    pricingTiers: [
      { min: 1, max: 10, price: 28 },
      { min: 11, max: 50, price: 24, discount: "14% off" },
      { min: 51, max: 999999, price: 20, discount: "29% off" },
    ],
    compatibility: [
      "Meta Quest 2",
      "Meta Quest 3",
      "PICO 4",
      "PICO Neo 3",
    ],
  },
  airvear: {
    id: "airvear",
    name: "AirVear",
    website: "https://airvear.com/",
    category: "Platform",
    basePrice: 35,
    description:
      "VR platform and content management system for enterprise VR deployments.",
    longDescription:
      "AirVear provides a comprehensive VR platform and content management system designed for enterprise deployments. The platform offers tools for content distribution, device management, analytics, and user administration. Ideal for organizations managing large-scale VR deployments across multiple locations.",
    brand: "Multi-vendor",
    icon: "☁️",
    gradient: "from-emerald-50 to-teal-100",
    logoUrl: "https://airvear.com/wp-content/uploads/2024/02/airvear-logo.png",
    features: [
      "Content management system",
      "Device management",
      "User administration",
      "Analytics dashboard",
      "Remote deployment",
      "Multi-tenant support",
    ],
    useCases: [
      "Enterprise VR management",
      "Content distribution",
      "Device fleet management",
      "User analytics",
      "Remote updates",
    ],
    industries: [
      "Enterprise IT",
      "Training Organizations",
      "Education",
      "Healthcare Systems",
      "Retail Chains",
    ],
    pricingTiers: [
      { min: 1, max: 10, price: 35 },
      { min: 11, max: 50, price: 30, discount: "14% off" },
      { min: 51, max: 999999, price: 26, discount: "26% off" },
    ],
    compatibility: [
      "Meta Quest 2",
      "Meta Quest 3",
      "PICO 4",
      "PICO Neo 3",
    ],
  },
  imersifi: {
    id: "imersifi",
    name: "Imersifi",
    website: "https://imersifi.com/",
    category: "Platform",
    basePrice: 40,
    description:
      "VR software platform for immersive experiences, content creation, and enterprise solutions.",
    longDescription:
      "Imersifi is a versatile VR software platform that enables organizations to create, deploy, and manage immersive experiences. The platform supports content creation, distribution, and analytics, making it ideal for businesses looking to leverage VR for training, marketing, or customer engagement. With robust tools and enterprise-grade security, Imersifi supports scalable VR deployments.",
    brand: "Multi-vendor",
    icon: "🚀",
    gradient: "from-blue-50 to-indigo-100",
    logoUrl: "https://imersifi.com/wp-content/uploads/2022/05/imersifi-logo-web.png",
    features: [
      "Content creation tools",
      "Experience deployment",
      "Analytics and insights",
      "User management",
      "Custom branding",
      "API integration",
    ],
    useCases: [
      "VR experience creation",
      "Marketing campaigns",
      "Customer engagement",
      "Training content delivery",
      "Virtual events",
    ],
    industries: [
      "Marketing & Advertising",
      "Retail",
      "Real Estate",
      "Entertainment",
      "Tourism",
    ],
    pricingTiers: [
      { min: 1, max: 10, price: 40 },
      { min: 11, max: 50, price: 34, discount: "15% off" },
      { min: 51, max: 999999, price: 29, discount: "28% off" },
    ],
    compatibility: [
      "Meta Quest 2",
      "Meta Quest 3",
      "PICO 4",
      "PICO Neo 3",
    ],
  },
};

export default function IsvDetailPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const [addingToCart, setAddingToCart] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(25);
  const [selectedTier, setSelectedTier] = useState(0);

  const isvId = params.id as string;
  const isv = isvs[isvId];

  if (!isv) {
    return (
      <div className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 text-2xl font-bold text-zinc-900">
            ISV Not Found
          </h1>
          <p className="mb-8 text-zinc-600">
            The ISV you're looking for doesn't exist.
          </p>
          <Link
            href="/isvs"
            className="inline-block rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Back to ISVs
          </Link>
        </div>
      </div>
    );
  }

  // Calculate price based on selected quantity
  const currentTier = isv.pricingTiers.find(
    (tier) => selectedQuantity >= tier.min && selectedQuantity <= tier.max
  ) || isv.pricingTiers[0];
  const pricePerLicense = currentTier.price;
  const totalPrice = pricePerLicense * selectedQuantity;

  const handleAddToCart = () => {
    setAddingToCart(true);

    addToCart({
      id: `isv-${isv.id}`,
      name: `${isv.name} - ${selectedQuantity} licenses`,
      type: "isv",
      price: totalPrice,
      quantity: 1,
      metadata: {
        isvId: isv.id,
        isvName: isv.name,
        quantity: selectedQuantity,
        pricePerLicense: pricePerLicense,
        category: isv.category,
      },
    });

    setTimeout(() => {
      setAddingToCart(false);
    }, 500);
  };

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="border-b border-zinc-200 bg-zinc-50 py-3">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-zinc-600 hover:text-zinc-900">
              Home
            </Link>
            <span className="text-zinc-400">/</span>
            <Link href="/isvs" className="text-zinc-600 hover:text-zinc-900">
              ISVs
            </Link>
            <span className="text-zinc-400">/</span>
            <span className="text-zinc-900">{isv.name}</span>
          </nav>
        </div>
      </div>

      <section className="border-b border-zinc-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* ISV Header */}
            <div className="space-y-6">
              <div className={`rounded-lg border border-zinc-200 bg-gradient-to-br ${isv.gradient} p-8`}>
                <div className="relative mb-4 h-20 w-full">
                  <Image
                    src={isv.logoUrl}
                    alt={`${isv.name} logo`}
                    fill
                    className="object-contain object-center"
                    sizes="100vw"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-700 backdrop-blur-sm">
                    ISV
                  </span>
                  <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-zinc-700 backdrop-blur-sm">
                    {isv.category}
                  </span>
                </div>
              </div>

              <div>
                <h1 className="mb-2 text-3xl font-bold text-zinc-900 sm:text-4xl">
                  {isv.name}
                </h1>
                <p className="mb-4 text-lg text-zinc-600">
                  {isv.description}
                </p>
                <a
                  href={isv.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700"
                >
                  Visit Official Website
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Pricing & Purchase */}
            <div className="space-y-6 rounded-2xl border-2 border-zinc-200 bg-gradient-to-br from-zinc-50 to-white p-6 shadow-lg">
              <h2 className="text-xl font-bold text-zinc-900">
                License Pricing
              </h2>

              {/* Quantity Selector */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-zinc-700">
                  Number of Licenses
                </label>
                <input
                  type="number"
                  min="1"
                  value={selectedQuantity}
                  onChange={(e) =>
                    setSelectedQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                />
                <p className="mt-2 text-xs text-zinc-500">
                  {currentTier.discount && (
                    <span className="font-semibold text-emerald-600">
                      {currentTier.discount} -{" "}
                    </span>
                  )}
                  {currentTier.min === 1
                    ? `Base pricing for ${currentTier.min}-${currentTier.max} licenses`
                    : `Volume pricing for ${currentTier.min}-${currentTier.max} licenses`}
                </p>
              </div>

              {/* Price Display */}
              <div className="rounded-lg border border-zinc-200 bg-white p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-zinc-600">
                    Price per license
                  </span>
                  <span className="text-lg font-bold text-zinc-900">
                    ${pricePerLicense.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between border-t border-zinc-200 pt-2">
                  <span className="text-base font-semibold text-zinc-900">
                    Total ({selectedQuantity} licenses)
                  </span>
                  <span className="text-2xl font-bold text-zinc-900">
                    ${totalPrice.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                disabled={addingToCart}
                className="w-full rounded-lg bg-red-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {addingToCart ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="h-5 w-5 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Adding to Cart...
                  </span>
                ) : (
                  "Add to Cart"
                )}
              </button>

              <Link
                href="/bundles"
                className="block w-full rounded-lg border-2 border-red-600 bg-white px-6 py-3 text-center text-base font-semibold text-red-600 transition hover:bg-red-50"
              >
                Include in Bundle
              </Link>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Long Description */}
            <div className="rounded-lg border border-zinc-200 bg-white p-6">
              <h2 className="mb-4 text-xl font-bold text-zinc-900">
                About {isv.name}
              </h2>
              <p className="leading-relaxed text-zinc-600">
                {isv.longDescription}
              </p>
            </div>

            {/* Features */}
            <div className="rounded-lg border border-zinc-200 bg-white p-6">
              <h2 className="mb-4 text-xl font-bold text-zinc-900">
                Key Features
              </h2>
              <ul className="space-y-2">
                {isv.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1 text-emerald-600">✓</span>
                    <span className="text-sm text-zinc-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Use Cases */}
            <div className="rounded-lg border border-zinc-200 bg-white p-6">
              <h2 className="mb-4 text-xl font-bold text-zinc-900">
                Use Cases
              </h2>
              <ul className="space-y-2">
                {isv.useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1 text-blue-600">•</span>
                    <span className="text-sm text-zinc-600">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div className="rounded-lg border border-zinc-200 bg-white p-6">
              <h2 className="mb-4 text-xl font-bold text-zinc-900">
                Industries Served
              </h2>
              <div className="flex flex-wrap gap-2">
                {isv.industries.map((industry, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Tiers */}
          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-6">
            <h2 className="mb-4 text-xl font-bold text-zinc-900">
              Volume Pricing Tiers
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {isv.pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`rounded-lg border-2 p-4 ${
                    selectedQuantity >= tier.min && selectedQuantity <= tier.max
                      ? "border-red-600 bg-red-50"
                      : "border-zinc-200 bg-white"
                  }`}
                >
                  <div className="mb-2 text-sm font-semibold text-zinc-700">
                    {tier.min === 1
                      ? `${tier.min}-${tier.max} licenses`
                      : tier.max === 999999
                      ? `${tier.min}+ licenses`
                      : `${tier.min}-${tier.max} licenses`}
                  </div>
                  <div className="mb-1 text-2xl font-bold text-zinc-900">
                    ${tier.price}
                  </div>
                  <div className="text-xs text-zinc-500">per license</div>
                  {tier.discount && (
                    <div className="mt-2 text-xs font-semibold text-emerald-600">
                      {tier.discount}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Compatibility */}
          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-6">
            <h2 className="mb-4 text-xl font-bold text-zinc-900">
              Compatible Devices
            </h2>
            <div className="flex flex-wrap gap-2">
              {isv.compatibility.map((device, index) => (
                <span
                  key={index}
                  className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                >
                  {device}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

