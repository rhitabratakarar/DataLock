using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace DataLock.Models
{
    public class Credential
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? CredentialId { get; set; }
        [BsonRequired]
        public string Username { get; set; } = null!;
        public string? Email { get; set; } = null!;
        [BsonRequired]
        public string Password { get; set; } = null!;
        public string? Notes { get; set; } = null!;
        public string? URL { get; set; } = null!;
        public string Name { get; set; } = "";
    }
}