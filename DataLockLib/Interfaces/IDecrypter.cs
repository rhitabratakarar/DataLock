namespace DataLockLib.Interfaces
{
    public interface IDecrypter
    {
        public string Decrypt(byte[] cipherText, byte[] Key, byte[] IV);
    }
}
