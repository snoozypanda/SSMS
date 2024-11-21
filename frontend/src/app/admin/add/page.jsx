"use client";

import AdminSideBar from '@app/components/AdminSideBar';
import React, { useState } from 'react';

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'student',
    gender: 'male',
    dob: '',
    phone: '',
    address: '',
    photo: null,
  });

  const [photoPreview, setPhotoPreview] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      photo: file,
    }));

    // Show image preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotoPreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., API call)
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className='flex'>
      <AdminSideBar />
    <div className="ml-64 font-sans w-screen h-screen flex items-center justify-center md:overflow-scroll">
      <div className="w-full max-w-3xl p-8 rounded-xl shadow-xl bg-white">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Add New Student</h1>
        <form className="space-y-8" onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="flex flex-col space-y-3">
            <label htmlFor="name" className="text-lg font-semibold text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
              placeholder="Enter full name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="flex flex-col space-y-3">
            <label htmlFor="email" className="text-lg font-semibold text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="flex flex-col space-y-3">
            <label htmlFor="role" className="text-lg font-semibold text-gray-700">Role</label>
            <select
              id="role"
              name="role"
              className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
              value={formData.role}
              onChange={handleInputChange}
              required
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

          <div className="flex flex-col space-y-3">
            <label htmlFor="gender" className="text-lg font-semibold text-gray-700">Gender</label>
            <select
              id="gender"
              name="gender"
              className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
              value={formData.gender}
              onChange={handleInputChange}
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="flex flex-col space-y-3">
            <label htmlFor="dob" className="text-lg font-semibold text-gray-700">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
              value={formData.dob}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="flex flex-col space-y-3">
            <label htmlFor="phone" className="text-lg font-semibold text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="flex flex-col space-y-3">
            <label htmlFor="address" className="text-lg font-semibold text-gray-700">Address</label>
            <textarea
              id="address"
              name="address"
              rows="4"
              className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
              placeholder="Enter student's address"
              value={formData.address}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <div className="flex flex-col space-y-3">
            <label htmlFor="photo" className="text-lg font-semibold text-gray-700">Profile Photo</label>
            <input
              type="file"
              id="photo"
              name="photo"
              className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
            {photoPreview && (
              <div id="photo-preview" className="mt-4 w-32 h-32 bg-gray-200 rounded-full overflow-hidden">
                <img src={photoPreview} alt="Photo Preview" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white py-3 px-6 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-300 transform hover:scale-105"
            >
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default AddUser;
