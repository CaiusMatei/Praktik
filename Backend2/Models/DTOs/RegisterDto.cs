using System.ComponentModel.DataAnnotations;

namespace Project1.Models.DTOs
{
    public class RegisterDto
    {
        [Required(ErrorMessage = "Please enter an email address.")]
        [DataType(DataType.EmailAddress)]
        [EmailAddress(ErrorMessage = "This email address is not valid.")]
        [StringLength(200)]
        public string Email { get; set; } = string.Empty;
        [Required(ErrorMessage = "Please enter your password.")]
        [DataType(DataType.Password)]
        [MinLength(6, ErrorMessage = "Your password has to contain at least 6 characters.")]
        [MaxLength(20, ErrorMessage = "Your password cannot contain more than 20 characters.")]
        public string Password { get; set; } = string.Empty;

        [Required]
        public int RoleId { get; } = 2;
        [Required]
        public string? RoleType { get; } = "User";
    }
}
