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
                className="flex items-center p-2 text-gray-200 rounded-lg hover:bg-blue-700 group"
              >
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-200 rounded-lg hover:bg-blue-700 group"
              >
                <span className="ms-3">Teachers</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-200 rounded-lg hover:bg-blue-700 group"
              >
                <span className="ms-3">Students</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-200 rounded-lg hover:bg-blue-700 group"
              >
                <span className="ms-3">Settings and Profile</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-200 rounded-lg hover:bg-blue-700 group"
              >
                <span className="ms-3">Billing</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-200 rounded-lg hover:bg-blue-700 group"
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
      <main className="flex-1 p-6 sm:ml-64 bg-white flex space-x-6  h-screen transition-transform -translate-x-full sm:translate-x-0">
        {/* Left Section - Table */}
        <div className="flex-1 bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold text-black mb-4">Student List</h2>
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left text-black">Name</th>
                <th className="px-4 py-2 text-left text-black">Student ID</th>
                <th className="px-4 py-2 text-left text-black">Email</th>
                <th className="px-4 py-2 text-left text-black">Class</th>
                <th className="px-4 py-2 text-left text-black">Gender</th>
              </tr>
            </thead>
            <tbody>
              {/* Student Rows */}
              <tr>
                <td className="px-4 py-2 text-black">Eneh Mercy</td>
                <td className="px-4 py-2 text-black">547030</td>
                <td className="px-4 py-2 text-black">michelle.rivera@example.com</td>
                <td className="px-4 py-2 text-black">J SS 2</td>
                <td className="px-4 py-2 text-black">Female</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-black">Marvin McKinney</td>
                <td className="px-4 py-2 text-black">877037</td>
                <td className="px-4 py-2 text-black">kenzi.lawson@example.com</td>
                <td className="px-4 py-2 text-black">JSS 3</td>
                <td className="px-4 py-2 text-black">Female</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-black">Brooklyn Simmons</td>
                <td className="px-4 py-2 text-black">370357</td>
                <td className="px-4 py-2 text-black">nathan.roberts@example.com</td>
                <td className="px-4 py-2 text-black">SS 3</td>
                <td className="px-4 py-2 text-black">Female</td>
              </tr>
              {/* Add more student rows similarly */}
            </tbody>
          </table>
        </div>

        {/* Right Section - Student Details (Pictures and About) */}
        <div className="w-1/3 bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold text-black mb-4">Student Details</h2>

          {/* Student 1 */}
          <div className="mb-4 flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/40"
              alt="Eneh Mercy"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold text-black">Eneh Mercy</h3>
              <p className="text-sm text-black">J SS 2 | Female</p>
              <p className="text-sm text-black mt-2">
                Eneh is a bright student with a passion for science and a strong interest in extracurricular activities.
              </p>
            </div>
          </div>

          {/* Student 2 */}
          <div className="mb-4 flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/40"
              alt="Marvin McKinney"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold text-black">Marvin McKinney</h3>
              <p className="text-sm text-black">JSS 3 | Female</p>
              <p className="text-sm text-black mt-2">
                Marvin is a dedicated student who excels in mathematics and loves participating in school clubs.
              </p>
            </div>
          </div>

          {/* Student 3 */}
          <div className="mb-4 flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/40"
              alt="Brooklyn Simmons"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold text-black">Brooklyn Simmons</h3>
              <p className="text-sm text-black">SS 3 | Female</p>
              <p className="text-sm text-black mt-2">
                Brooklyn is passionate about arts and is a natural leader in group activities.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
