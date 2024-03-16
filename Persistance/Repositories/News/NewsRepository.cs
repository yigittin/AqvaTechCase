using Application.Repositories.News;
using Nest;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistance.Repositories.News
{
    public class NewsRepository : Repository,INewsRepository
    {
        public NewsRepository(ElasticsearchConnector connector, string indexName) : base(connector, indexName)
        {
        }
    }
}
