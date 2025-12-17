"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../../contexts/AuthContext";
import { PageHero } from "../../components/PageHero";

// Mock order data - in production, this would come from an API
type Order = {
  id: string;
  orderNumber: string;
  date: string;
  status: "pending" | "approved" | "processing" | "shipped" | "delivered";
  total: number;
  items: number;
};

const mockOrders: Order[] = [
  {
    id: "1",
    orderNumber: "RS-12345678",
    date: "2024-01-15",
    status: "delivered",
    total: 12450,
    items: 3,
  },
  {
    id: "2",
    orderNumber: "RS-12345679",
    date: "2024-01-20",
    status: "shipped",
    total: 8990,
    items: 2,
  },
  {
    id: "3",
    orderNumber: "RS-12345680",
    date: "2024-01-25",
    status: "processing",
    total: 17900,
    items: 5,
  },
];

export default function AccountPage() {
  const router = useRouter();
  const { user, logout, updateProfile, isAuthenticated, isLoading } = useAuth();
  const [orders] = useState<Order[]>(mockOrders);
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    company: user?.company || "",
    phone: user?.phone || "",
  });

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, isLoading, router]);

  useEffect(() => {
    if (user) {
      setProfileData({
        name: user.name,
        email: user.email,
        company: user.company || "",
        phone: user.phone || "",
      });
    }
  }, [user]);

  const handleSaveProfile = () => {
    updateProfile(profileData);
    setIsEditing(false);
  };

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
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

  if (isLoading) {
    return (
      <div className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-zinc-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="bg-white">
      <PageHero
        title="My Account"
        subtitle="Manage your profile, view orders, and track shipments"
        badge="Dashboard"
      />

      <section className="border-b border-zinc-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Profile Section */}
            <div className="lg:col-span-1">
              <div className="rounded-2xl border-2 border-zinc-200 bg-white p-6 shadow-lg">
                <h2 className="mb-4 text-xl font-bold text-zinc-900">
                  Profile Information
                </h2>

                {!isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-zinc-500 uppercase">
                        Name
                      </p>
                      <p className="text-sm font-semibold text-zinc-900">
                        {user.name}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-zinc-500 uppercase">
                        Email
                      </p>
                      <p className="text-sm font-semibold text-zinc-900">
                        {user.email}
                      </p>
                    </div>
                    {user.company && (
                      <div>
                        <p className="text-xs font-semibold text-zinc-500 uppercase">
                          Company
                        </p>
                        <p className="text-sm font-semibold text-zinc-900">
                          {user.company}
                        </p>
                      </div>
                    )}
                    {user.phone && (
                      <div>
                        <p className="text-xs font-semibold text-zinc-500 uppercase">
                          Phone
                        </p>
                        <p className="text-sm font-semibold text-zinc-900">
                          {user.phone}
                        </p>
                      </div>
                    )}
                    <button
                      onClick={() => setIsEditing(true)}
                      className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50"
                    >
                      Edit Profile
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-zinc-700">
                        Name
                      </label>
                      <input
                        type="text"
                        value={profileData.name}
                        onChange={(e) =>
                          setProfileData({ ...profileData, name: e.target.value })
                        }
                        className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-zinc-700">
                        Company
                      </label>
                      <input
                        type="text"
                        value={profileData.company}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            company: e.target.value,
                          })
                        }
                        className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-zinc-700">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            phone: e.target.value,
                          })
                        }
                        className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      />
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={handleSaveProfile}
                        className="flex-1 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => {
                          setIsEditing(false);
                          setProfileData({
                            name: user.name,
                            email: user.email,
                            company: user.company || "",
                            phone: user.phone || "",
                          });
                        }}
                        className="flex-1 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                <div className="mt-6 border-t border-zinc-200 pt-6">
                  <button
                    onClick={logout}
                    className="w-full rounded-lg border border-red-300 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-100"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>

            {/* Orders Section */}
            <div className="lg:col-span-2">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-zinc-900">Order History</h2>
                <Link
                  href="/orders/track"
                  className="text-sm font-semibold text-red-600 hover:text-red-700"
                >
                  Track All Orders
                </Link>
              </div>

              {orders.length === 0 ? (
                <div className="rounded-2xl border-2 border-zinc-200 bg-white p-12 text-center">
                  <div className="mb-4 text-4xl">📦</div>
                  <h3 className="mb-2 text-lg font-bold text-zinc-900">
                    No Orders Yet
                  </h3>
                  <p className="mb-6 text-zinc-600">
                    Start shopping to see your orders here
                  </p>
                  <Link
                    href="/hardware"
                    className="inline-block rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                  >
                    Shop Now
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <Link
                      key={order.id}
                      href={`/orders/${order.id}`}
                      className="block rounded-lg border border-zinc-200 bg-white p-6 transition hover:border-zinc-300 hover:shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="mb-2 flex items-center gap-3">
                            <h3 className="text-lg font-bold text-zinc-900">
                              {order.orderNumber}
                            </h3>
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(
                                order.status
                              )}`}
                            >
                              {order.status.charAt(0).toUpperCase() +
                                order.status.slice(1)}
                            </span>
                          </div>
                          <p className="text-sm text-zinc-600">
                            {new Date(order.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                          <p className="mt-1 text-sm text-zinc-600">
                            {order.items} item{order.items !== 1 ? "s" : ""}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-zinc-900">
                            ${order.total.toLocaleString()}
                          </p>
                          <p className="mt-1 text-sm text-zinc-500">
                            View Details →
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

