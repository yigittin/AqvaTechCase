using Domain.Entities;
using Elasticsearch.Net;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Nest;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;

namespace Persistance
{
    public class ElasticsearchConnector
    {
        public ElasticClient Client { get; }
        private readonly IConfiguration _configs;
        public ElasticsearchConnector(IConfiguration configs)
        {
            _configs = configs;
            var url = _configs["ELKConfiguration:Uri"];
            var defaultIndex = _configs["ELKConfiguration:index"];
            var settings = new ConnectionSettings(new Uri(url)).PrettyJson().DefaultIndex(defaultIndex).EnableApiVersioningHeader();
            AddDefaultMappings(settings);
            Client = new ElasticClient(settings);
            CreateIndex(Client, defaultIndex);
        }
        private void AddDefaultMappings(ConnectionSettings settings)
        {
            settings.DefaultMappingFor<News>(p =>
                p.Ignore(x => x.Id));
        }

        private void CreateIndex(IElasticClient client, string indexName)
        {
            client.Indices.Create(indexName, i => i.Map<News>(x => x.AutoMap()));
        }
    }
}
