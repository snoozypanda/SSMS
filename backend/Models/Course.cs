using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using SSMSBackend.Models;

namespace SSMSBackend.Models
{
    public class Course
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int TeacherId { get; set; }

        [JsonIgnore]
        public Teacher Teacher { get; set; }

        public ICollection<StudentCourse> StudentCourses { get; set; }

        public ICollection<Grade> Grades { get; set; }

        public ICollection<ClassSchedule> ClassSchedules { get; set; }
    }
}
