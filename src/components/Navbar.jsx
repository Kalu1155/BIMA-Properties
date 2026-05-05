"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import AuthModal from "@/components/AuthModal";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [user, setUser] = useState(null);

  // 🔥 Load user + listen for login/logout
  useEffect(() => {
   const loadUser = () => {
  const storedUser = localStorage.getItem("user");

  try {
    if (!storedUser || storedUser === "undefined") {
      setUser(null);
    } else {
      setUser(JSON.parse(storedUser));
    }
  } catch (err) {
    console.error("Invalid user in storage");
    setUser(null);
  }
};

    loadUser();

    window.addEventListener("authChanged", loadUser);

    return () => {
      window.removeEventListener("authChanged", loadUser);
    };
  }, []);

  // 🔥 Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // notify app
    window.dispatchEvent(new Event("authChanged"));
  };

  return (
    <>
      <nav className="bg-[#2C3E50] text-white px-6 py-4 fixed z-50 w-full">
        
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Image
            src="/tslogo1.png"
            alt="logo"
            height={400}
            width={200}
          />

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 items-center">
            <Link href="/" className="hover:text-[#E3F2FD]">Home</Link>
            <Link href="/properties" className="hover:text-[#E3F2FD]">Properties</Link>
            <Link href="/agent" className="hover:text-[#E3F2FD]">Agents</Link>
            <Link href="/contact" className="hover:text-[#E3F2FD]">Contact</Link>

            {/* 🔥 AUTH STATE */}
            {user ? (
              <div className="flex items-center gap-3">
                <span>Hi, {user.first_name}</span>
                <button
                  onClick={handleLogout}
                  className="bg-white text-[#2C3E50] px-3 py-1 rounded hover:bg-gray-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => setAuthOpen(true)}
                className="bg-white text-[#2C3E50] px-4 py-2 rounded-lg hover:bg-gray-200 transition"
              >
                Sign in / Register
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mt-4 flex flex-col gap-4 md:hidden">
            <Link href="/">Home</Link>
            <Link href="/properties">Properties</Link>
            <Link href="/agents">Agents</Link>
            <Link href="/contact">Contact</Link>

            {/* 🔥 AUTH STATE MOBILE */}
            {user ? (
              <>
                <span>Hi, {user.first_name}</span>
                <button onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <button onClick={() => setAuthOpen(true)}>
                Sign in / Register
              </button>
            )}
          </div>
        )}
      </nav>

      {/* Modal */}
      <AuthModal 
        isOpen={authOpen} 
        onClose={() => setAuthOpen(false)} 
      />
    </>
  );
}