using Microsoft.AspNetCore.Mvc;
using DataLock.Models;
using DataLock.Db;
using DataLock.Classes;

namespace DataLock.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CredentialController : ControllerBase
    {
        private readonly CredentialDbContext _context;

        public CredentialController(CredentialDbContext dbContext)
        {
            _context = dbContext;
        }

        [HttpGet]
        [Route("sample-credential")]
        public IList<Credential> Credentials()
        {
            Credential sampleCredential = SampleCredentialGenerator.GetSampleCredential();
            IList<Credential> sampleCredentialList = new List<Credential>()
            {
                sampleCredential
            };
            return sampleCredentialList;
        }

        [HttpGet]
        [Route("all")]
        public IList<Credential> GetAllCredentials()
        {
            return _context.Credential.ToList();
        }
    }
}
