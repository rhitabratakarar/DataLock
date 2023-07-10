using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DataLockLib.Models;
using DataLockLib.FactoryClasses;

namespace DataLock.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CredentialController : ControllerBase
    {
        [HttpGet]
        [Route("sample-credential")]
        public IList<Credential> Credentials()
        {
            Credential sampleCredential = new SampleCredentialFactory().GetSampleCredential();
            IList<Credential> sampleCredentialList = new List<Credential>()
            {
                sampleCredential
            };
            return sampleCredentialList;
        }
    }
}
