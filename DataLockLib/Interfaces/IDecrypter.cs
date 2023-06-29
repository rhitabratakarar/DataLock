namespace DataLockLib.Interfaces
{
    public interface IDecrypter
    {
        public string GetDecryptedString(byte[] cipherText, byte[] Key, byte[] IV);
        public string GetDecryptedString(string stringCipherText, byte[] Key, byte[] IV);
    }
}
