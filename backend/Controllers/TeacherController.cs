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
    public class TeacherController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public TeacherController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/teacher
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Teacher>>> GetTeachers()
        {
            var teachers = await _context.Teachers.ToListAsync();

            return Ok(teachers);
        }

        // GET: api/teacher/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Teacher>> GetTeacher(int id)
        {
            var teacher = await _context.Teachers.FirstOrDefaultAsync(t => t.Id == id);

            if (teacher == null)
            {
                return NotFound();
            }

            return Ok(teacher);
        }

        // POST: api/teacher
        [HttpPost]
        public async Task<ActionResult<Teacher>> PostTeacher(Teacher teacher)
        {
            _context.Teachers.Add(teacher);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTeacher), new { id = teacher.Id }, teacher);
        }

        // PUT: api/teacher/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTeacher(int id, Teacher teacher)
        {
            if (id != teacher.Id)
            {
                return BadRequest();
            }

            var existingTeacher = await _context.Teachers.FindAsync(id);
            if (existingTeacher == null)
            {
                return NotFound();
            }

            existingTeacher.Name = teacher.Name;
            existingTeacher.Email = teacher.Email;
            existingTeacher.PhoneNumber = teacher.PhoneNumber;
            existingTeacher.Password = teacher.Password;

            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/teacher/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTeacher(int id)
        {
            var teacher = await _context.Teachers.FindAsync(id);
            if (teacher == null)
            {
                return NotFound();
            }

            _context.Teachers.Remove(teacher);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // POST: api/teacher/save
        [HttpGet("save")]
        public async Task<ActionResult> SaveTeachers()
        {
            if (_context.Teachers.Any())
            {
                return Ok("Teachers already exist in the database.");
            }

            var teachers = new List<Teacher>
            {
                new Teacher
                {
                    IdNumber = "T001",
                    Name = "Dr. Smith",
                    Email = "dr.smith@example.com",
                    PhoneNumber = "555-123-4567",
                    Password = "hashed_password_1",
                },
                new Teacher
                {
                    IdNumber = "T002",
                    Name = "Prof. Johnson",
                    Email = "prof.johnson@example.com",
                    PhoneNumber = "555-234-5678",
                    Password = "hashed_password_2",
                },
                new Teacher
                {
                    IdNumber = "T003",
                    Name = "Dr. Lee",
                    Email = "dr.lee@example.com",
                    PhoneNumber = "555-345-6789",
                    Password = "hashed_password_3",
                },
                new Teacher
                {
                    IdNumber = "T004",
                    Name = "Prof. Brown",
                    Email = "prof.brown@example.com",
                    PhoneNumber = "555-456-7890",
                    Password = "hashed_password_4",
                },
                new Teacher
                {
                    IdNumber = "T005",
                    Name = "Dr. Green",
                    Email = "dr.green@example.com",
                    PhoneNumber = "555-567-8901",
                    Password = "hashed_password_5",
                },
            };

            _context.Teachers.AddRange(teachers);
            await _context.SaveChangesAsync();

            return Ok("Database has been seeded with sample teachers.");
        }
    }
}
