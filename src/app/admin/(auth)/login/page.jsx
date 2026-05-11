"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginMerchant } from "@/services/authService";
import toast from "react-hot-toast";

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

    try {

      setLoading(true);

      // API CALL
      const data = await loginMerchant(form);

      console.log(data);

      // SAVE TOKEN
      localStorage.setItem(
        "adminToken",
        data?.token
      );

      // SAVE MERCHANT
      localStorage.setItem(
        "merchant",
        JSON.stringify({
          fullname: data?.merchant?.fullname,
          companyName: data?.merchant?.companyName,
          email: data?.merchant?.email,
        })
      );

      toast.success("Login successful");

      router.push("/admin");

    } catch (err) {

      console.log(err);

      toast.error(
        err?.response?.data?.message ||
        "Invalid credentials"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">

      {/* LEFT */}
      <div className="hidden md:flex w-1/2 bg-[#2C3E50] text-[#E3F2FD] items-center justify-center p-10">

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

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 focus:border-black outline-none p-4 rounded-xl"
              required
            />

            {/* PASSWORD */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-gray-300 focus:border-black outline-none p-4 rounded-xl"
              required
            />

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#3f5873] text-white p-4 rounded-xl hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >

              {loading
                ? "Authenticating..."
                : "Login"}

            </button>

          </form>

          {/* REGISTER LINK */}
          <p className="text-center text-gray-500 mt-6">

            Don't have an account?

            <Link
              href="/admin/register"
              className="text-black font-semibold ml-2 hover:underline"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>

  );

}