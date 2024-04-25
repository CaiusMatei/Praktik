using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project1.Data;
using Project1.Models;
using Project1.Models.DTOs;
using Project1.Repositories;

namespace Project1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        //private readonly LIADbContext _context;

        private readonly IEventRepository _ieventRepository;

        public EventController(IEventRepository ieventRepository)
        {
            _ieventRepository = ieventRepository;
        }

        [HttpGet("Events")]
        public IActionResult GetEvent()
        {
            var eventList = _ieventRepository.GetEvents();
            return Ok(eventList);
        }

        [HttpPost("Add/Event")]
        public IActionResult AddEvent(EventDto eventDto)
        {
             _ieventRepository.AddEvent(eventDto);
            _ieventRepository.Save();
            return Ok();

        }

        [HttpGet("Search/{name}")]
        public IActionResult GetEventByCourse(string name)
        {
           var output = _ieventRepository.GetEventByName(name);

            return Ok(output);
        }

        [HttpPut("Update/{id}")]
        public IActionResult UpdateEvent(int id, EventDto eventDto)
        {
            _ieventRepository.UpdateEvent(id, eventDto);
            _ieventRepository.Save();
            return Ok();
        }

        [HttpDelete("Delete/{id}")]
        public IActionResult DeleteEvent(int id)
        {
           _ieventRepository.DeleteEvent(id);
            _ieventRepository.Save();
            return Ok();
        }

        [HttpPost("Add/EventTeacher")]
        public IActionResult AddEventTeacher(EventTeacherDto eventTeacherDto)
        {
            _ieventRepository.AddEventTeacher(eventTeacherDto);
            _ieventRepository.Save();
            return Ok();
        }

        [HttpPost("Add/EventLocation")]
        public IActionResult AddEventLocation(EventLoacationDto eventLoacationDto)
        {
            _ieventRepository.AddEventLocation(eventLoacationDto);
            _ieventRepository.Save();
            return Ok();
        }

        [HttpPost("Add/EventEducation")]
        public IActionResult AddEventEducation( EventEducationDto eventEducationDto)
        {
            _ieventRepository.AddEventEducation(eventEducationDto);
            _ieventRepository.Save();
            return Ok();
        }



    }
}
