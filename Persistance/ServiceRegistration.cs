using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Application.Repositories.News;
using Domain.Entities;
using Elasticsearch.Net;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Nest;
using Persistance.Repositories.News;
namespace Persistance
{
    public static class ServiceRegistration
    {
        public static void AddPersistenceServices(this IServiceCollection services, IConfiguration configs)
        {
            ElasticsearchConnector conn = new(configs);
            var defaultIndex = configs["ELKConfiguration:index"];

            services.AddScoped<INewsRepository>(_ => new NewsRepository(conn,defaultIndex));
        }
        private static void AddDefaultMappings(ConnectionSettings settings)
        {
            settings.DefaultMappingFor<News>(p =>
                p.Ignore(x => x.Id));
        }

        private static void CreateIndex(IElasticClient client, string indexName)
        {
            client.Indices.Create(indexName, i => i.Map<News>(x => x.AutoMap()));
        }
    }
}
