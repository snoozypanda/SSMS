import React from "react";

const ClassesEnrolled = () => {
  const student = {
    name: "John Doe",
    id: "AAU123456",
    semester: "Fall 2024",
    enrolledClasses: [
      {
        code: "CS101",
        name: "Introduction to Computer Science",
        instructor: "Dr. Sarah Johnson",
        credits: 3,
        schedule: "Monday & Wednesday, 8:00 AM - 9:30 AM",
      },
      {
        code: "MATH201",
        name: "Calculus II",
        instructor: "Prof. Michael Brown",
        credits: 4,
        schedule: "Tuesday & Thursday, 10:00 AM - 11:30 AM",
      },
      {
        code: "PHYS301",
        name: "Physics I",
        instructor: "Dr. Emily White",
        credits: 3,
        schedule: "Wednesday & Friday, 1:00 PM - 2:30 PM",
      },
      {
        code: "ENG102",
        name: "English Composition",
        instructor: "Ms. Rachel Green",
        credits: 2,
        schedule: "Friday, 10:00 AM - 11:30 AM",
      },
    ],
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Enrolled Classes</h1>
      <div>
        <strong>Name:</strong> {student.name}
      </div>
      <div>
        <strong>Student ID:</strong> {student.id}
      </div>
      <div>
        <strong>Semester:</strong> {student.semester}
      </div>
      <h2>Classes</h2>
      <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Instructor</th>
            <th>Credits</th>
            <th>Schedule</th>
          </tr>
        </thead>
        <tbody>
          {student.enrolledClasses.map((cls, index) => (
            <tr key={index}>
              <td>{cls.code}</td>
              <td>{cls.name}</td>
              <td>{cls.instructor}</td>
              <td>{cls.credits}</td>
              <td>{cls.schedule}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassesEnrolled;
