using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SSMSBackend.Models; // Update with your namespace

namespace SSMSBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CourseController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/course
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Course>>> GetCourses()
        {
            var courses = await _context.Courses.ToListAsync();
            return Ok(courses);
        }

        // GET: api/course/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Course>> GetCourse(int id)
        {
            var course = await _context.Courses.FirstOrDefaultAsync(c => c.Id == id);
            if (course == null)
            {
                return NotFound();
            }

            return Ok(course);
        }

        // POST: api/course
        [HttpPost]
        public async Task<ActionResult<Course>> PostCourse(Course course)
        {
            // Ensure the teacher exists before creating the course
            var teacher = await _context.Teachers.FindAsync(course.TeacherId);
            if (teacher == null)
            {
                return BadRequest("Invalid TeacherId.");
            }

            _context.Courses.Add(course);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCourse), new { id = course.Id }, course);
        }

        // PUT: api/course/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCourse(int id, Course course)
        {
            if (id != course.Id)
            {
                return BadRequest();
            }

            var existingCourse = await _context.Courses.FindAsync(id);
            if (existingCourse == null)
            {
                return NotFound();
            }

            // Update course details
            existingCourse.Title = course.Title;
            existingCourse.Description = course.Description;
            existingCourse.TeacherId = course.TeacherId;

            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/course/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCourse(int id)
        {
            var course = await _context.Courses.FindAsync(id);
            if (course == null)
            {
                return NotFound();
            }

            _context.Courses.Remove(course);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // GET: api/course/with-students
        [HttpGet("with-students")]
        public async Task<ActionResult<IEnumerable<Course>>> GetCoursesWithStudents()
        {
            var courses = await _context
                .Courses.Include(c => c.StudentCourses)
                .ThenInclude(sc => sc.Student) // Include students in student courses
                .ToListAsync();

            return Ok(courses);
        }

        // POST: api/course/save
        // POST: api/course/save
        [HttpGet("save")]
        public async Task<ActionResult> SaveCourses()
        {
            // Check if the database already has courses
            if (_context.Courses.Any())
            {
                return Ok("Courses already exist in the database.");
            }

            // Fetch the first teacher and student from the database
            var teacher = await _context.Teachers.FirstOrDefaultAsync();
            var student = await _context.Students.FirstOrDefaultAsync();

            if (teacher == null)
            {
                return BadRequest("No teacher found in the database.");
            }

            if (student == null)
            {
                return BadRequest("No student found in the database.");
            }

            // Create sample courses
            var courses = new List<Course>
            {
                new Course
                {
                    Title = "Math 101",
                    Description = "Introduction to Mathematics",
                    TeacherId = teacher.Id,
                },
                new Course
                {
                    Title = "Science 102",
                    Description = "Introduction to Science",
                    TeacherId = teacher.Id,
                },
                new Course
                {
                    Title = "History 103",
                    Description = "World History",
                    TeacherId = teacher.Id,
                },
                new Course
                {
                    Title = "English 104",
                    Description = "English Literature",
                    TeacherId = teacher.Id,
                },
                new Course
                {
                    Title = "Computer Science 105",
                    Description = "Introduction to Programming",
                    TeacherId = teacher.Id,
                },
            };

            // Add the courses to the context
            _context.Courses.AddRange(courses);
            await _context.SaveChangesAsync();

            // Now, let's register the student for each course
            var studentCourses = courses
                .Select(course => new StudentCourse
                {
                    StudentId = student.Id,
                    CourseId = course.Id,
                    RegistrationDate = DateTime.UtcNow,
                    IsActive = true,
                    FeePaid = true,
                })
                .ToList();

            // Add the student-course relationships
            _context.StudentCourses.AddRange(studentCourses);
            await _context.SaveChangesAsync();

            return Ok("Database has been seeded with sample courses and student enrollments.");
        }
    }
}
