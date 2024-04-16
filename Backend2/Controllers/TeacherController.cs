using Microsoft.AspNetCore.Mvc;
using Project1.Data;
using Project1.Models.DTOs;
using Project1.Models;
using Project1.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Azure.Core;

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

        [HttpPost("Add")]
        public IActionResult CreateTeacher([FromBody] Teacher teacher)
        {
            _teacherRepository.AddTeacher(teacher);
            _teacherRepository.SaveChanges(); // Sparar ändringar i databasen
            return Created("The user has been registered successfully.", teacher);
        }

        [HttpGet("Teachers")]
        public IActionResult GetTeachers()
        {
            var teachers = _teacherRepository.GetAllTeachers();
            return Ok(teachers);
        }

        [HttpGet("Search/{id}")]
        public IActionResult GetTeacherById(int id)
        {
            var teacher = _teacherRepository.GetTeacherById(id);
            if (teacher == null)
            {
                return NotFound("This teacher does not exist.");
            }
            return Ok(teacher);
        }

        [HttpPut("Update/{id}")]
        public IActionResult UpdateTeacher(int id, [FromBody] Teacher teacher)
        {
            if (id != teacher.Id)
            {
                return BadRequest("Teacher not found");
            }

            _teacherRepository.UpdateTeacher(teacher);
            return Ok(new { message = "The teacher has been updated successfully." });
        }

        [HttpDelete("Delete/{id}")]
        public IActionResult DeleteTeacher(int id)
        {
            _teacherRepository.DeleteTeacher(id);
            return Ok(new { message = "The teacher has been deleted successfully." });
        }
    }
}
    

