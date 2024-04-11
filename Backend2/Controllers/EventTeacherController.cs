using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project1.Data;
using Project1.Models.DTOs;
using Project1.Models;

namespace Project1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventTeacherController : ControllerBase
    {
        private readonly LIADbContext _context;

        public EventTeacherController(LIADbContext context)
        {
            _context = context;
        }

        [HttpGet("EventTeacher")]
        public IActionResult GetEventTeacher()
        {
            var output = (from et in _context.EventTeachers
                          join e in _context.Events
                          on et.EventId equals e.Id
                          join t in _context.Teachers
                          on et.TeacherId equals t.Id
                          select new
                          {
                              et.EventId,
                              e.Description,
                              e.StartTime,
                              e.EndTime,
                              et.TeacherId,
                              t.FirstName,
                              t.LastName


                          }).ToList();

            return Ok(output);
        }

        [HttpPost("Add")]
        public IActionResult AddEventTeacher(EventTeacherDto eventTeacherDto)
        {
            var newEventTeacher = new EventTeacher
            {
                EventId = eventTeacherDto.EventId,
                TeacherId = eventTeacherDto.TeacherId,
            };
            _context.EventTeachers.Add(newEventTeacher);
            _context.SaveChanges();
            return Ok(newEventTeacher);
        }
    }
}
