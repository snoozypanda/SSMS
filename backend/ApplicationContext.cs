using Microsoft.EntityFrameworkCore;
using SSMSBackend.Models;

public class ApplicationDbContext : DbContext
{
    public DbSet<Student> Students { get; set; }
    public DbSet<Teacher> Teachers { get; set; }
    public DbSet<Course> Courses { get; set; }
    public DbSet<StudentCourse> StudentCourses { get; set; }
    public DbSet<Grade> Grades { get; set; }
    public DbSet<ClassSchedule> ClassSchedules { get; set; }
    public DbSet<Attendance> Attendances { get; set; }

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Student>().Property(s => s.Id).ValueGeneratedOnAdd();

        modelBuilder.Entity<Teacher>().Property(t => t.Id).ValueGeneratedOnAdd();

        modelBuilder.Entity<Course>().Property(c => c.Id).ValueGeneratedOnAdd();

        modelBuilder.Entity<Grade>().Property(g => g.Id).ValueGeneratedOnAdd();

        modelBuilder.Entity<ClassSchedule>().Property(cs => cs.Id).ValueGeneratedOnAdd();

        modelBuilder.Entity<Attendance>().Property(a => a.Id).ValueGeneratedOnAdd();

        // Ensure that IdNumber is unique for both Student and Teacher
        modelBuilder.Entity<Student>().HasIndex(s => s.IdNumber).IsUnique();

        modelBuilder.Entity<Teacher>().HasIndex(t => t.IdNumber).IsUnique();

        modelBuilder.Entity<StudentCourse>().HasKey(sc => new { sc.StudentId, sc.CourseId });
    }
}
