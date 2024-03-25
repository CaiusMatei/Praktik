using Project1.Models;
using Microsoft.EntityFrameworkCore;

namespace Project1.Data
{
    public class LIADbContext : DbContext
    {
        public LIADbContext(DbContextOptions<LIADbContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
    }
}
