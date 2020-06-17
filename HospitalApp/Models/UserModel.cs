using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace HospitalApp.Models
{
    public class UserModel
    {
        public string userName { get; set; }
        public string password { get; set; }
        public string token { get; set; }
    }
}