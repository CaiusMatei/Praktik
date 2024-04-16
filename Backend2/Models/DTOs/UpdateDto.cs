using System.ComponentModel.DataAnnotations;

namespace Project1.Models.DTOs
{
    public class UpdateDto
    {
        [Required]
        public int Id { get; set; }

        [Required(ErrorMessage = "Please enter an email address.")]
        [DataType(DataType.EmailAddress)]
        [EmailAddress(ErrorMessage = "This email address is not valid.")]
        public string Email { get; set; } = string.Empty;
        /*[Required]
        public string Password { get; set; } = string.Empty;*/
    }
}
