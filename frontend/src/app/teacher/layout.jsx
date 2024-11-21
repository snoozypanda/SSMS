"use client";
import { useState } from "react";
import TeacherSideBar from "@containers/TeacherSideBar";

export default function TeachersLayout({ dashboard, attendance, grade }) {
  const [dashboardActive, setDashboardActive] = useState(true);
  const [studentAttendanceActive, setStudentAttendanceActive] = useState(false);
  const [studentGradeActive, setStudentGradeActive] = useState(false);

  const handleActive = (active) => {
    setDashboardActive(false);
    setStudentAttendanceActive(false);
    setStudentGradeActive(false);

    switch (active) {
      case "dashboard":
        setDashboardActive(true);
        break;
      case "student_attendance":
        setStudentAttendanceActive(true);
        break;
      case "student_grade":
        setStudentGradeActive(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="h-screen w-screen flex">
      <TeacherSideBar handleActive={handleActive} />
      <div className="flex-grow">
        {dashboardActive && dashboard}
        {studentAttendanceActive && attendance}
        {studentGradeActive && grade}
      </div>
    </div>
  );
}
