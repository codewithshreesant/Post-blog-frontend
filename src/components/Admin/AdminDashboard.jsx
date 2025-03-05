import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
const AdminDashboard = () => {

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="bg-gray-800 text-white w-64 min-h-screen fixed">
                <div className="p-4">
                    <h2 className="text-2xl font-semibold">Admin Panel</h2>
                </div>
                <nav className="mt-4">
                    <Link to='/admin/dashboard'>
                        <button
                            className={`block py-2 px-4 w-full text-left hover:bg-gray-700 `}
                        >
                            Dashboard
                        </button>
                    </Link>
                    <Link to='/admin/dashboard/users'>
                        <button
                            className={`block py-2 px-4 w-full text-left hover:bg-gray-700 `}
                        >
                            Users
                        </button>
                    </Link>
                    <Link to='/admin/dashboard/blogs'>
                        <button
                            className={`block py-2 px-4 w-full text-left hover:bg-gray-700 `}
                        >
                            Blogs
                        </button>
                    </Link>
                    <Link to='/admin/dashboard/contacts'>
                        <button
                            className={`block py-2 px-4 w-full text-left hover:bg-gray-700 `}
                        >
                            Contact
                        </button>
                    </Link>
                    <Link to='/admin/dashboard/comments'>
                        <button
                            className={`block py-2 px-4 w-full text-left hover:bg-gray-700 `}
                        >
                            Comments 
                        </button>
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="ml-64 p-8">


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white p-6 rounded shadow">
                        <h2 className="text-lg font-semibold mb-2">Total Users</h2>
                        <p className="text-4xl">1,234</p>
                    </div>
                    <div className="bg-white p-6 rounded shadow">
                        <h2 className="text-lg font-semibold mb-2">Total Blogs</h2>
                        <p className="text-4xl">567</p>
                    </div>
                    <div className="bg-white p-6 rounded shadow">
                        <h2 className="text-lg font-semibold mb-2">Total Contacts</h2>
                        <p className="text-4xl">$10,000</p>
                    </div>
                </div>

                <Outlet />


            </main>
        </div>
    );
};

export default AdminDashboard;