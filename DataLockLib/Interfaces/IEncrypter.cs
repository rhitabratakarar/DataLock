namespace DataLockLib.Interfaces
{
    public interface IEncrypter
    {
        public byte[] Encrypt(string plainText, byte[] Key, byte[] IV);
    }

}