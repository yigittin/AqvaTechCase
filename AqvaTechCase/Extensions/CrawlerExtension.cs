using Abot2.Core;
using Abot2.Crawler;
using Abot2.Poco;
using Serilog;

namespace AqvaTechCase.Extensions
{
    public static class CrawlerExtension
    {
        public static async Task<List<string>> DemoSimpleCrawler()
        {
            var config = new CrawlConfiguration
            {
                MaxPagesToCrawl = 10, //Only crawl 10 pages
                MinCrawlDelayPerDomainMilliSeconds = 3000, //Wait this many millisecs between requests
                MaxCrawlDepth = 5
            };
            var crawler = new PoliteWebCrawler(config);
            List<string> collectedUrls = new();
            crawler.PageCrawlCompleted += (sender, args) =>
            {
                CrawledPage crawledPage = args.CrawledPage;
                collectedUrls.Add(crawledPage.Uri.AbsoluteUri);
            };//Several events available...

            var crawlResult = await crawler.CrawlAsync(new Uri("https://www.sozcu.com.tr/"));
            return collectedUrls;
        }

        private static async Task DemoSinglePageRequest()
        {
            var pageRequester = new PageRequester(new CrawlConfiguration(), new WebContentExtractor());

            var crawledPage = await pageRequester.MakeRequestAsync(new Uri("http://google.com"));
            Log.Logger.Information("{result}", new
            {
                url = crawledPage.Uri,
                status = Convert.ToInt32(crawledPage.HttpResponseMessage.StatusCode)
            });
        }

        private static void PageCrawlCompleted(object sender, PageCrawlCompletedArgs e)
        {
            var httpStatus = e.CrawledPage.HttpResponseMessage.StatusCode;
            var rawPageText = e.CrawledPage.Content.Text;
        }
    }
    
}
