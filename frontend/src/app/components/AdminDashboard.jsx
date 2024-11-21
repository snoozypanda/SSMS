import React from 'react'
import AdminSideBar from './AdminSideBar'

const AdminDashboard = ({ role, listPath }) => {
  return (
    <div className="flex">
     <AdminSideBar />

      <div className="ml-64 p-6 w-full flex flex-col align-center">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-extrabold text-gray-800">{role} Management Dashboard</h2>
                <p className="text-gray-600 mt-2 text-lg">Choose an option below to manage the {role}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center transform hover:scale-105">
                    <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mb-4">
                        <span className="text-3xl">+</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Add {role}</h3>
                    <p className="text-gray-600 mb-4">Add new {role} to the system.</p>
                    <a href="/admin/add" className="text-blue-600 hover:underline font-semibold">Add</a>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center transform hover:scale-105">
                    <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mb-4">
                        <span className="text-3xl">-</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Remove {role}</h3>
                    <p className="text-gray-600 mb-4">Remove a {role} from the system.</p>
                    <a href={listPath} className="text-blue-600 hover:underline font-semibold">Remove</a>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center col-span-2 transform hover:scale-105">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
                        <span className="text-3xl">👥</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">List All {role}</h3>
                    <p className="text-gray-600 mb-4">View the list of all {role} enrolled.</p>
                    <a href={listPath} className="text-blue-600 hover:underline font-semibold">List</a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AdminDashboard