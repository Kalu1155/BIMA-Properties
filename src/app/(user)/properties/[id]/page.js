"use client";

import { useEffect, useState, use } from "react";

export default function PropertyDetails({ params }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const [property, setProperty] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const dummyProperties = [
      {
        _id: "1",
        name: "Test House",
        city: "Abuja",
        price: "5000000",
        description: "A beautiful house in Abuja",
        images: ["https://via.placeholder.com/600"],
        bedroom: 3,
        bathroom: 2,
      },
      {
        _id: "2",
        name: "Luxury Apartment",
        city: "Lagos",
        price: "12000000",
        description: "Luxury apartment in Lagos",
        images: ["https://via.placeholder.com/600"],
        bedroom: 4,
        bathroom: 3,
      },
    ];

    const foundProperty = dummyProperties.find(
      (item) => item._id === id
    );

    setProperty(foundProperty);
  }, [id]);

  function handleBooking() {
    if (!date || !time) {
      alert("Please select date and time");
      return;
    }

    console.log({
      property_id: property._id,
      date,
      time,
      message,
    });

    alert("Appointment booked (demo)");

    setDate("");
    setTime("");
    setMessage("");
    setShowForm(false);
  }

  if (!property) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{property.name}</h1>

      <img
        src={property.images?.[0]}
        alt={property.name}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
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
          padding: "10px",
          background: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Book Appointment
      </button>

      {/* ✅ FORM */}
      {showForm && (
        <div style={{ marginTop: "20px" }}>
          <h3>Book Appointment</h3>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{ display: "block", marginBottom: "10px" }}
          />

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            style={{ display: "block", marginBottom: "10px" }}
          />

          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ display: "block", marginBottom: "10px" }}
          />

          <button
            onClick={handleBooking}
            style={{
              padding: "10px",
              background: "green",
              color: "white",
              border: "none",
            }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}