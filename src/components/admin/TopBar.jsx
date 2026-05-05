"use client";

import { useState, useEffect } from "react";
import { LuChevronDown } from "react-icons/lu";
import { useRouter } from "next/navigation";

export default function Topbar() {
  const [merchant, setMerchant] = useState(null);
  const [open, setOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem("merchant");

    if (data) {
      setMerchant(JSON.parse(data));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("merchant");

    router.push("/admin/login");
  };

  return (
    <header className="bg-white border border-[#e5e7eb] h-[80px] flex items-center justify-end px-6 relative">

      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 cursor-pointer"
      >
        <div className="w-10 h-10 rounded-full bg-[#2C3E50] text-[#E3F2FD]  flex items-center justify-center">
          B
        </div>

        <div className="hidden md:block">
          <p className="font-semibold">
            {merchant?.name}
          </p>

          <p className="text-sm text-gray-500">
            Merchant
          </p>
        </div>

        <LuChevronDown size={18} />
      </div>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute top-20 right-6 bg-white shadow-lg  border border-[#e5e7eb] rounded-xl w-[200px] overflow-hidden">

          <button className="w-full text-left px-4 py-3 hover:bg-gray-100">
            Profile
          </button>

          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-3 hover:bg-gray-100 text-red-500"
          >
            Logout
          </button>

        </div>
      )}
    </header>
  );
}