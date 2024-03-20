using Microsoft.EntityFrameworkCore;

namespace Backend.LIADbContext
{
    public class LIADbContext : DbContext
    {
        public LIADbContext(DbContextOptions<LIADbContext> options) : base(options)
        {
        }
    }
}
