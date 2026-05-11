"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerMerchant } from "@/services/authService";
import toast from "react-hot-toast";

export default function AdminRegister() {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullname: "",
    companyName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleRegister = async (e) => {

    e.preventDefault();

    // PASSWORD CHECK
    if (form.password !== form.confirmPassword) {

      toast.error("Passwords do not match");

      return;

    }

    try {

      setLoading(true);

      // REMOVE confirmPassword BEFORE SENDING
      const payload = {
        fullname: form.fullname,
        companyName: form.companyName,
        email: form.email,
        phone: form.phone,
        password: form.password,
      };

      // API CALL
      const data = await registerMerchant(payload);

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

      toast.success("Account created successfully");

      router.push("/admin");

    } catch (err) {

      console.log(err);

      toast.error(
        err?.response?.data?.message ||
        "Something went wrong"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">

      {/* LEFT SIDE */}
      <div className="hidden md:flex w-1/2 bg-[#2C3E50] text-[#E3F2FD] items-center justify-center p-10">

        <div className="max-w-md">

          <h1 className="text-5xl font-bold leading-tight">
            Bima Properties
          </h1>

          <p className="mt-5 text-gray-300 leading-relaxed">
            Create your merchant account and start managing your real estate business intelligently.
          </p>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-6">

        <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8">

          <h2 className="text-3xl font-bold mb-2">
            Create Account 🚀
          </h2>

          <p className="text-gray-500 mb-8">
            Register your merchant dashboard
          </p>

          <form
            onSubmit={handleRegister}
            className="space-y-5"
          >

            {/* FULLNAME */}
            <div>

              <label className="font-medium text-sm">
                Full Name
              </label>

              <input
                type="text"
                name="fullname"
                placeholder="John Doe"
                value={form.fullname}
                onChange={handleChange}
                className="w-full mt-2 border border-gray-300 focus:border-black outline-none p-4 rounded-xl"
                required
              />

            </div>

            {/* COMPANY */}
            <div>

              <label className="font-medium text-sm">
                Company Name
              </label>

              <input
                type="text"
                name="companyName"
                placeholder="Bima Properties"
                value={form.companyName}
                onChange={handleChange}
                className="w-full mt-2 border border-gray-300 focus:border-black outline-none p-4 rounded-xl"
                required
              />

            </div>

            {/* EMAIL */}
            <div>

              <label className="font-medium text-sm">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="example@mail.com"
                value={form.email}
                onChange={handleChange}
                className="w-full mt-2 border border-gray-300 focus:border-black outline-none p-4 rounded-xl"
                required
              />

            </div>

            {/* PHONE */}
            <div>

              <label className="font-medium text-sm">
                Phone Number
              </label>

              <input
                type="text"
                name="phone"
                placeholder="+234..."
                value={form.phone}
                onChange={handleChange}
                className="w-full mt-2 border border-gray-300 focus:border-black outline-none p-4 rounded-xl"
                required
              />

            </div>

            {/* PASSWORDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>

                <label className="font-medium text-sm">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  placeholder="********"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full mt-2 border border-gray-300 focus:border-black outline-none p-4 rounded-xl"
                  required
                />

              </div>

              <div>

                <label className="font-medium text-sm">
                  Confirm Password
                </label>

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="********"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="w-full mt-2 border border-gray-300 focus:border-black outline-none p-4 rounded-xl"
                  required
                />

              </div>

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#3f5873] text-white p-4 rounded-xl hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >

              {loading
                ? "Creating Account..."
                : "Create Merchant Account"}

            </button>

          </form>

          {/* LOGIN LINK */}
          <p className="text-center text-gray-500 mt-6">

            Already have an account?

            <Link
              href="/admin/login"
              className="text-black font-semibold ml-2 hover:underline"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>

  );

}