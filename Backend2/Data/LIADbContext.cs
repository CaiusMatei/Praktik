using Project1.Models;
using Microsoft.EntityFrameworkCore;

namespace Project1.Data
{
    public class LIADbContext : DbContext
    {
        public LIADbContext(DbContextOptions<LIADbContext> options) : base(options)
        {

        }

        public DbSet<Role> Roles { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<Event> Events { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<Education> Educations { get; set; }
        public DbSet<EventTeacher> EventTeachers { get; set;}
        public DbSet<EventLocation> EventLocations { get; set; }    
        public DbSet<EventEducation> EventEducations { get; set;}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<EventEducation>()
                .HasKey(ek => new { ek.EventId, ek.EducationId });

            modelBuilder.Entity<EventLocation>()
                .HasKey(es => new { es.EventId, es.LocationId });

            modelBuilder.Entity<EventTeacher>()
                .HasKey(el => new { el.EventId, el.TeacherId });

            // Lägg till eventuella konfigurationer eller relationer här
        }
    }
    
}
