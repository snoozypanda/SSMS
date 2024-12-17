import Image from "next/image";

import { IoExitOutline } from "react-icons/io5";
import { ProfilePicture } from "@assets";

const TeacherSideBar = ({ handleActive }) => {
  return (
    <div className="sidebar">
      <div className="flex justify-center items-center gap-5 border-b py-9">
        <div>
          <Image
            src={ProfilePicture}
            alt="Profile Picture"
            width={50}
            height={50}
            className="sidebar-profile"
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
          className="sidebar-menu group"
        >
          <div className="sidebar-menu-div" />
          <span className="ml-2">Dashboard</span>
        </div>

        <div
          onClick={() => handleActive("student_attendance")}
          className="sidebar-menu group"
        >
          <div className="sidebar-menu-div" />
          <span className="ml-2">Student Attendance</span>
        </div>

        <div
          onClick={() => handleActive("student_grade")}
          className="sidebar-menu group"
        >
          <div className="sidebar-menu-div" />
          <span className="ml-2">Student Grade</span>
        </div>
      </div>

      <div className="flex-grow flex justify-center items-center">
        <button className="sidebar-menu-logout">
          <IoExitOutline size={25} />
          <p className="tracking-wider">Logout</p>
        </button>
      </div>
    </div>
  );
};

export default TeacherSideBar;
