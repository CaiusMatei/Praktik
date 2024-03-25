using System.ComponentModel.DataAnnotations;

namespace Project1.Models.DTOs
{
    public class RegisterDto
    {
        [Required(ErrorMessage = "Please enter an email address.")]
        [DataType(DataType.EmailAddress)]
        [StringLength(50)]
        public string? Email { get; set; }

        [Required(ErrorMessage = "Please enter your password.")]
        [DataType(DataType.Password)]
        [MinLength(5, ErrorMessage = "Your password has to contain at least 5 characters.")]
        [MaxLength(20, ErrorMessage = "Your password cannot contain more than 20 characters.")]
        public string? Password { get; set; }
    }
}
