"use client";
import { useState } from "react";
import StudentSideBar from "@containers/StudentSideBar";

export default function StudentLayout({
  dashboard,
  ClassEnrolled,
  classSchedule,
  GradeReport,
}) {
  const [activeSection, setActiveSection] = useState("dashboard");

  const handleActive = (active) => {
    setActiveSection(active);
  };

  return (
    <div className="h-screen w-screen flex">
      {/* Sidebar for navigation */}
      <StudentSideBar handleActive={handleActive} />

      {/* Main content area */}
      <div className="flex-grow p-4">
        {activeSection === "dashboard" && dashboard}
        {activeSection === "class_enrolled" && ClassEnrolled}
        {activeSection === "class_schedule" && classSchedule}
        {activeSection === "grade_report" && GradeReport}
      </div>
    </div>
  );
}
