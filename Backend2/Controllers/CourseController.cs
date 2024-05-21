using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project1.Data;
using Project1.Models;
using Project1.Models.DTOs;

namespace Project1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly LIADbContext _context;

        public CourseController(LIADbContext context)
        {
            _context = context;
        }

        
        [HttpGet("Courses")]
        public IActionResult GetCourses(string search)
        {
            var courseList = string.IsNullOrEmpty(search) ? _context.Courses.ToList() : _context.Courses.Where(c => c.CourseName.ToLower().Contains(search.ToLower())).ToList();
            return Ok(courseList);
        }


        [HttpPost("Add")]
        public IActionResult AddCourse(CourseDto courseDto)
        {
            var course = _context.Courses.Where(x=> x.CourseName== courseDto.CourseName).FirstOrDefault();
            if (course == null)
            {
                var newCourse = new Course
                {
                    CourseName = courseDto.CourseName
                };
                _context.Courses.Add(newCourse);
                _context.SaveChanges();
                return Ok(newCourse);
            }

            if(course != null)
            {
                return BadRequest($"{course.CourseName} is already exist");
            }
            return Ok();
        }

        [HttpPut("Update/{id}")]
        public IActionResult UpdateCourse(int id, CourseDto courseDto)
        {
            var course = _context.Courses.FirstOrDefault(c => c.Id== id);

            if(course == null)
            {
                return BadRequest($"{course.Id} dont exist");
            }

            if(course!=null)
            {
             course.CourseName = courseDto.CourseName;
            _context.Courses.Update(course);
            _context.SaveChanges(); 
            return Ok($"{course.CourseName} updated");
            }

            return Ok();
        }

        [HttpDelete("Delete/{id}")]
        public IActionResult DeleteCourse(int id)
        {
            var course = _context.Courses.FirstOrDefault(c => c.Id == id);

            if(course == null)
            {
                return BadRequest($"{id} dont exist");
            }
            if(course!=null)
            {
            _context.Courses.Remove(course);
            _context.SaveChanges();
            return Ok($"{course.CourseName} deleted");
            }
            return Ok();
        }
    }
}
