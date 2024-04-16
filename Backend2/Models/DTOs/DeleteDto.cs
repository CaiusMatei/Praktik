using System.ComponentModel.DataAnnotations;

namespace Project1.Models.DTOs
{
    public class DeleteDto
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public int RoleId { get; set; }
    }
}
