using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;
using HospitalApp.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace HospitalApp.Dal
{
    public class PatientDal : DbContext
    {
         protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
         {
             optionsBuilder.UseSqlServer(@"Data Source=Mahesh-PC;Initial Catalog=PatientDB;Integrated Security=True");
         }   

         protected override void OnModelCreating(ModelBuilder modelBuilder)
         {
             modelBuilder.Entity<PatientModel>().ToTable("tblPatient");
             modelBuilder.Entity<PatientModel>().HasKey(p => p.id);
            //  modelBuilder.Entity<PatientModel>().Property(t => t.id)
            //  .ValueGeneratedNever();
         }
         public DbSet<PatientModel> PatientModels {get; set;}
    }
}