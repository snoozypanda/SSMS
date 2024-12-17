"use client";
import { useState } from "react";
import Image from "next/image";

import { AttendancePicture, GradePicture } from "@assets";

const DashboardPage = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="heading-div">
        <h1 className="h1-title">Teacher Dashboard</h1>
        <p className="p-description">
          Welcome to the teacher dashboard. Here you can view, manage, and
          update your students' attendance and grades.
        </p>
      </div>

      <div className="w-full  flex-grow flex justify-center items-center gap-8">
        <div className="manage-card group">
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
            <h1 className="manage-card-title">Attendance</h1>
            <p className="font-light text-gray-300">
              Click to view and manage your students' attendance for the current
              day.
            </p>
          </div>
        </div>

        <div className="manage-card group">
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
            <h1 className="manage-card-title">Grade</h1>
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
