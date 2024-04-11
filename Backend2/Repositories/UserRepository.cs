using Project1.Data;
using Project1.Models;

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

        public User DeleteUser(int Id)
        {
            var user = _dbContext.Users.Find(Id);

            _dbContext.Users.Remove(user);
            _dbContext.SaveChanges();

            return user;
        }

        public User GetByEmail(string? email) => _dbContext.Users.FirstOrDefault(u => u.Email == email);

        public User GetById(int id) => _dbContext.Users.FirstOrDefault(u => u.Id == id);

        public User GetByPassword(string? password) => _dbContext.Users.FirstOrDefault(u => u.Password == password);

        public User GetRoleId(int roleId) => _dbContext.Users.FirstOrDefault(r => r.RoleId == roleId);

        public User CheckExistingEmail(string? email) => _dbContext.Users.FirstOrDefault(u => u.Email == email);
    }
}
