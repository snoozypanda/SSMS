"use_client";
import React from "react";

function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg mx-auto p-20 bg-white rounded-lg shadow-lg space-y-6">
        <div className="flex justify-center">
          <h1 className="block text-lg font-medium text-gray-900">
            Welcome To SSMS
          </h1>
        </div>
        <form className="max-w-lg mx-auto p-20 bg-white rounded-lg shadow-lg space-y-6">
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
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:bg-slate-50 "
            />
          </div>

          <div className="flex justify-center">
            <input
              type="submit"
              value="Login"
              className="w-200 p-2 bg-custom-color-green-400 text-white font-semibold rounded-md hover:bg-custom-color-green-400 transition duration-300 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
export default LoginPage;
