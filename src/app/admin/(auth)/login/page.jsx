// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function AdminLogin() {
//   const router = useRouter();

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       // 🔌 API ready (we will connect real backend later)
//       const res = await fetch("http://property.reworkstaging.name.ng/v1/merchants", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.message || "Login failed");
//       }

//       // save token (future auth flow)
//       localStorage.setItem("adminToken", data.token);

//       router.push("/admin/dashboard");
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row">

//       {/* LEFT SIDE - BRAND */}
//       <div className="hidden md:flex w-1/2 bg-black text-white items-center justify-center p-10">
//         <div>
//           <h1 className="text-4xl font-bold">Bima Properties</h1>
//           <p className="mt-3 text-gray-300">
//             Admin Control System — manage agents, properties & listings.
//           </p>
//         </div>
//       </div>

//       {/* RIGHT SIDE - FORM */}
//       <div className="flex w-full md:w-1/2 items-center justify-center p-6">
//         <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">

//           <h2 className="text-2xl font-bold mb-6">Admin Login</h2>

//           {error && (
//             <div className="bg-red-100 text-red-600 p-2 rounded mb-4 text-sm">
//               {error}
//             </div>
//           )}

//           <form onSubmit={handleLogin} className="space-y-4">

//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//               className="w-full border p-3 rounded"
//               required
//             />

//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               className="w-full border p-3 rounded"
//               required
//             />

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-black text-white p-3 rounded hover:opacity-80 transition"
//             >
//               {loading ? "Logging in..." : "Login"}
//             </button>
//           </form>
//         </div>
//       </div>

//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      // TEMP LOGIN
      localStorage.setItem("adminToken", "bima-admin-token");

      localStorage.setItem(
        "merchant",
        JSON.stringify({
          name: "Bima Properties",
          email: form.email,
        })
      );

      router.push("/admin");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">

      {/* LEFT */}
      <div className="hidden md:flex w-1/2 bg-[#2C3E50] text-[#E3F2FD]  items-center justify-center p-10">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold leading-tight">
            Bima Properties
          </h1>

          <p className="mt-5 text-gray-400 leading-relaxed">
            Control your properties, agents, analytics and listings from one intelligent dashboard.
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

          <h2 className="text-3xl font-bold mb-2">
            Welcome Back 👋
          </h2>

          <p className="text-gray-500 mb-8">
            Login to continue
          </p>

          <form onSubmit={handleLogin} className="space-y-5">

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 focus:border-black outline-none p-4 rounded-xl"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-gray-300 focus:border-black outline-none p-4 rounded-xl"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#3f5873] text-white p-4 rounded-xl hover:opacity-90 transition-all duration-300"
            >
              {loading ? "Authenticating..." : "Login"}
            </button>

          </form>
        </div>
      </div>

    </div>
  );
}