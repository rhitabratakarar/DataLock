using DataLockLib.Classes;
using DataLockLib.Interfaces;

namespace DataLockTests
{
    public class CryptoTest
    {
        [Fact]
        public void TestEncryptionAndDecryptionOfMessage()
        {
            const string message = "This is exposed!! and agane is exposed.";

            const string password = "very secure password";
            const string initVector = "secure init vector";

            IHasher hasher = new Hasher();
            byte[] hashedPass = hasher.GetHashedMessage(password, 32);
            byte[] hashedVect = hasher.GetHashedMessage(initVector, 16);

            IEncrypter encrypter = new Encrypter();
            string encryptedMessage = encrypter.GetEncryptedString(message, hashedPass, hashedVect);

            IDecrypter decrypter = new Decrypter();
            string decryptedMessage = decrypter.GetDecryptedString(encryptedMessage, hashedPass, hashedVect);

            Assert.True(message.Equals(decryptedMessage));
        }
    }
}