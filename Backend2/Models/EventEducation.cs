namespace Project1.Models
{
    public class EventEducation
    {
        public int EventId { get; set; }
        public Event Event { get; set; }

        public int EducationId { get; set; }
        public Education Education { get; set; }
    }
}
