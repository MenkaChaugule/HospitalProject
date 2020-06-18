import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "src/app/Login/LoginPageComponent";
import { UserRoutes } from "src/app/Login/LoginRouting";
//import { UserModel } from "src/app/Login/LoginPageModel";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(UserRoutes),
    HttpClientModule
    ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
