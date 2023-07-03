using System.ComponentModel.DataAnnotations;

namespace DataLockLib.Models
{
    public class Credential
    {
        public string? Username { get; set; }
        public string? Email { get; set; }
        [Required]
        public string Password { get; set; } = "";
        public string? Notes { get; set; }
        public string? URL { get; set; }
        [Required]
        public string Name { get; set; } = "";
    }
}