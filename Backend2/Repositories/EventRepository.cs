using Project1.Data;
using Project1.Models;
using Project1.Models.DTOs;

namespace Project1.Repositories
{
    public class EventRepository : IEventRepository
    {
        private readonly LIADbContext _context;

        public EventRepository(LIADbContext context)
        {
            _context = context;
        }

        public void AddEvent(EventDto eventDto)
        {
            var newEvent = new Event
            {
                Description = eventDto.Description,
                StartTime = eventDto.StartTime,
                EndTime = eventDto.EndTime,
                CourseId = eventDto.CourseId,
            };

            _context.Events.Add(newEvent);              
        }

        public void AddEventEducation(EventEducationDto eventEducationDto)
        {
            var neweventEducation = new EventEducation
            {
                EventId = eventEducationDto.EventId,
                EducationId = eventEducationDto.EducationId
            };
            _context.EventEducations.Add(neweventEducation);
        }

        public void AddEventLocation(EventLoacationDto eventLocationDto)
        {
            var newEventLocation = new EventLocation
            {
                EventId = eventLocationDto.EventId,
                LocationId = eventLocationDto.locationId
            };
            _context.EventLocations.Add(newEventLocation);
        }

        public void AddEventTeacher(EventTeacherDto eventTeacherDto)
        {
            var newEventTeacher = new EventTeacher
            {
                EventId = eventTeacherDto.EventId,
                TeacherId = eventTeacherDto.TeacherId
            };
            _context.EventTeachers.Add(newEventTeacher);
        }

        public void DeleteEvent(int id)
        {
            var _event = _context.Events.FirstOrDefault(x => x.Id == id);
            _context.Events.Remove(_event);

        }

        public IEnumerable<Event> GetEventByName(string name)
        {
            var output = (from e in _context.Events
                         where e.Course.CourseName == name
                         select new Event
                         {
                             Id = e.Id,
                             Description = e.Description,
                             StartTime = e.StartTime,
                             EndTime = e.EndTime,
                             Course = e.Course,
                             EventTeachers = e.EventTeachers.Select(e => new EventTeacher { Teacher = e.Teacher }).ToList(),
                             EventLocations = e.EventLocations.Select(e => new EventLocation { Location = e.Location }).ToList(),
                             EventEducations = e.EventEducations.Select(e => new EventEducation { Education = e.Education }).ToList()
                         }).ToList();
            return output;
        }

        public IEnumerable<Event> GetEvents()
        {
            var output = (from e in _context.Events
                          select new Event
                          {
                              Id = e.Id,
                              Description = e.Description,
                              StartTime = e.StartTime,
                              EndTime = e.EndTime,
                              Course = e.Course,
                              EventTeachers = e.EventTeachers.Select(e => new EventTeacher { Teacher = e.Teacher }).ToList(),
                              EventLocations = e.EventLocations.Select(e => new EventLocation { Location = e.Location }).ToList(),
                              EventEducations = e.EventEducations.Select(e => new EventEducation { Education = e.Education }).ToList()
                          }).ToList();

            return output;
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void UpdateEvent(int id, EventDto eventDto)
        {
            var _event = _context.Events.FirstOrDefault(x => x.Id == id);
            _event.Description = eventDto.Description;
            _event.StartTime = eventDto.StartTime;
            _event.EndTime = eventDto.EndTime;
            _event.CourseId = eventDto.CourseId;
            _context.Events.Update(_event);
        }
    }
}
