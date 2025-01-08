using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SSMSBackend.Models;

namespace SSMSBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AttendanceController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AttendanceController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/attendance/save
        [HttpGet("save")]
        public async Task<ActionResult<IEnumerable<Attendance>>> SaveAttendances()
        {
            if (!_context.Attendances.Any())
            {
                var student1 = await _context.Students.FirstOrDefaultAsync();

                var classSchedule1 = new ClassSchedule
                {
                    CourseId = 1,
                    ClassDate = new DateTime(2024, 12, 2),
                    Room = "9b",
                };

                _context.ClassSchedules.Add(classSchedule1);
                await _context.SaveChangesAsync();

                var demoAttendances = new List<Attendance>
                {
                    new Attendance
                    {
                        StudentId = student1.Id,
                        ClassScheduleId = classSchedule1.Id,
                        Date = new DateTime(2024, 12, 1),
                        IsPresent = true,
                    },
                    new Attendance
                    {
                        StudentId = student1.Id,
                        ClassScheduleId = classSchedule1.Id,
                        Date = new DateTime(2024, 12, 2),
                        IsPresent = false,
                    },
                };

                await _context.Attendances.AddRangeAsync(demoAttendances);
                await _context.SaveChangesAsync();
            }

            var attendances = await _context.Attendances.ToListAsync();

            return Ok(attendances);
        }

        // GET: api/attendance
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Attendance>>> GetAttendances()
        {
            var attendances = await _context.Attendances.ToListAsync();

            return Ok(attendances);
        }

        // GET: api/attendance/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Attendance>> GetAttendance(int id)
        {
            var attendance = await _context.Attendances.FirstOrDefaultAsync(a => a.Id == id);

            if (attendance == null)
            {
                return NotFound();
            }

            return Ok(attendance);
        }

        // POST: api/attendance
        [HttpPost]
        public async Task<ActionResult<Attendance>> PostAttendance(Attendance attendance)
        {
            var student = await _context.Students.FindAsync(attendance.StudentId);
            var classSchedule = await _context.ClassSchedules.FindAsync(attendance.ClassScheduleId);

            if (student == null || classSchedule == null)
            {
                return BadRequest("Invalid StudentId or ClassScheduleId.");
            }

            _context.Attendances.Add(attendance);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAttendance), new { id = attendance.Id }, attendance);
        }

        // PUT: api/attendance/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAttendance(int id, Attendance attendance)
        {
            if (id != attendance.Id)
            {
                return BadRequest();
            }

            var existingAttendance = await _context.Attendances.FindAsync(id);
            if (existingAttendance == null)
            {
                return NotFound();
            }

            existingAttendance.IsPresent = attendance.IsPresent;
            existingAttendance.Date = attendance.Date;

            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/attendance/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAttendance(int id)
        {
            var attendance = await _context.Attendances.FindAsync(id);
            if (attendance == null)
            {
                return NotFound();
            }

            _context.Attendances.Remove(attendance);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
