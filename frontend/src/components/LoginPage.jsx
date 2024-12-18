import React from "react";

function LoginPage() {
  return (
    <form className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg space-y-6">
      <div>
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
      </div>

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

      <div>
        <input
          type="submit"
          value="Login"
          className="w-full p-3 bg-custom-color-green-400 text-white font-semibold rounded-md hover:bg-custom-color-green-400 transition duration-300 cursor-pointer"
        />
      </div>
    </form>
  );
}
export default LoginPage;
