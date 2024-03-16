using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.ViewModels.News
{
    public class VM_News
    {
        public Guid Id { get; set; }
        public DateTime CreateDate { get; set; }
        public string Url { get; set; }
    }
}
