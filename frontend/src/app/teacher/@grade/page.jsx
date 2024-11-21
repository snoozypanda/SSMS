"use client";
import { useState } from "react";

import { FaAngleDown } from "react-icons/fa";

const studentList = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
  {
    id: 3,
    name: "John Smith",
  },
  {
    id: 4,
    name: "Jane Smith",
  },
  {
    id: 5,
    name: "Jane Smith",
  },
  {
    id: 6,
    name: "Jane Smith",
  },
  {
    id: 7,
    name: "Jane Smith",
  },
  {
    id: 8,
    name: "Jane Smith",
  },
];

const courseList = [
  {
    id: 1,
    name: "Math",
  },
  {
    id: 2,
    name: "Science",
  },
  {
    id: 3,
    name: "History",
  },
  {
    id: 4,
    name: "English",
  },
  {
    id: 5,
    name: "Art",
  },
  {
    id: 6,
    name: "Music",
  },
  {
    id: 7,
    name: "PE",
  },
  {
    id: 8,
    name: "Computer Science",
  },
];

const StudentGrade = () => {
  const [courseClicked, setCourseClicked] = useState(false);

  const handleCourseClicked = () => {
    setCourseClicked((prev) => !prev);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="px-32 py-10 bg-custom-color-green-400 text-white">
        <h1 className="text-3xl font-extrabold tracking-wider leading-[64px]">
          Student Grade
        </h1>
        <p className="text-lg text-wrap">Mark grade for students.</p>
      </div>

      <div className="w-full flex-grow flex flex-col px-11 py-11 overflow-y-auto">
        <div className="flex justify-between text-white relative mb-6">
          <h1 className="text-black text-3xl mb-6 uppercase font-semibold tracking-wider">
            Student Grade
          </h1>

          <div className="relative">
            <div
              onClick={handleCourseClicked}
              className="z-10 relative px-4 py-1 text-xl font-semibold flex items-center gap-3 bg-custom-color-blue-900 w-fit hover:text-gray-500 cursor-pointer transition_css"
            >
              <span>Course</span> <FaAngleDown size={25} />
            </div>

            <div
              className={`bg-custom-color-blue-900 w-fit py-3 my-1 rounded-lg course-list ${
                courseClicked ? `course-list-clicked` : `course-list`
              }`}
            >
              {courseList.map((course) => (
                <div
                  key={course.id}
                  className="px-5 py-1 hover:bg-white hover:bg-opacity-25 cursor-pointer transition_css hover:text-green-400"
                >
                  {course.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        <table className="table-fixed">
          <thead>
            <tr>
              <th className="bg-custom-color-blue-900 text-white text-xl py-3 border-r border-white">
                Student ID
              </th>
              <th className="bg-custom-color-blue-900 text-white text-xl py-3 border-r border-white">
                Student Name
              </th>
              <th className="bg-custom-color-blue-900 text-white text-xl py-3">
                Grade
              </th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((student) => (
              <tr key={student.id}>
                <td className="border border-custom-color-blue-900 py-3 text-center">
                  {student.id}
                </td>
                <td className="border border-custom-color-blue-900 py-3 text-center">
                  {student.name}
                </td>
                <td className="border border-custom-color-blue-900 py-3 text-center bg-gray-300">
                  <input
                    type="text"
                    placeholder="Enter Grade..."
                    className="w-[350px] px-4 rounded-sm outline-none"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div>
          <button className="bg-custom-color-blue-900 text-white px-6 py-2 mt-4 rounded-sm hover:bg-custom-color-blue-400 transition_css">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentGrade;
