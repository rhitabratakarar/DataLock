using DataLockLib.Interfaces;
using DataLockLib.Models;

namespace DataLockLib.Classes
{
    public static class SampleCredentialGenerator
    {
        private static readonly Random random = new();

        private static string GetRandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
                .Select(s => s[random.Next(s.Length)]).ToArray());
        }

        public static Credential GetSampleCredential()
        {
            Credential sample = new()
            {
                Email = GetRandomString(10) + "@gmail.com",
                Username = GetRandomString(15),
                Name = GetRandomString(15),
                Password = GetRandomString(10),
                Notes = GetRandomString(30)
            };
            return sample;
        }
    }
}
