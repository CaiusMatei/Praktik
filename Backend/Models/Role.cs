using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class Role
    {
        [Key]
        public int Id { get; set; }
        public string RoleType { get; set; }
        public int UserId { get; set; }
        [ForeignKey("UserId")]
        public User Users { get; set; }

    }
}
