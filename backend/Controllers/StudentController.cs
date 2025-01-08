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
    public class StudentController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public StudentController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/student
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Student>>> GetStudents()
        {
            var students = await _context.Students.ToListAsync();

            return Ok(students);
        }

        // GET: api/student/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Student>> GetStudent(int id)
        {
            var student = await _context.Students.FirstOrDefaultAsync(s => s.Id == id);

            if (student == null)
            {
                return NotFound();
            }

            return Ok(student);
        }

        // POST: api/student
        [HttpPost]
        public async Task<ActionResult<Student>> PostStudent(Student student)
        {
            _context.Students.Add(student);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetStudent), new { id = student.Id }, student);
        }

        // PUT: api/student/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStudent(int id, Student student)
        {
            if (id != student.Id)
            {
                return BadRequest();
            }

            var existingStudent = await _context.Students.FindAsync(id);
            if (existingStudent == null)
            {
                return NotFound();
            }

            existingStudent.Name = student.Name;
            existingStudent.DateOfBirth = student.DateOfBirth;
            existingStudent.Email = student.Email;
            existingStudent.PhoneNumber = student.PhoneNumber;
            existingStudent.EnrollmentDate = student.EnrollmentDate;
            existingStudent.Password = student.Password;

            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/student/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudent(int id)
        {
            var student = await _context.Students.FindAsync(id);
            if (student == null)
            {
                return NotFound();
            }

            _context.Students.Remove(student);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // POST: api/student/save
        [HttpGet("save")]
        public async Task<ActionResult> SaveStudents()
        {
            if (_context.Students.Any())
            {
                return Ok("Students already exist in the database.");
            }

            var students = new List<Student>
            {
                new Student
                {
                    IdNumber = "S001",
                    Name = "John Doe",
                    DateOfBirth = new DateTime(2000, 5, 10),
                    Email = "john.doe@example.com",
                    PhoneNumber = "123-456-7890",
                    EnrollmentDate = new DateTime(2018, 9, 1),
                    Password = "hashed_password_1",
                },
                new Student
                {
                    IdNumber = "S002",
                    Name = "Jane Smith",
                    DateOfBirth = new DateTime(2001, 7, 12),
                    Email = "jane.smith@example.com",
                    PhoneNumber = "123-456-7891",
                    EnrollmentDate = new DateTime(2019, 9, 1),
                    Password = "hashed_password_2",
                },
                new Student
                {
                    IdNumber = "S003",
                    Name = "Alice Brown",
                    DateOfBirth = new DateTime(1999, 3, 15),
                    Email = "alice.brown@example.com",
                    PhoneNumber = "123-456-7892",
                    EnrollmentDate = new DateTime(2017, 9, 1),
                    Password = "hashed_password_3",
                },
                new Student
                {
                    IdNumber = "S004",
                    Name = "Bob White",
                    DateOfBirth = new DateTime(2002, 11, 23),
                    Email = "bob.white@example.com",
                    PhoneNumber = "123-456-7893",
                    EnrollmentDate = new DateTime(2020, 9, 1),
                    Password = "hashed_password_4",
                },
                new Student
                {
                    IdNumber = "S005",
                    Name = "Clara Black",
                    DateOfBirth = new DateTime(2000, 9, 5),
                    Email = "clara.black@example.com",
                    PhoneNumber = "123-456-7894",
                    EnrollmentDate = new DateTime(2018, 9, 1),
                    Password = "hashed_password_5",
                },
            };

            _context.Students.AddRange(students);
            await _context.SaveChangesAsync();

            return Ok("Database has been seeded with sample students.");
        }
    }
}
