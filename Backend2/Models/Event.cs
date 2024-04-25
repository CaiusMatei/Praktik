namespace Project1.Models
{
    public class Event
    {
        public int Id { get; set; }
        public int CourseId { get; set; }
        public string? Description { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public Course Course { get; set; }

        public ICollection<EventEducation> EventEducations { get; set; }
        public ICollection<EventLocation> EventLocations { get; set; }
        public ICollection<EventTeacher> EventTeachers { get; set; }
    }
}
