using Application.Repositories.News;
using Application.RequestParameters;
using Application.ViewModels.DataTable;
using Application.ViewModels.News;
using Application.ViewModels.Results;
using AqvaTechCase.Extensions;
using AqvaTechCase.Models;
using Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using Nest;
using System.Data;
using System.Runtime.Intrinsics.X86;

namespace AqvaTechCase.Controllers
{
    public class NewsController : Controller
    {
        private readonly ILogger<NewsController> _logger;
        private readonly INewsRepository _newsRepository;
        public NewsController(ILogger<NewsController> logger, INewsRepository newsRepository)
        {
            _logger = logger;
            _newsRepository = newsRepository;
        }

        public IActionResult Index()
        {
            return View();
        }
        [HttpPost(Name = "GetNews")]
        public async Task<IActionResult> GetNews([FromBody]Pagination pagination)
        {
            VM_DataTableJson<List<News>> dataTable = new();
            var response = new VM_Result<VM_DataTableJson<List<News>>>("Url listesi getirildi", dataTable);
            if (string.IsNullOrEmpty(pagination.Search))
            {
                var result = await _newsRepository.GetAll<News>();
                if (result != null && result.Count() > 0)
                {
                    int totalCount = result.Count();
                    dataTable.recordsTotal = totalCount;
                    dataTable.data = result.Skip(pagination.Page * pagination.Size).Take(pagination.Size).ToList();
                    dataTable.draw = pagination.Draw;
                    dataTable.recordsFiltered = totalCount;
                }
            }
            else
            {
                var result = await _newsRepository.SearchAsync<News>(pagination.Search);
                if (result != null && result.Count() > 0)
                {
                    int totalCount = result.Count();
                    dataTable.recordsTotal = totalCount;
                    dataTable.data = result.Skip(pagination.Page * pagination.Size).Take(pagination.Size).ToList();
                    dataTable.draw = pagination.Draw;
                    dataTable.recordsFiltered = totalCount;
                }
            }       
            return Ok(dataTable);
        }
        [HttpPost(Name = "UpdateNews")]
        public async Task<IActionResult> UpdateNews()
        {
            await _newsRepository.RemoveAll<News>();
            var indexs = await CrawlerExtension.DemoSimpleCrawler();
            var documents = new List<object>();
            foreach ( var index in indexs)
            {
                documents.Add(new
                {
                    CreateDate = DateTime.Now,
                    Id = Guid.NewGuid(),
                    Url = index
                });
            }
            bool result = await _newsRepository.AddOrUpdateBulk(documents.ToArray());
            if (result)
                return Ok();
            else
                return BadRequest();
        }
    }
}
