using Project1.Data;
using Project1.Models;
using Project1.Models.DTOs;
using Project1.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using System.Security.Cryptography;
using Humanizer;
using Microsoft.AspNetCore.Authorization;

namespace Project1.Controllers
{
    [Route("auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly LIADbContext _dbContext;
        private readonly IConfiguration _configuration;
        private readonly ITokenRepository _tokenRepository;
        private readonly IUserRepository _userRepository;

        public AuthController(LIADbContext dbContext, IConfiguration configuration, ITokenRepository tokenRepository, IUserRepository userRepository)
        {
            _dbContext = dbContext;
            _configuration = configuration;
            _tokenRepository = tokenRepository;
            _userRepository = userRepository;
        }

        [HttpPost("register")]
        public async Task<ActionResult<User>> Register(RegisterDto request)
        {
            var user = new User
            {
                Email = request.Email,
                RoleId = request.RoleId,
                RoleType = request.RoleType,
                Password = BCrypt.Net.BCrypt.HashPassword(request.Password),
            };

            var existingEmail = _userRepository.CheckExistingEmail(request.Email);

            if (existingEmail != null)
            {
                return BadRequest(new { message = "This user already exists." });
            }

            return Created("The user has been registered successfully.", _userRepository.CreateUser(user));
        }

        [HttpPost("login")]
        public async Task<ActionResult<User>> Login(LoginDto request)
        {
            var user =_userRepository.GetByEmail(request.Email);

            if (user == null)
            {
                return BadRequest(new { message= "This email address is incorrect."});
            }

            if (!BCrypt.Net.BCrypt.Verify(request.Password, user.Password))
            {
                return BadRequest(new { message = "This password is incorrect."});
            }

            var jwt = _tokenRepository.CreateToken(user);

            return Ok(new {message = "Welcome! You have successfully logged in.", jwt});
        }

        [HttpGet("test"), Authorize(Roles = "Admin")]
        public async Task<ActionResult<List<User>>> GetAllUsers()
        {
            return Ok(await _dbContext.Users.ToListAsync());
        }

    }
}
