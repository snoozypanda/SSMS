import React from 'react'

const AdminSideBar = () => {
  return (
      <div className="w-64 bg-gray-800 text-white fixed h-full flex flex-col">

        <div className="flex items-center justify-center py-5 px-4">
          <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Profile Image" className="w-12 h-12 rounded-full border-2 border-white mr-3" />
          <div className="text-white">
            <p className="text-lg font-semibold">John Doe</p>
            <p className="text-sm text-gray-400">Admin</p>
          </div>
        </div>

        <ul className="space-y-4 mt-10 px-4">
          <li><a href="/admin" className="block py-2 px-4 text-gray-300 hover:bg-gray-700 rounded">Dashboard</a></li>
          <li><a href="/admin/students" className="block py-2 px-4 text-gray-300 hover:bg-gray-700 rounded">Student</a></li>
          <li><a href="/admin/teachers" className="block py-2 px-4 text-gray-300 hover:bg-gray-700 rounded">Teachers</a></li>
          <li><a href="/admin/courses" className="block py-2 px-4 text-gray-300 hover:bg-gray-700 rounded">Courses</a></li>
          <li><a href="/admin/profile" className="block py-2 px-4 text-gray-300 hover:bg-gray-700 rounded">Profile</a></li>
        </ul>
        
        <div className="mt-auto px-4 py-2">
          <a
           href="/login" 
           className="block w-full py-2 px-4 text-center text-white bg-red-600 hover:bg-red-700 rounded-lg transition duration-300"
          >
            Logout
          </a>
        </div>
      </div>
  )
}

export default AdminSideBar