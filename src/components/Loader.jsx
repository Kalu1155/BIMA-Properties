"use client";

import { useEffect, useState } from "react";

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);

      setTimeout(() => {
        setLoading(false);
      }, 800);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        className={`
          fixed inset-0 z-[9999]
          flex flex-col items-center justify-center
          bg-[#2C3E50]
          transition-opacity duration-700
          ${fadeOut ? "opacity-0" : "opacity-100"}
        `}
      >
        {/* Animated Circle */}
        <div className="relative flex items-center justify-center">
          
          <div className="w-40 h-40 border-4 border-[#E3F2FD]/20 rounded-full animate-ping absolute"></div>

          <div className="w-32 h-32 border-4 border-t-[#E3F2FD] border-r-[#E3F2FD] border-b-transparent border-l-transparent rounded-full animate-spin"></div>

          <div className="absolute text-center">
            <h1 className="text-white text-2xl md:text-3xl font-bold tracking-widest">
              BIMA
            </h1>

            <p className="text-[#E3F2FD] text-xs tracking-[6px] mt-1">
              PROPERTIES
            </p>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-gray-300 mt-10 text-sm tracking-[4px] animate-pulse">
          FIND • INVEST • LIVE
        </p>
      </div>
    );
  }

  return children;
}