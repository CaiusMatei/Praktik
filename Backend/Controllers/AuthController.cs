using Backend.Data;
using Backend.Models;
using Backend.Models.DTOs;
using Backend.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
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
            var existingEmail = _userRepository.CheckExistingEmail(dto.Email);
            if (existingEmail != null)
            {
                return BadRequest(new { message = "user already exists" });
            }
            return Created("The user has been registered successfully.", _userRepository.CreateUser(user));
        }
        [HttpPost("login")]
        public IActionResult Login(LoginDto dto)
        {
            var email=_userRepository.GetByEmail(dto.Email);
            if (email == null)
            {
                return BadRequest(new {message="Wrong email"});
                

            }
            var password=_userRepository.GetByPassword(dto.Password);
            if (password == null)
            {
                return BadRequest(new { message = "Wrong Password" });
            }
            return Ok(new { message = "Welcome! You have successfully logged in!:) xdlol" });
        }
        
    }
}
