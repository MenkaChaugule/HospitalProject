import { Component } from '@angular/core';
import { PatientModel } from "src/app/PatientInfo/PatientModel";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './SearchPatient.View.html',
  styleUrls: ['./SearchStyle.css']
})
export class SearchComponent {
  patientName:string="";
  private patientModels:PatientModel[]=[]; 
  constructor(public http:HttpClient){
    
  }
  Search(){
    this.http.get("https://localhost:5001/api/PatientAPI?patientName=" +this.patientName)
    .subscribe(res=>this.Success(res),res=>this.Error(res));
  }
  Success(res){
    this.patientModels=res;
    this.patientName="";
  }
  Error(res){
    alert("Not found");
  }
}
