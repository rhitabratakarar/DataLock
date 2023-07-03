using DataLockLib.Interfaces;
using DataLockLib.Classes;

namespace DataLockLib.FactoryClasses
{
    public class EncrypterFactory
    {
        public IEncrypter GetEncrypter()
        {
            return new AESEncrypter();
        }
    }
}
