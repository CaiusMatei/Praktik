using Azure.Core;
using Project1.Data;
using Project1.Models;
using Project1.Models.DTOs;

namespace Project1.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly LIADbContext _dbContext;

        public UserRepository(LIADbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public User CreateUser(User _user)
        {
            _dbContext.Users.Add(_user);
            _user.Id = _dbContext.SaveChanges();

            return _user;
        }

        public User DeleteUser(int id)
        {
            var _user = _dbContext.Users.FirstOrDefault(u => u.Id == id);

            _dbContext.Users.Remove(_user);
            _dbContext.SaveChanges();

            return _user;
        }

        public User UpdateUser(int id)
        {
            var _user = _dbContext.Users.FirstOrDefault(u => u.Id == id);

            _dbContext.Users.Update(_user);
            _dbContext.SaveChanges();

            return _user;
        }

        public User GetByEmail(string? email) => _dbContext.Users.FirstOrDefault(u => u.Email == email);

        public User GetById(int id) => _dbContext.Users.FirstOrDefault(u => u.Id == id);

        public User GetByPassword(string? password) => _dbContext.Users.FirstOrDefault(u => u.Password == password);

        public User GetRoleId(int roleId) => _dbContext.Users.FirstOrDefault(r => r.RoleId == roleId);

        public User CheckExistingEmail(string? email) => _dbContext.Users.FirstOrDefault(u => u.Email == email);
    }
}
