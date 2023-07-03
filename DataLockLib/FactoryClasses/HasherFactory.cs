using DataLockLib.Classes;
using DataLockLib.Interfaces;

namespace DataLockLib.FactoryClasses
{
    public class HasherFactory
    {
        public IHasher GetHasher()
        {
            return new SHA256Hasher();
        }
    }
}
