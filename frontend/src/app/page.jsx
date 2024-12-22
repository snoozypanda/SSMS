"use client";
import React from "react";
import LoginPage from "@components/LoginPage"; // Ensure this is the correct import path

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
    </div>
  );
}
