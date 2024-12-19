<<<<<<< HEAD
import LoginPage from "@components/LoginPage";
export default function Home() {
  return (
    <div>
      <h1 className="text-5xl font-bold bg-custom-color-green-400 text-white p-20 flex-grow text-center">
        WELCOME TO SCHOOL MANAGEMENT SYSTEM
      </h1>
      <div className="flex justify-center space-x-4 m-20 p-10">
        <button className="border border-black w-48 h-12 bg-custom-color-blue-400 text-light">
          Sign in
        </button>
        <button className="w-48 h-12 bg-custom-color-blue-400 text-light">
          Login
        </button>
      </div>

      <footer className="fixed left-0 bottom-0 w-full  text-white text-center bg-custom-color-blue-900 p-6 flex-col justify-center align-bottom ">
        <p>Contact Us</p>
        <p>Email: studentService@gmail.com</p>
      </footer>
=======
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
>>>>>>> 50495ed (Student and login page)
    </div>
  );
}
export default LoginPage;
