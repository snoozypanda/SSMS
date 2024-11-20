'use client'

import React from 'react'

const AdminPage = () => {
  return (
    <div className="flex">
      {/* Left side or the navbar */}
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

      <div className="ml-64 p-6 w-full flex flex-col align-center">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-extrabold text-gray-800">Student Management Dashboard</h2>
                <p className="text-gray-600 mt-2 text-lg">Choose an option below to manage the students</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center transform hover:scale-105">
                    <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mb-4">
                        <span className="text-3xl">+</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Add Student</h3>
                    <p className="text-gray-600 mb-4">Add new students to the system.</p>
                    <a href="#" className="text-blue-600 hover:underline font-semibold">Add</a>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center transform hover:scale-105">
                    <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mb-4">
                        <span className="text-3xl">-</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Remove Student</h3>
                    <p className="text-gray-600 mb-4">Remove a student from the system.</p>
                    <a href="#" className="text-blue-600 hover:underline font-semibold">Remove</a>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center col-span-2 transform hover:scale-105">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
                        <span className="text-3xl">👥</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">List All Students</h3>
                    <p className="text-gray-600 mb-4">View the list of all students enrolled.</p>
                    <a href="#" className="text-blue-600 hover:underline font-semibold">List</a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AdminPage;