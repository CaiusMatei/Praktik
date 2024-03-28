using Project1.Data;
using Project1.Models;
using System.Security.Cryptography;

namespace Project1.Repositories
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

        public User GetByEmail (string? email)
        {
            return _dbContext.Users.FirstOrDefault(u=> u.Email == email);
        }
        public User GetByPassword(string? password)
        {
            return _dbContext.Users.FirstOrDefault(u=>u.Password == password);
        }
        public User CheckExistingEmail(string? email)
        {
            return _dbContext.Users.FirstOrDefault(u => u.Email == email);
        }
    }
}
