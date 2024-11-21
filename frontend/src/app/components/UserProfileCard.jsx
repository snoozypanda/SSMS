const UserProfileCard = ({ image, name, role, dateJoined }) => {
  return (
    <div className="card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform transition-all">
      <div className="flex items-center mb-4">
        <img src={image} alt="Profile Image" className="w-16 h-16 rounded-full mr-4" />
        <div>
          <p className="text-lg font-semibold text-gray-800">{name}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      <div className="text-gray-500 mb-4">
        Date Joined: <span className="text-gray-800">{dateJoined}</span>
      </div>
      <div className="flex justify-between items-center">
        <button className="text-red-600 hover:text-red-800 transition duration-300">
          <i className="fa fa-trash w-5 h-5"></i> Delete
        </button>
        <button className="bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition duration-300">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfileCard;