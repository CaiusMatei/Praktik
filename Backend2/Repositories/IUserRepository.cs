using Project1.Models;

namespace Project1.Repositories
{
    public interface IUserRepository
    {
        User CreateUser(User user);
        User GetByEmail(string? email);
        User GetByPassword (string? password);

        User CheckExistingEmail(string? email);
    }
}
