"use client";
import { useState } from "react";
import TeacherSideBar from "@containers/TeacherSideBar";

export default function TeachersLayout({
  dashboard,
  attendance,
  grade,
  Schedule,
}) {
  const [activeSection, setActiveSection] = useState("dashboard");

  const handleActive = (active) => {
    setActiveSection(active);
  };

  return (
    <div className="h-screen w-screen flex">
      <TeacherSideBar handleActive={handleActive} />
      <div className="flex-grow">
        {activeSection === "dashboard" && dashboard}
        {activeSection === "student_attendance" && attendance}
        {activeSection === "student_grade" && grade}
        {activeSection === "schedule" && Schedule}
      </div>
    </div>
  );
}
