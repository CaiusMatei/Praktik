using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project1.Data;
using Project1.Models;
using Project1.Models.DTOs;
namespace Project1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationController : ControllerBase
    {
        private readonly LIADbContext _context;

        public LocationController(LIADbContext context)
        {
            _context = context;
        }

        [HttpGet("Locations")]
        public IActionResult GetLocations()
        {
            var output = _context.Locations.ToList();
            return Ok(output);
        }

        [HttpPost("Add")]
        public IActionResult AddLocation(LocationDto locationDto)
        {
            var location = _context.Locations.FirstOrDefault(x=> x.LocationName == locationDto.LocationName);

            if (location == null)
            {
                var newLocation = new Location
                {
                    LocationName = locationDto.LocationName
                };
                _context.Locations.Add(newLocation);
                _context.SaveChanges();
                return Ok(newLocation);
            }
            if (location != null)
            {
                return BadRequest($"{locationDto.LocationName} is already exist");
            }

            return Ok();
        }

        [HttpPut("Update/{id}")]
        public IActionResult AddLocation(int id, LocationDto locationDto)
        {
            var location = _context.Locations.FirstOrDefault(x => x.Id == id);

            location.LocationName = locationDto.LocationName;
            _context.Locations.Update(location);
            _context.SaveChanges();

            return Ok(location);
        }

        [HttpDelete("Delete/{id}")]
        public IActionResult DeleteLocation(int id)
        {
            var location = _context.Locations.FirstOrDefault(x => x.Id == id);
            _context.Locations.Remove(location);
            _context.SaveChanges();
            return Ok(location);
        }
    }
}
