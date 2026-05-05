"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function PropertiesPage() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  async function fetchProperties() {
    try {
      // STEP 1: Get token (kept for future real API use)
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
      const token = tokenData.token;

      // STEP 2: Get properties (real API - currently ignored since you're using dummy data)
      await fetch(
        "http://property.reworkstaging.name.ng/v1/properties?verified=true",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // STEP 3: Dummy data (for now)
      setProperties([
        {
          _id: "1",
          name: "Test House",
          city: "Abuja",
          price: "5000000",
          images: ["https://via.placeholder.com/300"],
        },
        {
          _id: "2",
          name: "Luxury Apartment",
          city: "Lagos",
          price: "12000000",
          images: ["https://via.placeholder.com/300"],
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>
        Available Properties
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {properties.map((item) => (
          <Link href={`/properties/${item._id}`} key={item._id}>
            <div
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                cursor: "pointer",
                borderRadius: "8px",
              }}
            >
              <img
                src={item.images?.[0] || "/placeholder.jpg"}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "6px",
                }}
              />

              <h2>{item.name}</h2>
              <p>{item.city}</p>
              <p>₦{item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}