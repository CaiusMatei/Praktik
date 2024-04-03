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
    }
}
