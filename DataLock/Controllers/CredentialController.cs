using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DataLock.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CredentialController : ControllerBase
    {
        [HttpGet]
        public string Get()
        {
            return "Success";
        }

        [HttpGet]
        [Route("hello")]
        public string SayHello()
        {
            return "hello";
        }
    }
}
