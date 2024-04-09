using Microsoft.AspNetCore.Mvc;
using Project1.Data;
using Project1.Models.DTOs;
using Project1.Models;
using Project1.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;

namespace Project1.Controllers
{

    [Route("teacher")]
    [ApiController]
    public class TeacherController : ControllerBase
    {
        private readonly ITeacherRepository _teacherRepository;

        public TeacherController(ITeacherRepository teacherRepository)
        {
            _teacherRepository = teacherRepository;
        }

        [HttpPost]
        public IActionResult CreateTeacher([FromBody] Teacher teacher)
        {
            _teacherRepository.AddTeacher(teacher);
            _teacherRepository.SaveChanges(); // Sparar ändringar i databasen
            return Created("The user has been registered successfully.", teacher);
        }

        [HttpGet]
        public IActionResult GetTeachers()
        {
            var teachers = _teacherRepository.GetAllTeachers();
            return Ok(teachers);
        }
    }
}
    

