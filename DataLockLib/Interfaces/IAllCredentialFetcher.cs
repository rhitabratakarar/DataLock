using DataLockLib.Models;

namespace DataLockLib.Interfaces
{
    public interface IAllCredentialFetcher
    {
        public IList<Credential> GetAllCredentials();
    }
}
