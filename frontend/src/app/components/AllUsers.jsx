import { useState } from "react";
import UserProfileCard from "./UserProfileCard";

const AllUsers = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="ml-64 container mx-auto p-6 overflow-none w-full">
        <div className="mb-6 flex items-center justify-center">
          <input
            type="text"
            id="search-input"
            placeholder="Search by full name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        <h1 className="text-3xl font-semibold text-gray-800 mb-8">
          List of Students
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6 overflow-hidden w-full">
          {filteredStudents.map((user, index) => (
            <UserProfileCard
              key={index}
              image={user.image}
              name={user.name}
              role={user.role}
              dateJoined={user.dateJoined}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
