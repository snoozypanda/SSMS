"use client";
import React from "react";
const DashboardAdmin = ({ role, listPath }) => {
  return (
    <div className="flex">
      <div className="flex">
        <div className=" w-full" s>
          <div className="bg-custom-color-green-400 text-white  py-8 pt-4 px-20 mb-10 gap-5">
            <h2 className="text-3xl font-semibold mb-4 px-10 pt-5  mx-0 ">
              Welcome to the Admin Dashboard
            </h2>
            <p className="font-light text-white px-10 mb-10">
              As an admin, you can manage various aspects of the school system
              here.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className=" bg-custom-color-blue-900 m-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex items-center justify-between">
              <div className="flex items-center ">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                  <span className="font-semibold text-xl">T</span>
                </div>
                <div className="z-10  ">
                  <h3 className="manage-card-title text-xl font-semibold">
                    Teachers
                  </h3>
                  <p className="font-light text-gray-300">
                    Manage teacher details and assignments.
                  </p>
                </div>
              </div>
              <a
                href="#"
                className="text-green-600 font-semibold hover:underline"
              >
                Manage
              </a>
            </div>

            <div className="m-10 bg-custom-color-blue-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  <span className="font-semibold text-xl">S</span>
                </div>
                <div className="z-10">
                  <h3 className="manage-card-title text-xl font-semibold">
                    Students
                  </h3>
                  <p className="font-light text-gray-300">
                    Manage student details and enrollment.
                  </p>
                </div>
              </div>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Manage
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-6">
            <div className=" bg-custom-color-blue-900 w-2/4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 m-10 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center">
                  <span className="font-semibold text-xl">C</span>
                </div>
                <div className="z-10">
                  <h3 className="manage-card-title text-xl font-semibold">
                    Courses
                  </h3>
                  <p className="font-light text-gray-300">
                    Manage courses, schedules, and assignments.
                  </p>
                </div>
              </div>
              <a
                href="#"
                className="text-purple-600 font-semibold hover:underline"
              >
                Manage
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="ml-64 p-6 w-full flex flex-col align-center">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-800">
            {role} Management Dashboard
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            Choose an option below to manage the {role}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center transform hover:scale-105">
            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl">+</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Add {role}
            </h3>
            <p className="text-gray-600 mb-4">Add new {role} to the system.</p>
            <a
              href="/admin/add"
              className="text-blue-600 hover:underline font-semibold"
            >
              Add
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center transform hover:scale-105">
            <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl">-</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Remove {role}
            </h3>
            <p className="text-gray-600 mb-4">
              Remove a {role} from the system.
            </p>
            <a
              href={listPath}
              className="text-blue-600 hover:underline font-semibold"
            >
              Remove
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center col-span-2 transform hover:scale-105">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl">👥</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              List All {role}
            </h3>
            <p className="text-gray-600 mb-4">
              View the list of all {role} enrolled.
            </p>
            <a
              href={listPath}
              className="text-blue-600 hover:underline font-semibold"
            >
              List
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default DashboardAdmin;
