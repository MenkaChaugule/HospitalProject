import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { PatientComponent } from "src/app/PatientInfo/PatientComponent";
import { PatientRoutes } from "src/app/PatientInfo/PatientRouting";
import { MyJwtInterceptor } from "src/app/Utilities/Utility.Interceptor";




@NgModule({
  declarations: [
    PatientComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(PatientRoutes),
    HttpClientModule
    ],
  providers: [ {provide:HTTP_INTERCEPTORS, useClass:MyJwtInterceptor,multi:true} ],
  bootstrap: [PatientComponent]
})
export class PatientModule { }
