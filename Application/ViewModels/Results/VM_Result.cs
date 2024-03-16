using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.ViewModels.Results
{
    public class VM_Result<T> : VM_Response where T : class
    {
        public VM_Result(string message, T data) : base(message)
        {
            Message = message;
            Data = data;
            Success = true;
        }

        public T Data { get; set; }
    }
}
