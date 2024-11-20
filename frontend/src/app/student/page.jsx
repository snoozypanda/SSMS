import React from "react";

export default function Page() {
  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-blue-900 dark:bg-blue-900">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-black rounded-lg hover:bg-blue-700 group"
              >
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-black rounded-lg hover:bg-blue-700 group"
              >
                <span className="ms-3">Teachers</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-black rounded-lg hover:bg-blue-700 group"
              >
                <span className="ms-3">Students</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-black rounded-lg hover:bg-blue-700 group"
              >
                <span className="ms-3">Settings and Profile</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-black rounded-lg hover:bg-blue-700 group"
              >
                <span className="ms-3">Billing</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-black rounded-lg hover:bg-blue-700 group"
              >
                <span className="ms-3">Exams</span>
              </a>
            </li>
            <li>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 sm:ml-64 bg-white h-screen transition-transform -translate-x-full sm:translate-x-0">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-black">Students</h1>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Export CSV
            </button>
            <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800">
              Add Student
            </button>
          </div>
        </div>

        {/* Search Bar and Filter */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search by email"
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
            <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">
              Add Filter
            </button>
          </div>
        </div>

        {/* Placeholder Content */}
        <div className="flex flex-col items-center justify-center h-64 bg-gray-50 rounded-lg shadow">
          <img
            src="https://via.placeholder.com/150"
            alt="No students"
            className="w-24 h-24 mb-4"
          />
          <p className="text-black text-lg font-medium">
            No students at this time
          </p>
          <p className="text-black text-sm">
            Students will appear here after they enroll in your school.
          </p>
        </div>
      </main>
    </>
  );
}
