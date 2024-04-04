namespace Project1.Models
{
    public class EventTeacher
    {
        public int EventId { get; set; }
        public Event Event { get; set; }

        public int TeacherId { get; set; }
        public Teacher Teacher { get; set; }
    }
}
