"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#2C3E50] text-white px-6 py-4 fixed z-50 w-full">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <Image
        src="/tslogo1.png"
        alt="logo"
        className=''
        height={400}
        width={200} />
        {/* <h1 className="text-xl font-bold">Bima Properties</h1> */}

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/" className="hover:text-[#E3F2FD]">Home</Link>
          <Link href="/properties" className="hover:text-[#E3F2FD]">Properties</Link>
          <Link href="/agent" className="hover:text-[#E3F2FD]">Agents</Link>
          <Link href="/contact" className="hover:text-[#E3F2FD]">Contact</Link>
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
        </div>
      )}
    </nav>
  );
}