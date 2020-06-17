using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using HospitalApp.Models;
using System.ComponentModel.DataAnnotations;
using HospitalApp.Dal;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;

namespace HospitalApp.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PatientAPIController : ControllerBase
    {
        // string constr="";
        //   public PatientController(IConfiguration configuration)
        //   {
        //       constr = configuration["ConnStr"];
        //   }

        //GET
        [HttpGet]
        public IActionResult Get(string patientName)
        {
            PatientDal dal = new PatientDal();
           List<PatientModel> search= (from temp in dal.PatientModels where temp.name==patientName select temp)
                                    .ToList<PatientModel>();
           return Ok(search);
        }

        //POST
        [HttpPost]
        public IActionResult Post(PatientModel obj)
        {
            var context = new ValidationContext(obj,null,null);

            var result = new List<ValidationResult>();
            var isValid = Validator.TryValidateObject(obj, context, result,true);

            if(result.Count==0)
            {
                PatientDal dal = new PatientDal();
                dal.Database.EnsureCreated();
                dal.Add(obj);
                dal.SaveChanges();

                List<PatientModel> recs = dal.PatientModels.ToList<PatientModel>();

                return StatusCode(200,recs);
            }
            else
            {
                return StatusCode(500,result);
            }
        }

    }
}