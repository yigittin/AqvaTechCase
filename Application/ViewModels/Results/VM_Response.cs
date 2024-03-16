using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.ViewModels.Results
{
    public class VM_Response
    {
        public VM_Response(string message)
        {
            Success = false;
            Message = message;
        }
        public VM_Response(string message, bool success)
        {
            Success = success;
            Message = message;
        }
        public bool Success { set; get; }
        public string Message { set; get; }
    }
}
