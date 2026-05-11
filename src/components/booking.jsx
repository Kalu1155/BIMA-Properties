"use client";
import { useState } from "react";

export default function BookingModal({ isOpen, onClose, propertyId }) {
  const [form, setForm] = useState({
    date: "",
    time: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/bookings", {
      method: "POST",
      body: JSON.stringify({
        ...form,
        propertyId,
      }),
    });

    const data = await res.json();
    console.log(data);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-[400px]">
        <h2 className="text-xl font-bold mb-4">Book Inspection</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="date"
            required
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="border p-2 rounded"
          />

          <input
            type="time"
            required
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            className="border p-2 rounded"
          />

          <textarea
            placeholder="Message (optional)"
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="border p-2 rounded"
          />

          <button className="bg-[#2C3E50] text-white py-2 rounded">
            Confirm Booking
          </button>
        </form>

        <button onClick={onClose} className="mt-3 text-sm text-gray-500">
          Cancel
        </button>
      </div>
    </div>
  );
}