"use client";

import Link from "next/link";

export default function PropertyCard({ property }) {
  return (
    <Link href={`/properties/${property._id}`}>
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">
        
        <img
          src={property.images?.[0] || "/placeholder.jpg"}
          alt={property.name}
          className="w-full h-48 object-cover"
        />

        <div className="p-4">
          <h2 className="text-lg font-semibold">
            {property.name}
          </h2>

          <p className="text-sm text-gray-500">
            {property.city}, {property.state}
          </p>

          <p className="text-xl font-bold mt-2">
            ₦{property.price}
          </p>

          <div className="flex justify-between text-sm mt-2 text-gray-600">
            <span>{property.bedroom} Beds</span>
            <span>{property.bathroom} Baths</span>
          </div>
        </div>
      </div>
    </Link>
  );
}