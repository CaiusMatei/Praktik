using System.ComponentModel.DataAnnotations;

namespace Project1.Models
{
    public class Role
    {
        [Key]
        public int Id { get; set; }
        public string RoleType { get; set; }
    }
}
