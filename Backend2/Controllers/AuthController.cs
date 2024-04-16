using Project1.Data;
using Project1.Models;
using Project1.Models.DTOs;
using Project1.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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

        [HttpPost("register"), Authorize(Roles = "Admin")]
        public async Task<ActionResult<User>> RegisterUser(RegisterDto request)
        {
            var _user = new User
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

            return Created("The user has been registered successfully.", _userRepository.CreateUser(_user));
        }

        [HttpPost("login")]
        public async Task<ActionResult<User>> LoginUser(LoginDto request)
        {
            var _user = _userRepository.GetByEmail(request.Email);

            if (_user == null)
            {
                return BadRequest(new { message= "This email address is incorrect." });
            }
            else if (!BCrypt.Net.BCrypt.Verify(request.Password, _user.Password))
            {
                return BadRequest(new { message = "This password is incorrect." });
            }

            var jwt = _tokenRepository.CreateToken(_user);

            return Ok(new { message = "Welcome! You have successfully logged in.", jwt });
        }

        [HttpDelete("delete"), Authorize(Roles = "Admin")]
        public async Task<ActionResult<User>> DeleteUser(DeleteDto request)
        {
            var _user = _userRepository.GetById(request.Id);

            if (_user == null)
            {
                return BadRequest(new { message = "This user does not exist." });
            }

            _userRepository.GetRoleId(request.RoleId);

            if (request.RoleId == 1)
            {
                return BadRequest(new { message = "Administrators cannot be deleted." });
            }

            _userRepository.DeleteUser(request.Id);

            return Ok(new { message = "The user has been deleted successfully." });
        }

        [HttpPut("update"), Authorize(Roles = "Admin")]
        public async Task<ActionResult<User>> UpdateUser(UpdateDto request)
        {
            var _user = _userRepository.GetById(request.Id);

            if (_user == null)
            {
                return BadRequest(new { message = "This user does not exist." });
            }

            _user.Email = request.Email;

            var existingEmail = _userRepository.CheckExistingEmail(request.Email);

            if (existingEmail != null)
            {
                return BadRequest(new { message = "The new email address must be unique." });
            }

            _userRepository.UpdateUser(request.Id);

            return Ok(new { message = "The user has been updated successfully." });
        }

        [HttpGet("test")]
        public async Task<ActionResult<List<User>>> GetAllUsers()
        {
            return Ok(await _dbContext.Users.ToListAsync());
        }
    }
}
