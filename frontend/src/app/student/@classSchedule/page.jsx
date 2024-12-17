"use client";
import React from "react";

const ClassSchedule = () => {
  const student = {
    name: "John Doe",
    id: "AAU123456",
    semester: "Fall 2024",
    enrolledClasses: [
      { code: "CS101", name: "Introduction to Computer Science" },
      { code: "MATH201", name: "Calculus II" },
      { code: "PHYS301", name: "Physics I" },
      { code: "ENG102", name: "English Composition" },
    ],
    schedule: [
      {
        day: "Monday",
        classes: [
          { time: "8:00 AM - 9:30 AM", course: "CS101", room: "Room 101" },
          { time: "10:00 AM - 11:30 AM", course: "MATH201", room: "Room 202" },
        ],
      },
      {
        day: "Wednesday",
        classes: [
          { time: "8:00 AM - 9:30 AM", course: "CS101", room: "Room 101" },
          { time: "1:00 PM - 2:30 PM", course: "PHYS301", room: "Room 303" },
        ],
      },
      {
        day: "Friday",
        classes: [
          { time: "10:00 AM - 11:30 AM", course: "ENG102", room: "Room 204" },
        ],
      },
    ],
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Class Schedule</h1>
      <div>
        <strong>Name:</strong> {student.name}
      </div>
      <div>
        <strong>Student ID:</strong> {student.id}
      </div>
      <div>
        <strong>Semester:</strong> {student.semester}
      </div>
      <h2>Enrolled Classes</h2>
      <ul>
        {student.enrolledClasses.map((cls, index) => (
          <li key={index}>
            {cls.code} - {cls.name}
          </li>
        ))}
      </ul>
      <h2>Weekly Schedule</h2>
      {student.schedule.map((day, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3>{day.day}</h3>
          <table
            border="1"
            cellPadding="10"
            cellSpacing="0"
            style={{ borderCollapse: "collapse", width: "100%" }}
          >
            <thead>
              <tr>
                <th>Time</th>
                <th>Course</th>
                <th>Room</th>
              </tr>
            </thead>
            <tbody>
              {day.classes.map((cls, idx) => (
                <tr key={idx}>
                  <td>{cls.time}</td>
                  <td>{cls.course}</td>
                  <td>{cls.room}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ClassSchedule;
