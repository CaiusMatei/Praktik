using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project1.Data;
using Project1.Models;
using Project1.Models.DTOs;

namespace Project1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventLocationController : ControllerBase
    {
        private readonly LIADbContext _context;

        public EventLocationController(LIADbContext context)
        {
            _context = context;
        }

        [HttpGet("EventLocation")]
        public IActionResult GetEventLocation()
        {
            var output = (from el in _context.EventLocations
                          join e in _context.Events
                          on el.EventId equals e.Id
                          join l in _context.Locations
                          on el.LocationId equals l.Id
                          select new
                          {
                              el.EventId,
                              e.Description,
                              e.StartTime,
                              e.EndTime,
                              el.LocationId,
                              l.LocationName
                             

                          }).ToList();

            return Ok(output);
        }

        [HttpPost("Add")]
        public IActionResult AddEventLocation(EventLocationDto eventLocationDto)
        {
            var newEventLocation = new EventLocation
            {
                EventId = eventLocationDto.EventId,
                LocationId = eventLocationDto.LocationId
            };
            _context.EventLocations.Add(newEventLocation);
            _context.SaveChanges();
            return Ok(newEventLocation);
        }
    }
}
