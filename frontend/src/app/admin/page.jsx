"use client";

import AdminSideBar from "@app/components/AdminSideBar";
import React from "react";

const AdminPage = () => {
  return (
    <div className="flex">
      <AdminSideBar />
      <div className=" w-full" s>
        <div className="bg-custom-color-green-400 text-white  py-8 pt-4 px-10 mb-10 gap-5">
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
            <a href="#" className="text-blue-600 font-semibold hover:underline">
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
  );
};

export default AdminPage;
