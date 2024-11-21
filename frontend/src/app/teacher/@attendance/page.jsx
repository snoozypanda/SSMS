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

const StudentAttendance = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="px-32 py-10 bg-custom-color-green-400 text-white">
        <h1 className="text-3xl font-extrabold tracking-wider leading-[64px]">
          Student Attendance
        </h1>
        <p className="text-lg text-wrap">Mark attendance for students</p>
      </div>

      <div className="w-full flex-grow flex flex-col px-11 py-11 overflow-y-auto">
        <h1 className="text-3xl mb-6 uppercase font-semibold tracking-wider">
          Student Attendance
        </h1>
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
