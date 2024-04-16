using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace Project1.Models.DTOs
{
    public class TeacherDto
    {
        [Required(ErrorMessage = "Please enter firstname.")]
        public string FirstName { get; set; } = string.Empty;

        [AllowNull]
        public string LastName { get; set; } = string.Empty;

    }
}
