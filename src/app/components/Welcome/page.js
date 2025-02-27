"use client";
import { useEffect, useState } from "react";

export default function WelcomeToast() {
  const [visible, setVisible] = useState(false);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Check if the toast has already been shown
    if (localStorage.getItem("welcomeToastShown")) return;

    // Show the component with a slight delay for better UX
    const showTimer = setTimeout(() => setVisible(true), 100);

    // Animation sequence
    const animateTimer = setTimeout(() => setStage(1), 300);
    const dismissTimer = setTimeout(() => setStage(2), 4000);

    // Remove from DOM after animation completes
    const removeTimer = setTimeout(() => setVisible(false), 4600);

    // Set the flag in localStorage
    localStorage.setItem("welcomeToastShown", "true");

    return () => {
      clearTimeout(showTimer);
      clearTimeout(animateTimer);
      clearTimeout(dismissTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      style={{
        opacity: stage === 2 ? 0 : 1,
        transition: "opacity 0.6s ease-in-out",
      }}
    >
      <div
        className="bg-white rounded-lg shadow-xl overflow-hidden max-w-md w-full mx-4"
        style={{
          opacity: stage === 0 ? 0 : 1,
          transform:
            stage === 0
              ? "translateY(20px)"
              : stage === 2
              ? "translateY(-20px)"
              : "translateY(0)",
          transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="bg-emerald-500 h-1 w-full"></div>

        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="bg-emerald-100 p-3 rounded-full mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-800">
              Selamat Datang
            </h2>
          </div>

          <p className="text-gray-600 mb-6">
            Di Website Klinik Kartika. Kami siap melayani kebutuhan kesehatan
            Anda.
          </p>

          <div className="flex justify-end">
            <button
              onClick={() => {
                setStage(2);
                setTimeout(() => setVisible(false), 600);
              }}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Lanjutkan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
