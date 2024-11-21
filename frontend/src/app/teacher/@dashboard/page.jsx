"use client";
import { useState } from "react";
import Image from "next/image";

import { AttendancePicture, GradePicture } from "@assets";

const DashboardPage = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="px-32 py-10 bg-custom-color-green-400 text-white">
        <h1 className="text-3xl font-extrabold tracking-wider leading-[64px]">
          Teacher Dashboard
        </h1>
        <p className="text-lg text-wrap">
          Welcome to the teacher dashboard. Here you can view, manage, and
          update your students' attendance and grades.
        </p>
      </div>

      <div className="w-full  flex-grow flex justify-center items-center gap-8">
        <div className="max-w-[450px] px-4 py-2 border flex items-center gap-5 shadow-xl rounded-lg bg-custom-color-blue-900 hover:shadow-lg cursor-pointer relative group transition_css">
          <div className="after-bg-color transition_css" />
          <div className="z-10">
            <Image
              src={AttendancePicture}
              alt="Attendance Picture"
              width={75}
              height={75}
              className="profile-picture"
            />
          </div>

          <div className="z-10">
            <h1 className="text-xl font-semibold tracking-wide uppercase leading-8 text-white">
              Attendance
            </h1>
            <p className="font-light text-gray-300">
              Click to view and manage your students' attendance for the current
              day.
            </p>
          </div>
        </div>

        <div className="max-w-[450px] px-4 py-2 border flex items-center gap-5 shadow-xl rounded-lg bg-custom-color-blue-900 hover:shadow-lg cursor-pointer relative group transition_css">
          <div className="after-bg-color transition_css" />
          <div className="z-10">
            <Image
              src={GradePicture}
              alt="Grade Picture"
              width={75}
              height={75}
              className="profile-picture"
            />
          </div>

          <div className="z-10">
            <h1 className="text-xl font-semibold tracking-wide uppercase leading-8 text-white">
              Grade
            </h1>
            <p className="font-light text-gray-300">
              Click to view and manage your students' grades for the current
              term.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
