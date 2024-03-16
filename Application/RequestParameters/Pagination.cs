using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.RequestParameters
{
    public class Pagination
    {
        public int Draw { get; set; }
        public int Page { get; set; }
        public int Size { get; set; }
        public string Search { get; set; }
    }
}
