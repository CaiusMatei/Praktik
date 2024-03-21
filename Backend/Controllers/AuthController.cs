using Backend.Data;
using Backend.Models;
using Backend.Models.DTOs;
using Backend.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly LIADbContext _dbContext;
        private readonly IUserRepository _userRepository;

        public AuthController(LIADbContext dbContext, IUserRepository userRepository)
        {
            _dbContext = dbContext;
            _userRepository = userRepository;
        }

        [HttpPost("register")]
        public IActionResult Register(RegisterDto dto)
        {
            var user = new User
            {
                Email = dto.Email,
                Password = dto.Password
            };

            return Created("The user has been registered successfully.", _userRepository.CreateUser(user));
        }
    }
}
