using System.Security.Cryptography;
using System.Text;
using DataLockLib.Interfaces;

namespace DataLockLib.Classes
{
    public class Hasher : IHasher
    {
        public byte[] GetHashedMessage(string text)
        {
            byte[] messageBytes = Encoding.UTF8.GetBytes(text);
            byte[] hashedValue = SHA256.HashData(messageBytes);
            return hashedValue;
        }

        public byte[] GetHashedMessage(string text, int length)
        {
            byte[] messageBytes = Encoding.UTF8.GetBytes(text);
            byte[] hashedValue = SHA256.HashData(messageBytes);
            return hashedValue[0..length];
        }
    }
}
