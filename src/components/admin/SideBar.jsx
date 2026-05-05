"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuLayoutDashboard,
    LuBuilding2,
    LuUsers,
    LuMessageSquareMore,
    LuSettings
 } from "react-icons/lu";

const links = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LuLayoutDashboard,
  },
  {
    name: "Properties",
    href: "/admin/properties",
    icon: LuBuilding2,
  },
  {
    name: "Agents",
    href: "/admin/agents",
    icon: LuUsers,
  },
  {
    name: "Messages",
    href: "/admin/messages",
    icon: LuMessageSquareMore,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: LuSettings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[260px] bg-[#2C3E50] text-[#E3F2FD]  p-5 hidden md:flex flex-col">

      <h1 className="text-2xl font-bold mb-10">
        Bima Admin
      </h1>

      <nav className="space-y-2">

        {links.map((link) => {
          const Icon = link.icon;

          const active = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
              
              ${
                active
                  ? "bg-[#3f5873] text-white"
                  : "text-gray-400 hover:bg-[#5d6d7e] hover:text-white"
              }
              `}
            >
              <Icon size={20} />
              {link.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}