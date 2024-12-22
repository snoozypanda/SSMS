<<<<<<< HEAD
import LoginPage from "@components/LoginPage";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col">
      <header className="p-8 text-center bg-gradient-to-r from-custom-color-green-400 to-custom-color-blue-500">
        <h1 className="text-6xl text-white font-bold shadow-lg">
          WELCOME TO SCHOOL MANAGEMENT SYSTEM
        </h1>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="border-2 border-custom-color-blue-400 rounded-lg text-white flex justify-center space-x-6 m-10 p-10 bg-gray-900 shadow-2xl transform transition-all duration-300 hover:scale-105">
          <button className="border border-black w-48 h-14 bg-custom-color-blue-400 text-light rounded-lg shadow-md hover:bg-custom-color-blue-500 transition duration-300">
            Sign in
          </button>
          <button className="w-48 h-14 bg-custom-color-blue-400 text-light rounded-lg shadow-md hover:bg-custom-color-blue-500 transition duration-300">
            Login
          </button>
        </div>
      </main>

      <footer className="w-full text-white text-center bg-custom-color-blue-900 p-8 flex-col justify-center">
        <p className="text-lg">Contact Us</p>
        <p className="text-sm">Email: studentService@gmail.com</p>
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
