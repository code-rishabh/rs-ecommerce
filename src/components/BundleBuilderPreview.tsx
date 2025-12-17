"use client";

import { useState } from "react";
import Link from "next/link";

const HARDWARE_OPTIONS = [
  { id: "meta", label: "Meta Quest for Business", basePrice: 995 },
  { id: "pico", label: "PICO Neo 3 Pro", basePrice: 899 },
];

const ISV_OPTIONS = [
  { id: "training", label: "Training & Simulation ISV", pricePerSeat: 45 },
  { id: "collab", label: "Collaboration & Meetings ISV", pricePerSeat: 32 },
  { id: "analytics", label: "Engagement Analytics ISV", pricePerSeat: 28 },
];

const SERVICE_ADDONS = [
  { id: "mdm", label: "MDM Platform", pricePerDevice: 7 },
  { id: "provisioning", label: "Provisioning", pricePerDevice: 18 },
  { id: "labeling", label: "Labeling & Kitting", pricePerDevice: 6 },
];

export function BundleBuilderPreview() {
  const [hardware, setHardware] = useState<string>("meta");
  const [quantity, setQuantity] = useState<number>(25);
  const [selectedIsvs, setSelectedIsvs] = useState<string[]>(["training"]);
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "mdm",
    "provisioning",
  ]);

  const hardwareConfig = HARDWARE_OPTIONS.find((h) => h.id === hardware)!;

  const baseHardwareTotal = hardwareConfig.basePrice * quantity;
  const isvTotal =
    selectedIsvs.length * 35 * quantity; // simplified mock pricing
  const servicesTotal =
    selectedServices.length * 10 * quantity; // simplified mock pricing
  const grandTotal = baseHardwareTotal + isvTotal + servicesTotal;

  const handleToggleIsv = (id: string) => {
    setSelectedIsvs((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleToggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <section id="bundles" className="border-b border-zinc-200 bg-gradient-to-b from-zinc-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Build Your Enterprise VR Bundle
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-zinc-600 sm:text-lg">
            Dynamically configure hardware, ISVs, MDM, provisioning, and labeling services with commercial pricing.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)]">
          <div className="space-y-6 rounded-2xl border-2 border-zinc-200 bg-white p-6 shadow-lg">
            <div>
              <h3 className="mb-1 text-base font-bold text-zinc-900">
                1. Hardware Selection
              </h3>
              <p className="mb-4 text-xs text-zinc-600">
                Choose your VR hardware platform
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {HARDWARE_OPTIONS.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setHardware(option.id)}
                    className={`flex flex-col items-start rounded-xl border-2 px-4 py-3 text-left transition-all ${
                      hardware === option.id
                        ? "border-red-600 bg-red-50 shadow-md"
                        : "border-zinc-200 bg-zinc-50 hover:border-zinc-300 hover:bg-white"
                    }`}
                  >
                    <span className="text-sm font-bold text-zinc-900">
                      {option.label}
                    </span>
                    <span className="mt-1 text-xs text-zinc-600">
                      From ${option.basePrice.toLocaleString()} per device
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-1 text-base font-bold text-zinc-900">
                2. ISVs (Software Vendors)
              </h3>
              <p className="mb-4 text-xs text-zinc-600">
                Select ISVs with quantity-based pricing
              </p>
              <div className="space-y-3">
                {ISV_OPTIONS.map((isv) => (
                  <label
                    key={isv.id}
                    className="flex cursor-pointer items-start justify-between gap-3 rounded-xl border-2 border-zinc-200 bg-white p-4 transition-all hover:border-red-300 hover:shadow-md"
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        className="mt-1 h-5 w-5 rounded border-2 border-zinc-300 text-red-600 focus:ring-2 focus:ring-red-500"
                        checked={selectedIsvs.includes(isv.id)}
                        onChange={() => handleToggleIsv(isv.id)}
                      />
                      <div>
                        <p className="text-sm font-bold text-zinc-900">
                          {isv.label}
                        </p>
                        <p className="mt-1 text-xs text-zinc-600">
                          From ${isv.pricePerSeat}/license with tiered discounts
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                      Quantity-based
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-1 text-base font-bold text-zinc-900">
                3. Services & Lifecycle
              </h3>
              <p className="mb-4 text-xs text-zinc-600">
                Optional services billed per device
              </p>
              <div className="flex flex-wrap gap-3">
                {SERVICE_ADDONS.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => handleToggleService(service.id)}
                    className={`inline-flex items-center gap-2 rounded-xl border-2 px-4 py-2.5 text-xs font-bold transition-all ${
                      selectedServices.includes(service.id)
                        ? "border-red-600 bg-red-600 text-white shadow-md"
                        : "border-zinc-300 bg-white text-zinc-800 hover:border-red-300 hover:bg-red-50"
                    }`}
                  >
                    <span>{service.label}</span>
                    <span className="text-[10px] opacity-80">
                      ${service.pricePerDevice}/device
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-1 text-base font-bold text-zinc-900">
                4. Quantity
              </h3>
              <div className="mt-4 flex items-center gap-4">
                <input
                  type="range"
                  min={10}
                  max={250}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-zinc-200 accent-red-600"
                />
                <span className="w-20 text-right text-base font-bold text-zinc-900">
                  {quantity} units
                </span>
              </div>
              <p className="mt-2 text-xs text-zinc-500">
                Volume discounts apply automatically. Contact sales for 50+ units.
              </p>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border-2 border-zinc-200 bg-gradient-to-br from-zinc-50 to-white p-6 shadow-lg">
            <div>
              <h3 className="mb-2 text-base font-bold text-zinc-900">
                Pricing Summary
              </h3>
              <p className="text-xs text-zinc-600">
                Commercial pricing includes enterprise warranties, MDM compatibility, and ISV readiness.
              </p>
            </div>

            <dl className="space-y-3 border-t border-zinc-200 pt-4 text-sm">
              <div className="flex items-center justify-between">
                <dt className="text-zinc-700">
                  Hardware ({quantity} × {hardwareConfig.label})
                </dt>
                <dd className="font-bold text-zinc-900">
                  ${baseHardwareTotal.toLocaleString()}
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-zinc-700">ISVs ({selectedIsvs.length} selected)</dt>
                <dd className="font-bold text-zinc-900">
                  ${isvTotal.toLocaleString()}
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-zinc-700">Services ({selectedServices.length} selected)</dt>
                <dd className="font-bold text-zinc-900">
                  ${servicesTotal.toLocaleString()}
                </dd>
              </div>
            </dl>

            <div className="border-t-2 border-zinc-300 pt-4">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm font-semibold text-zinc-700">
                  Estimated Total
                </p>
                <p className="text-2xl font-bold text-zinc-900">
                  ${grandTotal.toLocaleString()}
                </p>
              </div>
              <p className="mb-4 text-xs text-zinc-500">
                Indicative pricing. Final quote confirmed by sales team.
              </p>
              <Link
                href="/bundles"
                className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:shadow-xl hover:scale-105"
              >
                Get Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
