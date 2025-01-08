using System;
using Newtonsoft.Json;
using SSMSBackend.Models;

namespace SSMSBackend.Models
{
    public class Grade
    {
        public int Id { get; set; }
        public int Value { get; set; }
        public int StudentId { get; set; }

        [JsonIgnore]
        public Student Student { get; set; }

        public int CourseId { get; set; }
        public Course Course { get; set; }
    }
}
