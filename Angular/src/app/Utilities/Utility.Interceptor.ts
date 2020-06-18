import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { UserModel } from "src/app/Login/LoginPageModel";
import { Observable } from "rxjs";

@Injectable()
export class MyJwtInterceptor implements HttpInterceptor{
    constructor(private user: UserModel) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders:{
                Authorization:`Bearer ${this.user.token}`
            }
        });
        return next.handle(request);
    }
    
}