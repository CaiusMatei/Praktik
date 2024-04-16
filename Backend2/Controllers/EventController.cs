using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project1.Data;
using Project1.Models;
using Project1.Models.DTOs;

namespace Project1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly LIADbContext _context;

        public EventController(LIADbContext context)
        {
            _context = context;
        }

        [HttpGet("Events")]
        public IActionResult GetEvents()
        {
            var output = (from e in _context.Events
                          join c in _context.Courses
                          on e.CourseId equals c.Id
                          select new 
                          {
                              e.Id,
                             c.CourseName,
                             e.Description,
                             e.StartTime,
                             e.EndTime

                          }).ToList();
         
            return Ok(output);
        }

        [HttpPost("Add")]
        public IActionResult AddEvent(EventDto eventDto)
        {
            var _event = new Event
            {
                CourseId = eventDto.CourseId,
                Description = eventDto.Description,
                StartTime = eventDto.StartTime,
                EndTime = eventDto.EndTime
            };
            _context.Events.Add(_event);
            _context.SaveChanges();
            return Ok(_event);

        }

        [HttpGet("Search/{name}")]
        public IActionResult GetEventByCourse(string name)
        {
            var output = (from e in _context.Events
                          join c in _context.Courses
                          on e.CourseId equals c.Id
                          where c.CourseName == name
                          select new
                          {
                              c.CourseName,
                              e.Description,
                              e.StartTime,
                              e.EndTime

                          }).ToList();

            return Ok(output);
        }

        [HttpPut("Update/{id}")]
        public IActionResult UpdateEvent(int id, EventDto eventDto)
        {
            var _event = _context.Events.FirstOrDefault(x => x.Id == id);
            _event.Description = eventDto.Description;
            _event.StartTime = eventDto.StartTime;
            _event.EndTime = eventDto.EndTime;
            _event.CourseId = eventDto.CourseId;
            _context.Events.Update(_event);
            _context.SaveChanges();
            return Ok(_event);
        }

        [HttpDelete("Delete/{id}")]
        public IActionResult DeleteEvent(int id)
        {
            var _event = _context.Events.FirstOrDefault(x => x.Id == id);
            _context.Events.Remove(_event);
            _context.SaveChanges();
            return Ok(_event);
        }
    }
}
