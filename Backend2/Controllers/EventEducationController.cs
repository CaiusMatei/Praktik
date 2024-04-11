using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project1.Data;
using Project1.Models.DTOs;
using Project1.Models;

namespace Project1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventEducationController : ControllerBase
    {
        private readonly LIADbContext _context;

        public EventEducationController(LIADbContext context)
        {
            _context = context;
        }

        [HttpGet("EventEducation")]
        public IActionResult GetEventEducation()
        {
            var output = (from ed in _context.EventEducations
                          join e in _context.Events
                          on ed.EventId equals e.Id
                          join edu in _context.Educations
                          on ed.EducationId equals edu.Id
                          select new
                          {
                              ed.EventId,
                              e.Description,
                              e.StartTime,
                              e.EndTime,
                              ed.EducationId,
                              edu.Name,
                              
                          }).ToList();

            return Ok(output);
        }

        [HttpPost("Add")]
        public IActionResult AddEventEducation(EventEducationDto eventEducationDto)
        {
            var newEventEducation = new EventEducation
            {
                EventId = eventEducationDto.EventId,
                 EducationId = eventEducationDto.EducationId
            };
            _context.EventEducations.Add(newEventEducation);
            _context.SaveChanges();
            return Ok(newEventEducation);
        }
    }
}
