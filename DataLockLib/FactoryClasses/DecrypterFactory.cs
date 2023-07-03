using DataLockLib.Classes;
using DataLockLib.Interfaces;
namespace DataLockLib.FactoryClasses
{
    public class DecrypterFactory
    {
        public IDecrypter GetDecrypter()
        {
            return new AESDecrypter();
        }
    }
}
