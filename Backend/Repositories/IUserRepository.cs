using Backend.Models;

namespace Backend.Repositories
{
    public interface IUserRepository
    {
        User CreateUser(User user);
        User GetByEmail(string? email);
        User GetByPassword (string? password);
    }
}
