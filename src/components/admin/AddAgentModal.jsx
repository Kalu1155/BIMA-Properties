"use client";

import { useState } from "react";
import { LuX } from "react-icons/lu";

export default function AddAgentModal({
  open,
  setOpen,
}) {

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phone: "",
    role: "",
    password: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(form);

    // future API integration
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm overflow-y-auto">

      <div className="min-h-screen flex items-center justify-center p-4">

        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden">

          {/* HEADER */}
          <div className="flex items-center justify-between p-6  border-b border-[#e5e7eb]">

            <div>
              <h2 className="text-2xl font-bold">
                Add Agent
              </h2>

              <p className="text-gray-500 mt-1">
                Create a new property agent.
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center"
            >
              <LuX />
            </button>

          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="p-6 space-y-5"
          >

            {/* NAME */}
            <div>
              <label className="font-medium">
                Full Name
              </label>

              <input
                type="text"
                name="fullname"
                value={form.fullname}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full mt-2 border border-[#e5e7eb] rounded-xl p-4 outline-none "
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="font-medium">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full mt-2 border border-[#e5e7eb] rounded-xl p-4 outline-none focus:border-black"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="font-medium">
                Phone Number
              </label>

              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+234..."
                className="w-full mt-2 border border-[#e5e7eb] rounded-xl p-4 outline-none "
              />
            </div>

            {/* ROLE */}
            <div>
              <label className="font-medium">
                Role
              </label>

              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full mt-2 border border-[#e5e7eb] rounded-xl p-4 outline-none"
              >
                <option value="">Select Role</option>
                <option>Agent</option>
                <option>Senior Agent</option>
                <option>Manager</option>
              </select>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="font-medium">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="********"
                className="w-full mt-2 border border-[#e5e7eb] rounded-xl p-4 outline-none"
              />
            </div>

            {/* STATUS */}
            <div>
              <label className="font-medium">
                Status
              </label>

              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full mt-2 border border-[#e5e7eb] rounded-xl p-4 outline-none"
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            {/* FOOTER */}
            <div className="flex justify-end gap-4 pt-5 border-t">

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="border px-5 py-3 rounded-xl hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="bg-black text-white px-5 py-3 rounded-xl hover:opacity-90"
              >
                Create Agent
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
}