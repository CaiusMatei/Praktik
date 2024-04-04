using System.ComponentModel.DataAnnotations;

namespace Project1.Models
{
    public class Course
    {
        [Key]
        public int Id { get; set; }
        public string CourseName { get; set; }
        public ICollection<Event> Events { get; set; }
    }
}
