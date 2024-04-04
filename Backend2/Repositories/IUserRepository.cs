using Project1.Models;

namespace Project1.Repositories
{
    public interface IUserRepository
    {
        User CreateUser(User user);
        User DeleteUser(int id);
        //User UpdateUser(User user);

        User GetByEmail(string? email);
        User GetById(int id);
        User GetByPassword(string? password);
        User GetRoleId(int roleId);

        User CheckExistingEmail(string? email);
    }
}
