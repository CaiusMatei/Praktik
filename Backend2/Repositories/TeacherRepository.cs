using Microsoft.EntityFrameworkCore;
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

        public void AddTeacher(Teacher teacher)
        {
            _dbContext.Teachers.Add(teacher);
        }

        public void SaveChanges()
        {
            _dbContext.SaveChanges();
        }

        public Teacher GetTeacherById(int teacherId)
        {
            
            return _dbContext.Teachers.FirstOrDefault(teacher => teacher.Id == teacherId);
            
        }

        public void UpdateTeacher(Teacher teacher)
        {
            _dbContext.Entry(teacher).State = EntityState.Modified;
            _dbContext.SaveChanges();
        }

        public void DeleteTeacher(int teacherId)
        {
            Teacher teacher = _dbContext.Teachers.Find(teacherId);
            _dbContext.Teachers.Remove(teacher);
            _dbContext.SaveChanges();
        }
    }
}
