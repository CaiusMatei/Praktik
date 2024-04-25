using Project1.Models;
using Project1.Models.DTOs;

namespace Project1.Repositories
{
    public interface IEventRepository
    {
        IEnumerable<Event> GetEvents();
        void AddEvent(EventDto eventDto );
        void DeleteEvent(int id);
        void UpdateEvent(int id, EventDto eventDto);
        IEnumerable<Event> GetEventByName(string name);
        void AddEventTeacher(EventTeacherDto eventTeacherDto);
        void AddEventLocation (EventLoacationDto eventLocationDto);
        void AddEventEducation (EventEducationDto eventEducationDto);
        void Save();
    }
}
