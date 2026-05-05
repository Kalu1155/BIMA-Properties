export default function DashboardPage() {
  return (
    <div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back to Bima Properties admin system.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#e5e7eb]">
          <h3 className="text-gray-500 text-sm">
            Total Properties
          </h3>

          <p className="text-3xl font-bold mt-3">
            245
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#e5e7eb]">
          <h3 className="text-gray-500 text-sm">
            Active Agents
          </h3>

          <p className="text-3xl font-bold mt-3">
            42
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#e5e7eb]">
          <h3 className="text-gray-500 text-sm">
            Pending Listings
          </h3>

          <p className="text-3xl font-bold mt-3">
            19
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#e5e7eb]">
          <h3 className="text-gray-500 text-sm">
            Messages
          </h3>

          <p className="text-3xl font-bold mt-3">
            87
          </p>
        </div>

      </div>

      {/* ACTIVITY */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#e5e7eb] mt-8">

        <h2 className="text-xl font-semibold mb-5">
          Recent Activity
        </h2>

        <div className="space-y-4 text-gray-600">

          <div className="flex justify-between border-b border-[#e5e7eb] pb-3">
            <p>New property uploaded</p>
            <span>2 mins ago</span>
          </div>

          <div className="flex justify-between  border-b border-[#e5e7eb] pb-3">
            <p>Agent registration approved</p>
            <span>10 mins ago</span>
          </div>

          <div className="flex justify-between pb-3">
            <p>Client inquiry received</p>
            <span>1 hour ago</span>
          </div>

        </div>

      </div>

    </div>
  );
}