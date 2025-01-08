using System;
using Newtonsoft.Json;
using SSMSBackend.Models;

namespace SSMSBackend.Models
{
    public class Attendance
    {
        public int Id { get; set; }
        public int StudentId { get; set; }

        [JsonIgnore]
        public Student Student { get; set; }

        public int ClassScheduleId { get; set; }

        [JsonIgnore]
        public ClassSchedule ClassSchedule { get; set; }

        public DateTime Date { get; set; }
        public bool IsPresent { get; set; }
    }
}
