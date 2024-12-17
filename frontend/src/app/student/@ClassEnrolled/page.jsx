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
    <div className="w-full h-full flex flex-col">
      <div className="px-32 py-10 bg-custom-color-green-400 text-white">
        <h1 className="text-3xl font-extrabold tracking-wider leading-[64px]">
          Class Enrolled
        </h1>
        <p className="text-lg text-wrap">Enrolled classes.</p>
      </div>
      <div className="w-full flex-grow flex flex-col px-11 py-11 overflow-y-auto">
        <table
          border="1"
          cellPadding="10"
          cellSpacing="0"
          style={{ borderCollapse: "collapse", width: "100%" }}
          className="border-4 border-solid border-black-500"
        >
          <thead>
            <tr className="bg-custom-color-blue-900 text-white">
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
    </div>
  );
};

export default ClassesEnrolled;
