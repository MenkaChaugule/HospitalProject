import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { MasterComponent } from "src/app/PatientHome/MasterComponent";
import { HomeComponent } from "src/app/PatientHome/HomeComponent";
import { MainRoutes } from "src/app/PatientHome/MainRouting";
import { SecurityLogic } from "src/app/Utilities/Utility.AuthGuard";
import { UserModel } from "src/app/Login/LoginPageModel";
import { MyJwtInterceptor } from "src/app/Utilities/Utility.Interceptor";



@NgModule({
  declarations: [
    HomeComponent,
    MasterComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(MainRoutes),
    HttpClientModule
    ],
  providers: [UserModel,SecurityLogic, {provide:HTTP_INTERCEPTORS, useClass:MyJwtInterceptor,multi:true}],
  bootstrap: [MasterComponent]
})
export class MainModule { }
