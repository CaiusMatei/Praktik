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
            var user = _userRepository.GetByEmail(request.Email);

            if (user == null)
            {
                return BadRequest(new { message= "This email address is incorrect." });
            }
            else if (!BCrypt.Net.BCrypt.Verify(request.Password, user.Password))
            {
                return BadRequest(new { message = "This password is incorrect." });
            }

            var jwt = _tokenRepository.CreateToken(user);

            return Ok(new { message = "Welcome! You have successfully logged in.", jwt });
        }

        [HttpDelete("delete"), Authorize(Roles = "Admin")]
        public async Task<ActionResult<User>> Delete(DeleteDto request)
        {
            var user = _userRepository.GetById(request.Id);

            if (user == null)
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

        [HttpGet("test")]
        public async Task<ActionResult<List<User>>> GetAllUsers()
        {
            return Ok(await _dbContext.Users.ToListAsync());
        }

        //[HttpPost("teachers")]
        //public IActionResult AddTeacher([FromBody] TeacherDto teacherDto)
        //{
        //    var teacher = new Teacher
        //    {
        //        FirstName = teacherDto.FirstName,
        //        LastName = teacherDto.LastName
        //        // Övriga egenskaper för lärare, om sådana finns
        //    };

        //    _dbContext.Add(teacher);
        //    return Ok(teacher);
        //}

        //[HttpGet("teachers")]
        //public IActionResult GetTeachers()
        //{
        //    var teacherDtos = _dbContext.Teachers.ToList();

        //    foreach (var teacher in teacherDtos)
        //    {
        //        var teacherDto = new TeacherDto
        //        {
        //            FirstName = teacher.FirstName,
        //            LastName = teacher.LastName,
              
        //            // Övriga egenskaper för lärare, om sådana finns
        //        };

               
        //    }

        //    return Ok(teacherDtos);
        //}
    }

    
}
