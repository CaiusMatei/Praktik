using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project1.Data;
using Project1.Models;
using Project1.Models.DTOs;

namespace Project1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EducationController : ControllerBase
    {
        private readonly LIADbContext _context;

        public EducationController(LIADbContext context)
        {
            _context = context;
        }

        [HttpGet("Educations")]
        public IActionResult GetEducations()
        {
            var output = _context.Educations.ToList();
            return Ok(output);
        }

        [HttpPost("Add")]
        public IActionResult AddEducation(EducationDto educationDto)
        {
            var education = _context.Educations.FirstOrDefault(x=> x.Name == educationDto.Name);
            if (education == null)
            {
                var newEducation = new Education
                {
                    Name = educationDto.Name,
                };
                _context.Educations.Add(newEducation);
                _context.SaveChanges();
                return Ok(newEducation);
            }
            if (education != null)
            {
                return BadRequest($"{educationDto.Name} is already exist");
            }

            return Ok();
        }

        [HttpPut("Update/{id}")]
        public IActionResult UpdateEducation(int id, EducationDto educationDto)
        {
            var education = _context.Educations.FirstOrDefault(x=> x.Id ==  id);
            education.Name = educationDto.Name;
            _context.Educations.Update(education);
            _context.SaveChanges();
            return Ok(education);
        }

        [HttpDelete("Delete/{id}")]
        public IActionResult DeleteEducation(int id)
        {
            var education = _context.Educations.FirstOrDefault(x => x.Id == id);
            _context.Educations.Remove(education);
            _context.SaveChanges();
            return Ok(education);
        }
    }
}
