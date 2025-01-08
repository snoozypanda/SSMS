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
    public class GradeController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public GradeController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/grade
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Grade>>> GetGrades()
        {
            var grades = await _context.Grades.ToListAsync();

            return Ok(grades);
        }

        // GET: api/grade/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Grade>> GetGrade(int id)
        {
            var grade = await _context.Grades.FirstOrDefaultAsync(g => g.Id == id);

            if (grade == null)
            {
                return NotFound();
            }

            return Ok(grade);
        }

        // POST: api/grade
        [HttpPost]
        public async Task<ActionResult<Grade>> PostGrade(Grade grade)
        {
            _context.Grades.Add(grade);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetGrade), new { id = grade.Id }, grade);
        }

        // PUT: api/grade/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGrade(int id, Grade grade)
        {
            if (id != grade.Id)
            {
                return BadRequest();
            }

            var existingGrade = await _context.Grades.FindAsync(id);
            if (existingGrade == null)
            {
                return NotFound();
            }

            existingGrade.Value = grade.Value;
            existingGrade.StudentId = grade.StudentId;
            existingGrade.CourseId = grade.CourseId;

            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/grade/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGrade(int id)
        {
            var grade = await _context.Grades.FindAsync(id);
            if (grade == null)
            {
                return NotFound();
            }

            _context.Grades.Remove(grade);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // POST: api/grade/save
        [HttpGet("save")]
        public async Task<ActionResult> SaveGrades()
        {
            if (_context.Grades.Any())
            {
                return Ok("Grades already exist in the database.");
            }

            var grades = new List<Grade>
            {
                new Grade
                {
                    Value = 90,
                    StudentId = 1,
                    CourseId = 1,
                },
                new Grade
                {
                    Value = 85,
                    StudentId = 2,
                    CourseId = 1,
                },
                new Grade
                {
                    Value = 78,
                    StudentId = 3,
                    CourseId = 2,
                },
                new Grade
                {
                    Value = 92,
                    StudentId = 4,
                    CourseId = 3,
                },
                new Grade
                {
                    Value = 88,
                    StudentId = 5,
                    CourseId = 4,
                },
            };

            _context.Grades.AddRange(grades);
            await _context.SaveChangesAsync();

            return Ok("Database has been seeded with sample grades.");
        }
    }
}
