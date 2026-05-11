"use client";

import { useEffect, useState } from "react";

export default function PropertyDetails({ params }) {
  const id = params.id;

  const [property, setProperty] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  // ✅ Fetch Property
  useEffect(() => {
    fetchProperty();
  }, [id]);

  async function fetchProperty() {
    try {
      const tokenRes = await fetch(
        "http://property.reworkstaging.name.ng/v1/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "test@gmail.com",
          }),
        }
      );

      const tokenData = await tokenRes.json();

      const res = await fetch(
        `http://property.reworkstaging.name.ng/v1/properties/${id}`,
        {
          headers: {
            Authorization: `Bearer ${tokenData.token}`,
          },
        }
      );

      const data = await res.json();
      console.log("PROPERTY:", data);

      setProperty(data.data);
    } catch (err) {
      console.log(err);
    }
  }

  // ✅ Handle Booking
  async function handleBooking() {
    if (!date || !time) {
      alert("Please select date and time");
      return;
    }

    setLoading(true);

    try {
      const tokenRes = await fetch(
        "http://property.reworkstaging.name.ng/v1/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "test@gmail.com",
          }),
        }
      );

      const tokenData = await tokenRes.json();

      const res = await fetch(
        "http://property.reworkstaging.name.ng/v1/bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenData.token}`,
          },
          body: JSON.stringify({
            property_id: property._id,
            date,
            time,
            message,
          }),
        }
      );

      const data = await res.json();
      console.log("BOOKING:", data);

      alert("Booking successful!");

      // reset form
      setDate("");
      setTime("");
      setMessage("");
      setShowForm(false);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }

    setLoading(false);
  }

  if (!property) return <p style={{ padding: "20px" }}>Loading...</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>{property.name}</h1>

      <img
        src={property.images?.[0]}
        alt={property.name}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <p><strong>City:</strong> {property.city}</p>
      <p><strong>Price:</strong> ₦{property.price}</p>
      <p><strong>Description:</strong> {property.description}</p>

      <p>🛏 {property.bedroom} Bedrooms</p>
      <p>🛁 {property.bathroom} Bathrooms</p>

      {/* ✅ BUTTON */}
      <button
        onClick={() => setShowForm(!showForm)}
        style={{
          marginTop: "20px",
          padding: "12px 16px",
          background: "#2C3E50",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Schedule Property Tour
      </button>

      {/* ✅ BOOKING FORM */}
      {showForm && (
        <div style={{ marginTop: "20px" }}>
          <h3>Schedule a Visit</h3>

          <p style={{ color: "gray", fontSize: "14px" }}>
            Choose a convenient date and time to visit this property
          </p>

          <input
            type="date"
            value={date}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setDate(e.target.value)}
            style={{
              display: "block",
              marginTop: "10px",
              marginBottom: "10px",
              padding: "8px",
              width: "100%",
            }}
          />

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            style={{
              display: "block",
              marginBottom: "10px",
              padding: "8px",
              width: "100%",
            }}
          />

          <textarea
            placeholder="Message (optional)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              display: "block",
              marginBottom: "10px",
              padding: "8px",
              width: "100%",
            }}
          />

          <button
            onClick={handleBooking}
            disabled={loading}
            style={{
              padding: "10px",
              background: loading ? "gray" : "green",
              color: "white",
              border: "none",
              cursor: "pointer",
              width: "100%",
            }}
          >
            {loading ? "Booking..." : "Confirm Booking"}
          </button>
        </div>
      )}
    </div>
  );
}