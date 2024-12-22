"use client";
import { useState } from "react";
import AdminSideBar from "@containers/AdminSideBar";

export default function AdminLayout({
  dashboard1,
  allCourseActivities,
  allStudentActivities,
  allTeacherActivities,
}) {
  const [activeSection, setActiveSection] = useState("dashboard1"); // Default section to dashboard

  const handleActive = (active) => {
    setActiveSection(active);
  };

  return (
    <div className="h-screen w-screen flex">
      {/* Sidebar for navigation */}
      <AdminSideBar handleActive={handleActive} />

      {/* Main content area */}
      <div className="flex-grow">
        {activeSection === "dashboard1" && dashboard1}
        {activeSection === "all_course_activities" && allCourseActivities}
        {activeSection === "all_teacher_activities" && allTeacherActivities}
        {activeSection === "all_student_activities" && allStudentActivities}
      </div>
    </div>
  );
}
