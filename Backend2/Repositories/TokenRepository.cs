using Microsoft.IdentityModel.Tokens;
using Project1.Data;
using Project1.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace Project1.Repositories
{
    public class TokenRepository : ITokenRepository
    {
        private readonly LIADbContext _dbContext;
        private readonly IConfiguration _configuration;

        public TokenRepository(LIADbContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _configuration = configuration;
        }

        public string CreateToken(User user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Role, user.RoleType)
            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(
                _configuration.GetSection("Appsettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddHours(1),
                signingCredentials: creds);

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }
    }
}
