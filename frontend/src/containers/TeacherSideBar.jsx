import Image from "next/image";

import { IoExitOutline } from "react-icons/io5";
import { ProfilePicture } from "@assets";

const TeacherSideBar = ({ handleActive }) => {
  return (
    <div className="w-[20%] h-full py-9 bg-custom-color-blue-900 text-white">
      <div className="flex justify-center items-center gap-5 border-b py-9">
        <div>
          <Image
            src={ProfilePicture}
            alt="Profile Picture"
            width={50}
            height={50}
            className="profile-picture outline outline-offset-4 outline-custom-color-yellow"
          />
        </div>
        <div>
          <h1 className="font-sans font-semibold text-2xl tracking-wide">
            John Doe
          </h1>
          <p className="font-light text-gray-300">Teacher</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 py-9">
        <div
          onClick={() => handleActive("dashboard")}
          className="group h-9 flex gap-16 items-center text-xl tracking-wide cursor-pointer hover:bg-white hover:bg-opacity-10 transition_css"
        >
          <div className="w-0 opacity-0 h-full bg-custom-color-green-300 group-hover:w-4 group-hover:opacity-100 transition_css" />
          <span className="ml-2">Dashboard</span>
        </div>

        <div
          onClick={() => handleActive("student_attendance")}
          className="group h-9 flex gap-16 items-center text-xl tracking-wide cursor-pointer hover:bg-white hover:bg-opacity-10 transition_css"
        >
          <div className="w-0 opacity-0 h-full bg-custom-color-green-300 group-hover:w-4 group-hover:opacity-100 transition_css" />
          <span className="ml-2">Student Attendance</span>
        </div>

        <div
          onClick={() => handleActive("student_grade")}
          className="group h-9 flex gap-16 items-center text-xl tracking-wide cursor-pointer hover:bg-white hover:bg-opacity-10 transition_css"
        >
          <div className="w-0 opacity-0 h-full bg-custom-color-green-300 group-hover:w-4 group-hover:opacity-100 transition_css" />
          <span className="ml-2">Student Grade</span>
        </div>
      </div>

      <div className="h-[250px] flex justify-center items-center">
        <button className="px-16 hover:px-20 py-2 text-xl font-semibold bg-red-500 rounded-sm hover:bg-red-600 transition_css flex items-center gap-4">
          <IoExitOutline size={25} />
          <p className="tracking-wider">Logout</p>
        </button>
      </div>
    </div>
  );
};

export default TeacherSideBar;
