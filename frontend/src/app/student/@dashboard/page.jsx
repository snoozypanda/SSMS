"use client";
import StudentSideBar from "@containers/StudentSideBar";

export default function Studentpage() {
  return (
    <div className=" w-full h-full flex flex-col">
      {/* Sidebar */}
      {/* <StudentSideBar /> */}

      {/* Main Content */}
      <div className="w-full h-full flex flex-col">
        {/* Header Section */}
        <div className="px-32 py-9  bg-custom-color-green-400 text-white">
          <h1 className="text-3xl font-extrabold tracking-wider leading-[64px]">
            Student Dashboard
          </h1>
          <p className="text-lg mt-2">
            Welcome to the Student dashboard. Here you can view your
            attendance,class enrolled, and grades as well as schedule.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 p-8">
          {/* Student Information Card */}
          <div className="w-full p-6 border shadow-xl rounded-lg bg-custom-color-blue-900 hover:shadow-2xl transition-all">
            <h1 className="text-2xl font-semibold tracking-wide uppercase leading-8 text-white">
              Student Information
            </h1>
            <div className="mt-4 text-gray-300">
              <p className="text-lg">
                <span className="font-bold text-white">Name:</span> John Doe
              </p>
              <p className="text-lg mt-2">
                <span className="font-bold text-white">Gender:</span> Male
              </p>
              <p className="text-lg mt-2">
                <span className="font-bold text-white">Birth Year:</span>{" "}
                2024-01-5678
              </p>
              <p className="text-lg mt-2">
                <span className="font-bold text-white">Email:</span>{" "}
                Jhondoe@gmail.com
              </p>
              <p className="text-lg mt-2">
                <span className="font-bold text-white">Phone number:</span>{" "}
                2024015678
              </p>
              <p className="text-lg mt-2">
                <span className="font-bold text-white">
                  Residential address:
                </span>{" "}
                Addis Ababa
              </p>
              <p className="text-lg mt-2">
                <span className="font-bold text-white">ID:</span> 2024-01-5678
              </p>
              <p className="text-lg mt-2">
                <span className="font-bold text-white">Major:</span> Computer
                Science
              </p>
              <p className="text-lg mt-2">
                <span className="font-bold text-white">Year:</span> Third Year
              </p>
              <p className="text-lg mt-2">
                <span className="font-bold text-white">Type:</span>{" "}
                undergraduate
              </p>
            </div>
          </div>

          {/* Attendance Card */}
          {/* <div className="w-[300px] p-6 border shadow-xl rounded-lg bg-custom-color-blue-900 hover:shadow-2xl transition-all">
            <h1 className="text-xl font-semibold tracking-wide uppercase leading-8 text-white">
              Attendance
            </h1>
            <p className="font-light text-gray-300 mt-2">
              Click to view and manage your students' attendance for the current
              day.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
