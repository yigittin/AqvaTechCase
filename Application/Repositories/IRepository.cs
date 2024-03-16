using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Nest;
namespace Application.Repositories
{
    public interface IRepository
    {
        public Task CreateIndexIfNotExists(string indexName);
        public Task<bool> AddOrUpdateBulk<T>(IEnumerable<T> documents) where T : class;
        public Task<bool> AddOrUpdate<T>(T document) where T : class;
        public Task<T> Get<T>(string key) where T : class;
        public Task<List<T>?> GetAll<T>() where T : class;
        public Task<List<T>> SearchAsync<T>(string keyword) where T : class;
        public Task<List<T>?> Query<T>(QueryContainer predicate) where T : class;
        public Task<bool> Remove<T>(string key) where T : class;
        public Task<long> RemoveAll<T>() where T : class;

    }
}
