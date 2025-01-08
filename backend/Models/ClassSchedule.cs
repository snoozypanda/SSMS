using System;
using Newtonsoft.Json;
using SSMSBackend.Models;

namespace SSMSBackend.Models
{
    public class ClassSchedule
    {
        public int Id { get; set; }
        public int CourseId { get; set; }

        [JsonIgnore]
        public Course Course { get; set; }

        public DateTime ClassDate { get; set; }
        public string Room { get; set; }
    }
}
