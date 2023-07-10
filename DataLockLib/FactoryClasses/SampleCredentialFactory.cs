using DataLockLib.Classes;
using DataLockLib.Models;

namespace DataLockLib.FactoryClasses
{
    public class SampleCredentialFactory
    {
        public Credential GetSampleCredential()
        {
            Credential sampleCredential = SampleCredentialGenerator.GetSampleCredential();
            return sampleCredential;
        }
    }
}
