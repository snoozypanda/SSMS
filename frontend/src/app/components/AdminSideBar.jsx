"use client";
import React from "react";
import { IoExitOutline } from "react-icons/io5";
import { ProfilePicture } from "@assets";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AdminSideBar = ({ handleActive }) => {
  const router = useRouter();

  const handleLogout = () => {
    // Add any logout logic here (e.g., clearing session or localStorage)
    router.push("/login"); // Navigate to the login page
  };

  return (
    <div className="w-[20%] h-full py-9 bg-custom-color-blue-900 text-white">
      <div className="flex justify-center items-center gap-5 border-b py-10">
        <div>
          <Image
            src={ProfilePicture}
            alt="Profile Picture"
            width={50}
            height={50}
            className="profile-picture outline outline-offset-4 outline-custom-color-yellow"
          />
        </div>
        <div>
          <h1 className="font-sans font-semibold text-2xl tracking-wide">
            John Doe
          </h1>
          <p className="font-light text-gray-300">Admin</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 py-9">
        <div
          onClick={() => handleActive("dashboard1")}
          className="group h-9 flex gap-16 items-center text-xl tracking-wide cursor-pointer hover:bg-white hover:bg-opacity-10 transition_css"
        >
          <div className="w-0 opacity-0 h-full bg-custom-color-green-300 group-hover:w-4 group-hover:opacity-100 transition_css" />
          <span className="ml-2">Dashboard</span>
        </div>

        <div
          onClick={() => handleActive("all_student_activities")}
          className="group h-9 flex gap-16 items-center text-xl tracking-wide cursor-pointer hover:bg-white hover:bg-opacity-10 transition_css"
        >
          <div className="w-0 opacity-0 h-full bg-custom-color-green-300 group-hover:w-4 group-hover:opacity-100 transition_css" />
          <span className="ml-2">Student</span>
        </div>

        <div
          onClick={() => handleActive("all_teacher_activities")}
          className="group h-9 flex gap-16 items-center text-xl tracking-wide cursor-pointer hover:bg-white hover:bg-opacity-10 transition_css"
        >
          <div className="w-0 opacity-0 h-full bg-custom-color-green-300 group-hover:w-4 group-hover:opacity-100 transition_css" />
          <span className="ml-2">Teacher</span>
        </div>
        <div
          onClick={() => handleActive("all_course_activities")}
          className="group h-9 flex gap-16 items-center text-xl tracking-wide cursor-pointer hover:bg-white hover:bg-opacity-10 transition_css"
        >
          <div className="w-0 opacity-0 h-full bg-custom-color-green-300 group-hover:w-4 group-hover:opacity-100 transition_css" />
          <span className="ml-2">Courses</span>
        </div>
      </div>

      <div className="h-[250px] flex justify-center items-center">
        <button
          onClick={handleLogout}
          className="px-16 hover:px-20 py-2 text-xl font-semibold bg-red-500 rounded-sm hover:bg-red-600 transition_css flex items-center gap-4"
        >
          <IoExitOutline size={25} />
          <p className="tracking-wider">Logout</p>
        </button>
      </div>
    </div>
  );
};

export default AdminSideBar;
