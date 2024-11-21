'use client'

import AdminSideBar from '@app/components/AdminSideBar';
import React from 'react'

const AdminPage = () => {
  return (
    <div className="flex">
      <AdminSideBar />
        <div className="ml-64 p-10 w-full"s>
            <h2 className="text-3xl font-semibold mb-4">Welcome to the Admin Dashboard</h2>
            <p className="text-gray-700 mb-10">
                As an admin, you can manage various aspects of the school system here.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                            <span className="font-semibold text-xl">T</span>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-xl font-semibold">Teachers</h3>
                            <p className="text-gray-500">Manage teacher details and assignments.</p>
                        </div>
                    </div>
                    <a href="#" className="text-green-600 font-semibold hover:underline">Manage</a>
                </div>

                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
                            <span className="font-semibold text-xl">S</span>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-xl font-semibold">Students</h3>
                            <p className="text-gray-500">Manage student details and enrollment.</p>
                        </div>
                    </div>
                    <a href="#" className="text-blue-600 font-semibold hover:underline">Manage</a>
                </div>

            </div>

            <div className="grid grid-cols-1 gap-6 mt-6">
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center">
                            <span className="font-semibold text-xl">C</span>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-xl font-semibold">Courses</h3>
                            <p className="text-gray-500">Manage courses, schedules, and assignments.</p>
                        </div>
                    </div>
                    <a href="#" className="text-purple-600 font-semibold hover:underline">Manage</a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default AdminPage;