using System.ComponentModel.DataAnnotations;

namespace DataLock.Models
{
    public class Credential
    {
        [Key]
        public Guid CredentialId { get; } = Guid.NewGuid();
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