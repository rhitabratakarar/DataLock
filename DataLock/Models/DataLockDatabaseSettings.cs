namespace DataLock.Models
{
    public class DataLockDatabaseSettings
    {
        public string ConnectionString { get; set; } = null!;

        public string DatabaseName { get; set; } = null!;

        public string CredentialCollectionName { get; set; } = null!;
    }
}
