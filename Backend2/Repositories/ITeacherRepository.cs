using Project1.Models;

namespace Project1.Repositories
{
        public interface ITeacherRepository
        {
        IEnumerable<Teacher> GetAllTeachers();
        Teacher GetTeacherByFirstName(string? firstName);
        void AddTeacher(Teacher teacher);
        void SaveChanges();
        }
    
}
