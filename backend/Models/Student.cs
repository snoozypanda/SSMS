using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using SSMSBackend.Models;

namespace SSMSBackend.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string IdNumber { get; set; }
        public string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime EnrollmentDate { get; set; }
        public string Password { get; set; }

        [JsonIgnore]
        public ICollection<StudentCourse> StudentCourses { get; set; }

        public ICollection<Grade> Grades { get; set; }

        [JsonIgnore]
        public ICollection<Attendance> Attendances { get; set; }
    }
}
