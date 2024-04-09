using Project1.Data;
using Project1.Models;
using System;

namespace Project1.Repositories
{
    public class TeacherRepository : ITeacherRepository
    {
        private readonly LIADbContext _dbContext;

        public TeacherRepository(LIADbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<Teacher> GetAllTeachers()
        {
            return _dbContext.Teachers.ToList();
        }

        public Teacher GetTeacherByFirstName(string firstName)
        {
            return _dbContext.Teachers.FirstOrDefault(t => t.FirstName == firstName);
        }

        public void AddTeacher(Teacher teacher)
        {
            _dbContext.Teachers.Add(teacher);
        }

        public void SaveChanges()
        {
            _dbContext.SaveChanges();
        }

    }
}
