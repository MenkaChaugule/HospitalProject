using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace HospitalApp.Models
{
    public class PatientModel
    {
        public int id { get; set; }
        [Required]
        [RegularExpression("^[a-z]{1,10}$")]
        public string name { get; set; }
         //[JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
         [Required]
        public string problemDescription { get; set; }
    }
}