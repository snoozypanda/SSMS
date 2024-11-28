"use client";
import { useState } from "react";

import DropdownMenu from "@components/DropdownMenu";

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

export const gradeList = [
  {
    id: 1,
    name: "1A",
  },
  {
    id: 2,
    name: "1B",
  },
  {
    id: 3,
    name: "2A",
  },
  {
    id: 4,
    name: "2B",
  },
  {
    id: 5,
    name: "3A",
  },
  {
    id: 6,
    name: "3B",
  },
  {
    id: 7,
    name: "4A",
  },
  {
    id: 8,
    name: "4B",
  },
];

const StudentAttendance = () => {
  const [gradeClicked, setGradeClicked] = useState(false);

  const handleGradeClicked = () => {
    setGradeClicked((prev) => !prev);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="heading-div">
        <h1 className="h1-title">Student Attendance</h1>
        <p className="text-lg text-wrap">Mark attendance for students</p>
      </div>

      <div className="w-full flex-grow flex flex-col px-11 py-11 overflow-y-auto">
        <div className="flex justify-between text-white relative mb-12">
          <h1 className="text-black text-3xl uppercase font-semibold tracking-wider">
            Student Attendance
          </h1>

          <div>
            <DropdownMenu
              name="Grade"
              menuList={gradeList}
              handleMenuClicked={handleGradeClicked}
              menuClicked={gradeClicked}
            />
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
                Attendance
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
                <td className="border border-custom-color-blue-900 py-3 text-center hover:bg-gray-300 cursor-pointer transition_css">
                  <input type="checkbox" className="cursor-pointer" />
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

export default StudentAttendance;
