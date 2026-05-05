
// export default function AdminLayout({ children }) {
//     return (
//         <div className="flex min-h-screen">
//             {/* sidebar */}
//             <aside className="w-64 bg-gray-800 text-white p-4">
//                 <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
//                 <ul>
//                     <li className="mb-4">
//                         <a href="/admin/dashboard" className="hover:text-gray-400">Dashboard</a>
//                     </li>
//                     <li className="mb-4">
//                         <a href="/admin/users" className="hover:text-gray-400">Users</a>
//                     </li>
//                     <li className="mb-4">
//                         <a href="/admin/settings" className="hover:text-gray-400">Settings</a>
//                     </li>
//                 </ul>
//             </aside>
//             {/* Content */}
//         <main className="flex-1 p-6 bg-[#E3f2fd] text-[#374151]">
//             {children}
//         </main>
//         </div>

//     )
// }
"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import Sidebar from "@/components/admin/SideBar";
import Topbar from "@/components/admin/TopBar";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    // allow login page
    if (pathname === "/admin/login") {
      setMounted(true);
      return;
    }

    // protect routes
    if (!token) {
      router.push("/admin/login");
    } else {
      setMounted(true);
    }
  }, [pathname, router]);

  if (!mounted) {
    return null;
  }

  // LOGIN PAGE NO SIDEBAR
  if (pathname === "/admin/login") {
    return children;
  }

  return (
    <div className="flex bg-[#f4f7fa] min-h-screen">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <main className="p-6">
          {children}
        </main>

      </div>
    </div>
  );
}