const HomePage = () => {
  return <div></div>;
};

<<<<<<< HEAD
export default HomePage;
=======
export default function Page() {
  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-custom-color-blue-900 ">
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
                <span className="ms-3">Grade Report</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-black rounded-lg hover:bg-blue-700 group"
              >
                <span className="ms-3">Registered courses</span>
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
                <span className="ms-3"> Exams</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-black rounded-lg hover:bg-blue-700 group"
              >
                <span className="ms-3"> </span>
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

      <main className="flex-1 p-6 sm:ml-64 bg-white h-screen transition-transform -translate-x-full sm:translate-x-0">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-black">Welcome, Student</h1>
          <div className="flex items-center space-x-4"></div>
        </div>

        {/* Search Bar and Filter */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search your courses"
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
            <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">
              Search
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Courses Section */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold text-black mb-4">Your Courses</h2>
            <p className="text-gray-700">No courses enrolled yet.</p>
          </div>

          {/* Grades Section */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold text-black mb-4">Your Grades</h2>
            <p className="text-gray-700">
              Grades will appear here once available.
            </p>
          </div>

          {/* Assignments Section */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold text-black mb-4">Assignments</h2>
            <p className="text-gray-700">No assignments at this time.</p>
          </div>
        </div>
      </main>
    </>
  );
}
>>>>>>> ea73edc70270e91b8d04df33b6f68ee6615eddf9
