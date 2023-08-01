using DataLock.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace DataLockAPI.Services;

public class CredentialService
{
    private readonly IMongoCollection<Credential> _credentialCollection;

    public CredentialService(
        IOptions<DataLockDatabaseSettings> DataLockDatabaseSettings)
    {
        var mongoClient = new MongoClient(
            DataLockDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            DataLockDatabaseSettings.Value.DatabaseName);

        _credentialCollection = mongoDatabase.GetCollection<Credential>(
            DataLockDatabaseSettings.Value.CredentialCollectionName);
    }

    public async Task<List<Credential>> GetAsync() =>
        await _credentialCollection.Find(_ => true).ToListAsync();

    public async Task<Credential?> GetAsync(string id) =>
        await _credentialCollection.Find(x => x.CredentialId == id).FirstOrDefaultAsync();

    public async Task CreateAsync(Credential newCredential) =>
        await _credentialCollection.InsertOneAsync(newCredential);

    public async Task UpdateAsync(string id, Credential updatedCredential) =>
        await _credentialCollection.ReplaceOneAsync(x => x.CredentialId == id, updatedCredential);

    public async Task RemoveAsync(string id) =>
        await _credentialCollection.DeleteOneAsync(x => x.CredentialId == id);
}