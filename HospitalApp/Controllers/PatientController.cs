// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.AspNetCore.Cors;
// using HospitalApp.Models;
// using HospitalApp.Dal;
// using Microsoft.EntityFrameworkCore;
// using Microsoft.EntityFrameworkCore.SqlServer;
// using System.ComponentModel.DataAnnotations;
// using Microsoft.Extensions.Configuration;

// namespace HospitalApp.Controllers
// {
//     [EnableCors("AllowOriginRule")]
//     public class PatientController : Controller
//     {
//         //  static List<PatientModel> patients = new List<PatientModel>();
//         //string json=JsonConvert.SerializeObject(patients);
//         //  public IActionResult Add()
//         //  {
//         //      return Json(patients);
//         //  }

//         //   string constr="";
//         //   public PatientController(IConfiguration configuration)
//         //   {
//         //       constr = configuration["ConnStr"];
//         //   }

//         public IActionResult Submit([FromBody]PatientModel obj)
//         {
//            // patients.Add(obj);
//             var context = new ValidationContext(obj,null,null);

//             var result = new List<ValidationResult>();
//             var isValid = Validator.TryValidateObject(obj, context, result,true);

//             if(result.Count==0)
//             {
//                 PatientDal dal = new PatientDal(constr);
//                 dal.Database.EnsureCreated();
//                 dal.Add(obj);
//                 dal.SaveChanges();

//                 List<PatientModel> recs = dal.PatientModels.ToList<PatientModel>();

//                 return StatusCode(200,recs);
//             }
//             else
//             {
//                 return StatusCode(500,result);
//             }
//             //return View("PatientAdd",patients);
//             //return Json(patients);
//         }
//         public IActionResult Search(string patientName)
//        {
           
//        }
//     }
// }