import { Component } from '@angular/core';
import { UserModel } from "src/app/Login/LoginPageModel";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './LoginPageView.html',
  styleUrls: ['../app.component.css']
})
export class LoginComponent {
  // userObj:UserModel= new UserModel();

  constructor(public http:HttpClient,
              public router:Router,
              public userObj:UserModel){
    
  }

  Login(){
    this.http.post("https://localhost:5001/api/Security",this.userObj)
    .subscribe(res=>this.Success(res),res=>this.Error(res));
  }
  Success(res){
    this.userObj.token = res.token;
    alert("Login Successfully");
    this.router.navigate(['/Home']);
  }
  Error(res){
	//show error here --nbb
  }
}
