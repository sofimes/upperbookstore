import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const AdminDashboard = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => setDrawerVisible(!drawerVisible);

  return (
    <div className="lg:mt-16 pt-1 mt-11 flex">
      {/* Sidebar for large screens */}
      <div className="hidden lg:block w-64 bg-gray-900 text-white h-screen fixed left-0 top-0 pt-20">
        <div className="text-white text-center py-4 text-lg font-bold">
          Admin Panel
        </div>

        <ul className="space-y-3 px-4">
          <li>
            <Link
              to="/admin-dashboard/book-management"
              className="block p-2 rounded hover:bg-gray-700"
            >
              Book Management
            </Link>
          </li>
          <li>
            <Link
              to="/admin-dashboard/user-management"
              className="block p-2 rounded hover:bg-gray-700"
            >
              User Management
            </Link>
          </li>
          <li>
            <Link
              to="/admin-dashboard/add-book"
              className="block p-2 rounded hover:bg-gray-700"
            >
              Add Book
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {drawerVisible && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="lg:hidden fixed top-0 left-0 w-64 h-full bg-gray-900 text-white z-50 pt-16"
          >
            <button
              onClick={toggleDrawer}
              className="text-white text-2xl font-bold "
              aria-label="Close drawer"
            >
              <span className="pl-2 lg:hidden text-3xl font-bold">X</span>
            </button>
            <div className="text-white text-center py-4 text-lg font-bold">
              Admin Panel
            </div>

            <ul className="space-y-3 px-4">
              <li>
                <Link
                  to="/admin-dashboard/book-management"
                  className="block p-2 rounded hover:bg-gray-700"
                  onClick={toggleDrawer}
                >
                  Book Management
                </Link>
              </li>
              <li>
                <Link
                  to="/admin-dashboard/user-management"
                  className="block p-2 rounded hover:bg-gray-700"
                  onClick={toggleDrawer}
                >
                  User Management
                </Link>
              </li>
              <li>
                <Link
                  to="/admin-dashboard/add-book"
                  className="block p-2 rounded hover:bg-gray-700"
                  onClick={toggleDrawer}
                >
                  Add Book
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 w-full">
        {/* Header */}
        <div className="bg-white shadow-md px-6 py-4 flex items-center justify-between  w-full lg:w-[calc(100%-16rem)]">
          <button
            onClick={toggleDrawer}
            className="lg:hidden text-3xl font-bold"
          >
            ☰
          </button>

          <h2 className="text-2xl font-bold">Admin Dashboard</h2>

          <Link to="#">Logout</Link>
        </div>

        {/* Content */}
        <div className="p-6 bg-gray-100 mt-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
