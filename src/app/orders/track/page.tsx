"use client";

import { useState } from "react";
import Link from "next/link";
import { PageHero } from "../../../components/PageHero";

// Mock tracking data
const mockTrackingData: Record<
  string,
  {
    orderNumber: string;
    status: "pending" | "approved" | "processing" | "shipped" | "delivered";
    estimatedDelivery?: string;
    trackingNumber?: string;
    carrier?: string;
    history: {
      date: string;
      status: string;
      location?: string;
    }[];
  }
> = {
  "RS-12345678": {
    orderNumber: "RS-12345678",
    status: "delivered",
    estimatedDelivery: "2024-01-18",
    trackingNumber: "1Z999AA10123456784",
    carrier: "FedEx",
    history: [
      {
        date: "2024-01-18T10:30:00",
        status: "Delivered",
        location: "New York, NY",
      },
      {
        date: "2024-01-17T08:15:00",
        status: "Out for delivery",
        location: "New York, NY",
      },
      {
        date: "2024-01-16T14:20:00",
        status: "In transit",
        location: "Philadelphia, PA",
      },
      {
        date: "2024-01-15T09:00:00",
        status: "Shipped",
        location: "Warehouse",
      },
      {
        date: "2024-01-15T08:00:00",
        status: "Order approved",
      },
    ],
  },
  "RS-12345679": {
    orderNumber: "RS-12345679",
    status: "shipped",
    estimatedDelivery: "2024-01-22",
    trackingNumber: "1Z999AA10123456785",
    carrier: "UPS",
    history: [
      {
        date: "2024-01-20T10:00:00",
        status: "In transit",
        location: "Chicago, IL",
      },
      {
        date: "2024-01-20T08:00:00",
        status: "Shipped",
        location: "Warehouse",
      },
      {
        date: "2024-01-20T07:00:00",
        status: "Order approved",
      },
    ],
  },
};

export default function OrderTrackingPage() {
  const [orderNumber, setOrderNumber] = useState("");
  const [trackingData, setTrackingData] = useState<
    typeof mockTrackingData[string] | null
  >(null);
  const [error, setError] = useState("");

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!orderNumber.trim()) {
      setError("Please enter an order number");
      return;
    }

    const data = mockTrackingData[orderNumber.trim()];
    if (data) {
      setTrackingData(data);
    } else {
      setError("Order not found. Please check your order number.");
      setTrackingData(null);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "bg-emerald-100 text-emerald-700";
      case "shipped":
        return "bg-blue-100 text-blue-700";
      case "processing":
        return "bg-amber-100 text-amber-700";
      case "approved":
        return "bg-green-100 text-green-700";
      default:
        return "bg-zinc-100 text-zinc-700";
    }
  };

  return (
    <div className="bg-white">
      <PageHero
        title="Track Your Order"
        subtitle="Enter your order number to track shipment status and delivery"
        badge="Tracking"
      />

      <section className="border-b border-zinc-200 bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          {/* Search Form */}
          <form
            onSubmit={handleTrack}
            className="mb-8 rounded-2xl border-2 border-zinc-200 bg-white p-6 shadow-lg"
          >
            <h2 className="mb-4 text-xl font-bold text-zinc-900">
              Track Order
            </h2>
            <div className="flex gap-4">
              <input
                type="text"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                placeholder="Enter order number (e.g., RS-12345678)"
                className="flex-1 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
              />
              <button
                type="submit"
                className="rounded-lg bg-red-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Track
              </button>
            </div>
            {error && (
              <p className="mt-3 text-sm text-red-600">{error}</p>
            )}
          </form>

          {/* Tracking Results */}
          {trackingData && (
            <div className="space-y-6">
              {/* Order Summary */}
              <div className="rounded-2xl border-2 border-zinc-200 bg-white p-6 shadow-lg">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900">
                      Order {trackingData.orderNumber}
                    </h3>
                    <p className="text-sm text-zinc-600">
                      {trackingData.carrier && (
                        <>Carrier: {trackingData.carrier}</>
                      )}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${getStatusColor(
                      trackingData.status
                    )}`}
                  >
                    {trackingData.status.charAt(0).toUpperCase() +
                      trackingData.status.slice(1)}
                  </span>
                </div>
                {trackingData.trackingNumber && (
                  <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-3">
                    <p className="text-xs font-semibold text-zinc-500">
                      Tracking Number
                    </p>
                    <p className="text-sm font-bold text-zinc-900">
                      {trackingData.trackingNumber}
                    </p>
                  </div>
                )}
                {trackingData.estimatedDelivery && (
                  <p className="mt-3 text-sm text-zinc-600">
                    Estimated Delivery:{" "}
                    {new Date(
                      trackingData.estimatedDelivery
                    ).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                )}
              </div>

              {/* Tracking History */}
              <div className="rounded-2xl border-2 border-zinc-200 bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-lg font-bold text-zinc-900">
                  Tracking History
                </h3>
                <div className="space-y-4">
                  {trackingData.history.map((event, index) => (
                    <div
                      key={index}
                      className="flex gap-4 border-l-2 border-zinc-200 pl-4"
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-zinc-900">
                          {event.status}
                        </p>
                        {event.location && (
                          <p className="text-sm text-zinc-600">
                            {event.location}
                          </p>
                        )}
                        <p className="mt-1 text-xs text-zinc-500">
                          {new Date(event.date).toLocaleString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                            hour: "numeric",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Help Section */}
          <div className="mt-8 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
            <h3 className="mb-2 text-base font-bold text-zinc-900">
              Need Help?
            </h3>
            <p className="mb-4 text-sm text-zinc-600">
              Can't find your order or have questions about your shipment?
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Contact Support
              </Link>
              <Link
                href="/account"
                className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50"
              >
                View All Orders
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

