using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Project1.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public int RoleId { get; set; }
        public string RoleType { get; set; }

        [ForeignKey("RoleId")]
        [JsonIgnore]
        public Role Role { get; set; }
    }
}
