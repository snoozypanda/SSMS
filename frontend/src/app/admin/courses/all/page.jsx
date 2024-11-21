"use client";

import AdminSideBar from '@app/components/AdminSideBar';
import React, { useState } from 'react';

const CoursesOverview = () => {
  // Initial state with course data
  const [courses, setCourses] = useState([
    {
      title: "Web Development",
      description: "Dive into the basics of web development with HTML, CSS, and JavaScript.",
      image: "https://img.freepik.com/free-vector/maths-realistic-chalkboard-background_23-2148159115.jpg?semt=ais_hybrid",
      link: "#"
    },
    {
      title: "Data Science",
      description: "Master the art of data analysis with Python and machine learning techniques.",
      image: "https://img.freepik.com/free-vector/maths-realistic-chalkboard-background_23-2148159115.jpg?semt=ais_hybrid",
      link: "#"
    },
    {
      title: "Graphic Design",
      description: "Learn the fundamentals of design, typography, and tools like Adobe Illustrator.",
      image: "https://img.freepik.com/free-vector/maths-realistic-chalkboard-background_23-2148159115.jpg?semt=ais_hybrid",
      link: "#"
    },
    {
      title: "Digital Marketing",
      description: "Understand the world of SEO, social media strategies, and campaign management.",
      image: "https://img.freepik.com/free-vector/maths-realistic-chalkboard-background_23-2148159115.jpg?semt=ais_hybrid",
      link: "#"
    },
    {
      title: "Cloud Computing",
      description: "Explore cloud technologies, AWS, and how to build scalable applications.",
      image: "https://img.freepik.com/free-vector/maths-realistic-chalkboard-background_23-2148159115.jpg?semt=ais_hybrid",
      link: "#"
    },
    {
      title: "Mobile App Development",
      description: "Learn how to create Android and iOS applications using React Native.",
      image: "https://img.freepik.com/free-vector/maths-realistic-chalkboard-background_23-2148159115.jpg?semt=ais_hybrid",
      link: "#"
    }
  ]);

  // Function to handle the deletion of a course
  const handleDelete = (index) => {
    const updatedCourses = courses.filter((course, i) => i !== index);
    setCourses(updatedCourses);
  };

  return (
    <div className="bg-gray-100">
      <AdminSideBar />
      <div className="ml-64 max-w-7xl mx-auto px-6 py-10">
        {/* Header Section */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Explore Our Courses</h1>
          <p className="text-lg text-gray-600 mt-2">Browse through the diverse range of courses we offer.</p>
        </header>

        {/* Courses Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
                <p className="text-gray-600 mt-2">{course.description}</p>

                {/* Flex container for buttons */}
                <div className="flex justify-between items-center mt-4">
                  <button 
                    onClick={() => handleDelete(index)} 
                    className="text-red-600 hover:underline font-semibold"
                  >
                    Delete
                  </button>

                  <a href={course.link} className="text-blue-600 hover:underline font-semibold">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesOverview;
