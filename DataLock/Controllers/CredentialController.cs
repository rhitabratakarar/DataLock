using Microsoft.AspNetCore.Mvc;
using DataLock.Models;
using DataLockAPI.Services;

namespace DataLock.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CredentialController : ControllerBase
    {
        private readonly CredentialService _credentialService;

        public CredentialController(CredentialService service)
        {
            _credentialService = service;
        }

        [HttpGet]
        public async Task<List<Credential>> Get() =>
        await _credentialService.GetAsync();

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Credential>> Get(string id)
        {
            var credential = await _credentialService.GetAsync(id);

            if (credential is null)
            {
                return NotFound();
            }

            return credential;
        }

        [HttpPost]
        public async Task<IActionResult> Post(Credential newCredential)
        {
            await _credentialService.CreateAsync(newCredential);

            return CreatedAtAction(nameof(Get), new { id = newCredential.CredentialId }, newCredential);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, [FromBody]Credential updateCredential)
        {
            var credential = await _credentialService.GetAsync(id);

            if (credential is null)
            {
                return NotFound();
            }

            updateCredential.CredentialId = credential.CredentialId;

            await _credentialService.UpdateAsync(id, updateCredential);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var book = await _credentialService.GetAsync(id);

            if (book is null)
            {
                return NotFound();
            }

            await _credentialService.RemoveAsync(id);

            return NoContent();
        }
    }
}
