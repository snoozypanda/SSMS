"use_client";
import React from "react";

function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-custom-color-blue-400 to-custom-color-green-400 overflow-hidden">
      <div className="max-w-lg mx-auto p-20 bg-gradient-to-r from-custom-color-blue-400 to-custom-color-green-400 rounded-lg shadow-lg space-y-6">
        <div className="flex justify-center">
          <h1 className="block text-lg font-medium text-gray-900">
            Welcome to SSMS - Sign Up
          </h1>
        </div>
        <form className="space-y-6">
          {/* User Name */}
          <label
            htmlFor="userName"
            className="block text-lg font-medium text-gray-700"
          >
            User Name
          </label>
          <input
            type="text"
            id="userName"
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:bg-slate-50"
          />

          {/* Email */}
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:bg-slate-50"
          />

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:bg-slate-50"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-lg font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:bg-slate-50"
            />
          </div>

          {/* User Type Selection */}
          <div>
            <p className="block text-lg font-medium text-gray-700">
              Sign Up As:
            </p>
            <div className="flex items-center space-x-4 mt-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="userType"
                  value="student"
                  className="form-radio h-4 w-4 text-custom-color-blue-400"
                />
                <span>Student</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="userType"
                  value="teacher"
                  className="form-radio h-4 w-4 text-custom-color-blue-400"
                />
                <span>Teacher</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <input
              type="submit"
              value="Sign Up"
              className="w-200 p-2 bg-custom-color-blue-400 text-white font-semibold rounded-md hover:bg-custom-color-blue-900 transition duration-300 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
