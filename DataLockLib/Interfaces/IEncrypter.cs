namespace DataLockLib.Interfaces
{
    public interface IEncrypter
    {
        public byte[] GetEncryptedBytesArray(string plainText, byte[] Key, byte[] IV);
        public string GetEncryptedString(string plainText, byte[] Key, byte[] IV);
    }

}