
export default function AdminLayout({ children }) {
    return (
        <div className="flex min-h-screen">
            {/* sidebar */}
            <aside className="w-64 bg-gray-800 text-white p-4">
                <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
                <ul>
                    <li className="mb-4">
                        <a href="/admin/dashboard" className="hover:text-gray-400">Dashboard</a>
                    </li>
                    <li className="mb-4">
                        <a href="/admin/users" className="hover:text-gray-400">Users</a>
                    </li>
                    <li className="mb-4">
                        <a href="/admin/settings" className="hover:text-gray-400">Settings</a>
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