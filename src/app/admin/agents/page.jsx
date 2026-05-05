"use client";

import { useState } from "react";
import { LuSearch,LuPlus } from "react-icons/lu";
import { CgMoreVertical } from "react-icons/cg";
import Link from "next/link";
import AddAgentModal from "@/components/admin/AddAgentModal";

export default function AgentsPage() {

  const [openModal, setOpenModal] = useState(false);

  const [search, setSearch] = useState("");

  // TEMP DATA
  const agents = [
    {
      id: 1,
      name: "John Doe",
      email: "john@bima.com",
      phone: "+234 810 000 0000",
      role: "Senior Agent",
      status: "Active",
    },
    {
      id: 2,
      name: "Sarah Mike",
      email: "sarah@bima.com",
      phone: "+234 902 111 2222",
      role: "Agent",
      status: "Inactive",
    },
    {
      id: 3,
      name: "David James",
      email: "david@bima.com",
      phone: "+234 803 222 3333",
      role: "Manager",
      status: "Active",
    },
  ];

  const filteredAgents = agents.filter((agent) =>
    agent.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        <div>
          <h1 className="text-3xl font-bold">
            Agents
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all property agents.
          </p>
        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="bg-[#3f5873] text-white px-5 py-3 rounded-xl flex items-center gap-2 hover:opacity-90 transition"
        >
          <LuPlus size={18} />
          Add Agent
        </button>

      </div>

      {/* SEARCH */}
      <div className="bg-white rounded-2xl border border-[#e5e7eb] shadow-sm p-5 mb-6">

        <div className="flex items-center border border-[#e5e7eb] rounded-xl px-4">

          <LuSearch size={18} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search agents..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 outline-none"
          />

        </div>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl border border-[#e5e7eb] shadow-sm overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-50 border-b border-[#e5e7eb]">

              <tr>

                <th className="text-left p-5 font-semibold">
                  Agent
                </th>

                <th className="text-left p-5 font-semibold">
                  Phone
                </th>

                <th className="text-left p-5 font-semibold">
                  Role
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

              {filteredAgents.map((agent) => (

                <tr
                  key={agent.id}
                  className="border-b border-[#e5e7eb] hover:bg-gray-50 transition"
                >

                  {/* AGENT */}
                  <td className="p-5">

                    <Link href={`/admin/agents/${agent.id}`}>

  <div className="flex items-center gap-4 cursor-pointer">

    <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold">
      {agent.name.charAt(0)}
    </div>

    <div>
      <h3 className="font-semibold hover:underline">
        {agent.name}
      </h3>

      <p className="text-sm text-gray-500">
        {agent.email}
      </p>
    </div>

  </div>

</Link>

                  </td>

                  {/* PHONE */}
                  <td className="p-5 text-gray-600">
                    {agent.phone}
                  </td>

                  {/* ROLE */}
                  <td className="p-5">
                    {agent.role}
                  </td>

                  {/* STATUS */}
                  <td className="p-5">

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium

                      ${
                        agent.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }
                      `}
                    >
                      {agent.status}
                    </span>

                  </td>

                  {/* ACTIONS */}
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

      {/* MODAL */}
      <AddAgentModal
        open={openModal}
        setOpen={setOpenModal}
      />

    </div>
  );
}