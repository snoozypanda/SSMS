"use client";

const GradeReport = () => {
  const student = {
    name: "John Doe",
    id: "AAU123456",
    semester: "Fall 2024",
    courses: [
      { code: "CS101", name: "Introduction to Computer Science", grade: "A" },
      { code: "MATH201", name: "Calculus II", grade: "B+" },
      { code: "ENG102", name: "English Composition", grade: "A-" },
      { code: "PHYS301", name: "Physics I", grade: "B" },
      { code: "STAT202", name: "Statistics", grade: "A" },
    ],
    gpa: 3.78,
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Grade Report</h1>
      <div>
        <strong>Name:</strong> {student.name}
      </div>
      <div>
        <strong>Student ID:</strong> {student.id}
      </div>
      <div>
        <strong>Semester:</strong> {student.semester}
      </div>
      <h2>Courses</h2>
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
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {student.courses.map((course, index) => (
            <tr key={index}>
              <td>{course.code}</td>
              <td>{course.name}</td>
              <td>{course.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>GPA: {student.gpa}</h3>
    </div>
  );
};

export default GradeReport;
