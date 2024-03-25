using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class LIADbContext : DbContext
    {
        public LIADbContext(DbContextOptions<LIADbContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
    }
}
