using Project1.Models;

namespace Project1.Repositories
{
    public interface ITokenRepository
    {
        string CreateToken(User user);
    }
}
