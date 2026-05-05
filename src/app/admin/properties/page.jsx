"use client";

import Link from "next/link";
import { useState } from "react";
import AddPropertyModal from "@/components/admin/AddPropertyModal";
import { LuSearch,LuPlus} from "react-icons/lu";
import { CgMoreVertical } from "react-icons/cg";

export default function PropertiesPage() {

  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  // TEMP DATA
  const properties = [
    {
      id: 1,
      title: "Luxury Duplex",
      location: "Abuja",
      price: "₦450,000,000",
      status: "Active",
    },
    {
      id: 2,
      title: "Modern Apartment",
      location: "Lagos",
      price: "₦120,000,000",
      status: "Pending",
    },
    {
      id: 3,
      title: "Beach House",
      location: "Lekki",
      price: "₦780,000,000",
      status: "Sold",
    },
  ];

  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        <div>
          <h1 className="text-3xl font-bold">
            Properties
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all property listings.
          </p>
        </div>
<button
  onClick={() => setOpenModal(true)}
  className="bg-[#3f5873] text-white px-5 py-3 rounded-xl flex items-center gap-2 w-fit hover:opacity-90 transition"
>
  <LuPlus size={18} />
  Add Property
</button>
        {/* <Link
          href="/admin/properties/create"
          className="bg-[#3f5873] text-white px-5 py-3 rounded-xl flex items-center gap-2 w-fit hover:opacity-90 transition"
        >
          <LuPlus size={18} />
          Add Property
        </Link> */}

      </div>

      {/* SEARCH + FILTER */}
      <div className="bg-white p-5 rounded-2xl border border-[#e5e7eb] shadow-sm mb-6">

        <div className="flex flex-col md:flex-row gap-4">

          <div className="flex items-center border border-[#e5e7eb] rounded-xl px-4 flex-1">
            <LuSearch size={18} className="text-gray-400" />

            <input
              type="text"
              placeholder="Search property..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-3 outline-none"
            />
          </div>

          <select className="border border-[#e5e7eb] rounded-xl px-4 py-3 outline-none">
            <option>All Status</option>
            <option>Active</option>
            <option>Pending</option>
            <option>Sold</option>
          </select>

        </div>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl border border-[#e5e7eb] shadow-sm overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-50 border border-[#e5e7eb]">

              <tr>

                <th className="text-left p-5 font-semibold">
                  Property
                </th>

                <th className="text-left p-5 font-semibold">
                  Location
                </th>

                <th className="text-left p-5 font-semibold">
                  Price
                </th>

                <th className="text-left p-5 font-semibold">
                  Status
                </th>

                <th className="text-left p-5 font-semibold">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredProperties.map((property) => (

                <tr
                  key={property.id}
                  className="border border-[#e5e7eb] hover:bg-gray-50 transition"
                >

                  <td className="p-5 font-medium">
                    {property.title}
                  </td>

                  <td className="p-5 text-gray-600">
                    {property.location}
                  </td>

                  <td className="p-5">
                    {property.price}
                  </td>

                  <td className="p-5">

                    <span
                      className={`
                        px-3 py-1 rounded-full text-sm font-medium

                        ${
                          property.status === "Active"
                            ? "bg-green-100 text-green-600"
                            : property.status === "Pending"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-red-100 text-red-600"
                        }
                      `}
                    >
                      {property.status}
                    </span>

                  </td>

                  <td className="p-5">

                    <button className="hover:bg-gray-100 p-2 rounded-lg transition">
                      <CgMoreVertical size={18} />
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
<AddPropertyModal
  open={openModal}
  setOpen={setOpenModal}
/>
    </div>
  );
}