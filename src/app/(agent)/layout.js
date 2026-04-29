
export default function AgentLayout({ children }) {
    return (
        <div className="flex min-h-screen">
            {/* sidebar */}
            <aside className="w-64 bg-gray-800 text-white p-4">
                <h2 className="text-2xl font-bold mb-6">Agent Panel</h2>
                <ul>
                    <li className="mb-4">
                        <a href="/admin/dashboard" className="hover:text-gray-400">My Listing</a>
                    </li>
                    <li className="mb-4">
                        <a href="/admin/users" className="hover:text-gray-400">Add porperty</a>
                    </li>
                    <li className="mb-4">
                        <a href="/admin/settings" className="hover:text-gray-400">messenger</a>
                    </li>
                </ul>
            </aside>
            {/* Content */}
        <main className="flex-1 p-6 bg-[#E3f2fd] text-[#374151]">
            {children}
        </main>
        </div>

    )
}