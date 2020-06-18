import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PatientModel } from './PatientModel';

@Component({
  selector: 'app-root',
  templateUrl: './PatientView.html',
  styleUrls: ['./PatientStyle.css']
})
export class PatientComponent {
  PatientObj:PatientModel= null;
  private PatientObjs:PatientModel[]=[]; 
  //PatientObjs:Array<PatientModel>= new Array<PatientModel>();
  constructor(public httpobj:HttpClient){
    this.PatientObj=new PatientModel();
  }

  Submit(){
    //http post submit
    var patientDto:any={};
    patientDto.name=this.PatientObj.name;
    patientDto.problemDescription=this.PatientObj.problemDescription;
    this.httpobj.post("https://localhost:5001/api/PatientAPI",
    patientDto).subscribe(res=>this.Success(res),res=>this.Error(res));
    }

  Success(res){
    this.PatientObjs = res;
    this.PatientObj=new PatientModel(); 
  }
  Error(res){
    alert(res);
    this.PatientObj=new PatientModel(); 
  }

}
