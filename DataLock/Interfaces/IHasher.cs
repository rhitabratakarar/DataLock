interface IHasher
{
    byte[] GetHashedMessage(string text);
    byte[] GetHashedMessage(string text, int length);
}
