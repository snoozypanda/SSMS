using System;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using SSMSBackend.Models;

namespace SSMSBackend.Models
{
    public class StudentCourse
    {
        [Key]
        public int StudentId { get; set; }
        public Student Student { get; set; }

        [Key]
        public int CourseId { get; set; }

        [JsonIgnore]
        public Course Course { get; set; }

        public DateTime RegistrationDate { get; set; }
        public bool IsActive { get; set; }
        public bool FeePaid { get; set; }
    }
}
