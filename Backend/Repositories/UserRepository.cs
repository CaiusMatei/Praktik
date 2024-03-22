using Backend.Data;
using Backend.Models;

namespace Backend.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly LIADbContext _dbContext;

        public UserRepository(LIADbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public User CreateUser(User user)
        {
            _dbContext.Users.Add(user);
            user.Id = _dbContext.SaveChanges();

            return user;
        }
    }
}
