"use client";

import { LuMail,LuPhone,LuMapPin  } from "react-icons/lu";
import { FaRegCheckCircle } from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";

export default function SingleAgentPage() {

  // TEMP AGENT DATA
  const agent = {
    id: 1,
    name: "John Doe",
    email: "john@bima.com",
    phone: "+234 810 000 0000",
    role: "Senior Agent",
    status: "Active",
    location: "Abuja, Nigeria",
    joined: "12 Jan 2026",
    totalProperties: 12,
    approvedProperties: 8,
    pendingProperties: 4,
  };

  // TEMP PROPERTY DATA
  const properties = [
    {
      id: 1,
      title: "Luxury Duplex",
      location: "Abuja",
      price: "₦450,000,000",
      approved: true,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      id: 2,
      title: "Modern Apartment",
      location: "Lekki",
      price: "₦180,000,000",
      approved: false,
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    },
  ];

  return (
    <div className="space-y-8">

      {/* TOP SECTION */}
      <div className="bg-white rounded-3xl border shadow-sm p-6">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          {/* PROFILE */}
          <div className="flex items-center gap-5">

            <div className="w-24 h-24 rounded-full bg-black text-white flex items-center justify-center text-3xl font-bold">
              J
            </div>

            <div>

              <div className="flex items-center gap-3 flex-wrap">

                <h1 className="text-3xl font-bold">
                  {agent.name}
                </h1>

                <span
                  className={`
                    px-4 py-1 rounded-full text-sm font-medium

                    ${
                      agent.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }
                  `}
                >
                  {agent.status}
                </span>

              </div>

              <p className="text-gray-500 mt-1">
                {agent.role}
              </p>

              {/* CONTACTS */}
              <div className="flex flex-wrap gap-5 mt-4 text-gray-600 text-sm">

                <div className="flex items-center gap-2">
                  <LuMail size={16} />
                  {agent.email}
                </div>

                <div className="flex items-center gap-2">
                  <LuPhone size={16} />
                  {agent.phone}
                </div>

                <div className="flex items-center gap-2">
                  <LuMapPin size={16} />
                  {agent.location}
                </div>

              </div>

            </div>

          </div>

          {/* JOINED */}
          <div className="bg-gray-100 rounded-2xl px-6 py-4">

            <p className="text-gray-500 text-sm">
              Joined
            </p>

            <h3 className="font-bold text-lg mt-1">
              {agent.joined}
            </h3>

          </div>

        </div>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        <div className="bg-white rounded-2xl border p-6 shadow-sm">

          <p className="text-gray-500 text-sm">
            Total Properties
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {agent.totalProperties}
          </h2>

        </div>

        <div className="bg-white rounded-2xl border p-6 shadow-sm">

          <p className="text-gray-500 text-sm">
            Approved Listings
          </p>

          <h2 className="text-4xl font-bold mt-3 text-green-600">
            {agent.approvedProperties}
          </h2>

        </div>

        <div className="bg-white rounded-2xl border p-6 shadow-sm">

          <p className="text-gray-500 text-sm">
            Pending Listings
          </p>

          <h2 className="text-4xl font-bold mt-3 text-yellow-500">
            {agent.pendingProperties}
          </h2>

        </div>

      </div>

      {/* PROPERTIES */}
      <div className="bg-white rounded-3xl border shadow-sm p-6">

        <div className="flex items-center justify-between mb-8">

          <div>
            <h2 className="text-2xl font-bold">
              Agent Properties
            </h2>

            <p className="text-gray-500 mt-1">
              Listings created by this agent.
            </p>
          </div>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {properties.map((property) => (

            <div
              key={property.id}
              className="border rounded-3xl overflow-hidden hover:shadow-xl transition"
            >

              {/* IMAGE */}
              <img
                src={property.image}
                alt=""
                className="w-full h-56 object-cover"
              />

              {/* CONTENT */}
              <div className="p-5">

                <div className="flex items-start justify-between gap-3">

                  <div>
                    <h3 className="font-bold text-lg">
                      {property.title}
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                      {property.location}
                    </p>
                  </div>

                  {/* STATUS */}
                  <div>

                    {property.approved ? (

                      <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                        <FaRegCheckCircle size={14} />
                        Approved
                      </span>

                    ) : (

                      <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                        <FiXCircle size={14} />
                        Pending
                      </span>

                    )}

                  </div>

                </div>

                <h2 className="text-2xl font-bold mt-5">
                  {property.price}
                </h2>

                {/* ACTIONS */}
                <div className="flex gap-3 mt-6">

                  <button className="flex-1 border py-3 rounded-xl hover:bg-gray-100 transition">
                    View
                  </button>

                  <button
                    className={`
                      flex-1 py-3 rounded-xl text-white transition

                      ${
                        property.approved
                          ? "bg-red-500 hover:bg-red-600"
                          : "bg-black hover:opacity-90"
                      }
                    `}
                  >
                    {property.approved
                      ? "Reject"
                      : "Approve"}
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}