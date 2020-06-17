using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using HospitalApp.Models;

namespace HospitalApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SecurityController : ControllerBase
    {
        
        private string GenerateKey(string userName)
        {
            // Key
            var securityKey = new SymmetricSecurityKey
            (Encoding.UTF8.GetBytes("238420983409284098230948"));
            // Algorithm
            var credentials = new
            SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            // claims
            var claims = new[] {
            new Claim(JwtRegisteredClaimNames.Sub, "menka"),
            new Claim(JwtRegisteredClaimNames.Email, ""),
            new Claim("Admin", "true"),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };
            var token = new JwtSecurityToken("finishingschool",
            "finishingschool",
            claims,
            expires: DateTime.Now.AddMinutes(120),
            signingCredentials: credentials);
            string tokenstring = new JwtSecurityTokenHandler().WriteToken(token);
            return tokenstring;
        }

        [HttpGet("{id}",Name="Get")]
        public string Get(int id)
        {
            return "value";

        }

         [HttpPost]
         public IActionResult Post([FromBody] UserModel obj)
         {
             if((obj.userName=="menka") && (obj.password=="pass@123")){
                 obj.token=GenerateKey(obj.userName);
                 obj.password="";
                 return Ok(obj);
             }
             else
             {
                 return StatusCode(401,"Not proper user");
             }

         }
    }
}