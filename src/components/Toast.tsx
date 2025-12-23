"use client";

import { useEffect } from "react";

type ToastProps = {
  message: string;
  type?: "success" | "error" | "info";
  onClose: () => void;
  duration?: number;
};

export function Toast({ message, type = "success", onClose, duration = 3000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const colors = {
    success: "from-emerald-500 to-green-500",
    error: "from-red-500 to-red-600",
    info: "from-blue-500 to-cyan-500",
  };

  const icons = {
    success: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
    error: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    info: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };

  return (
    <div className="fixed top-24 right-8 z-[100] animate-slide-up">
      <div className={`flex items-center gap-3 rounded-2xl bg-gradient-to-r ${colors[type]} px-6 py-4 text-white shadow-2xl backdrop-blur-sm`}>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
          {icons[type]}
        </div>
        <p className="font-semibold">{message}</p>
        <button
          onClick={onClose}
          className="ml-4 rounded-lg p-1 hover:bg-white/20 transition"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

import { useState } from "react";

// Hook for managing toasts
export function useToast() {
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null);

  const showToast = (message: string, type: "success" | "error" | "info" = "success") => {
    setToast({ message, type });
  };

  const hideToast = () => setToast(null);

  return { toast, showToast, hideToast };
}

