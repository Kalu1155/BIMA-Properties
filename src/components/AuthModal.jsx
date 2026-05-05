"use client";
import { useState, useEffect } from "react";

const BASE_URL = "http://property.reworkstaging.name.ng/v1";

export default function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const initialForm = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
  };

  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (!isOpen) {
      setForm(initialForm);
      setError("");
      setIsLogin(true);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // REGISTER
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data?.message || "Registration failed");

      alert("Account has been successfully created");
      setIsLogin(true);

    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data?.message || "Login failed");

      const userData = data.user || data;

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(userData));

      // 🔥 Notify entire app
      window.dispatchEvent(new Event("authChanged"));

      alert("Login successful");
      onClose();

    } catch (err) {
      setError(err.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-[90%] max-w-md rounded-2xl shadow-lg p-6 relative">

        <button onClick={onClose} className="absolute top-3 right-3">
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center mb-4 text-[#2C3E50]">
          {isLogin ? "Sign In" : "Create Account"}
        </h2>

        <form
          onSubmit={isLogin ? handleLogin : handleRegister}
          className="flex flex-col gap-3"
        >
          {!isLogin && (
            <>
              <input name="first_name" value={form.first_name} onChange={handleChange} placeholder="First Name" className="border p-2 rounded-lg" />
              <input name="last_name" value={form.last_name} onChange={handleChange} placeholder="Last Name" className="border p-2 rounded-lg" />
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="border p-2 rounded-lg" />
            </>
          )}

          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="border p-2 rounded-lg" />
          <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" className="border p-2 rounded-lg" />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button disabled={loading} className="bg-[#2C3E50] text-white py-2 rounded-lg">
            {loading ? "Please wait..." : isLogin ? "Sign In" : "Register"}
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#2C3E50] cursor-pointer ml-1"
          >
            {isLogin ? "Register" : "Sign In"}
          </span>
        </p>
      </div>
    </div>
  );
}