"use client"

import AdminSideBar from '@app/components/AdminSideBar';
import AllUsers from '@app/components/AllUsers';

const AllStudents = () => {
      // Example list of students
  const students = [
    {
      image: "https://www.w3schools.com/w3images/avatar2.png",
      name: "John Doe",
      role: "Student",
      dateJoined: "2024-01-10",
    },
    {
      image: "https://www.w3schools.com/w3images/avatar3.png",
      name: "Jane Smith",
      role: "Teacher",
      dateJoined: "2023-11-25",
    },
    {
      image: "https://www.w3schools.com/w3images/avatar4.png",
      name: "Mike Johnson",
      role: "Student",
      dateJoined: "2024-02-14",
    },
    {
      image: "https://www.w3schools.com/w3images/avatar5.png",
      name: "Alice Brown",
      role: "Teacher",
      dateJoined: "2023-08-01",
    },
  ]


  return (
      <>
          <AdminSideBar />
          <AllUsers users={students} />
      </>
  )
}

export default AllStudents;
