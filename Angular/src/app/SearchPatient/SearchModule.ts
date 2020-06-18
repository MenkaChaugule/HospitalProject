import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SearchComponent } from "src/app/SearchPatient/SearchPatient.Component";
import { SearchRoutes } from "src/app/SearchPatient/SearchRouting";
//import { MyJwtInterceptor } from "src/app/Utilities/Utility.Interceptor";


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(SearchRoutes),
    HttpClientModule
    ],
  providers: [],
  bootstrap: [SearchComponent]
})
export class SearchModule { }
