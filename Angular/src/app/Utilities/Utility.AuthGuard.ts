import { Injectable } from '@angular/core';
import {CanActivate,Router,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { UserModel } from "src/app/Login/LoginPageModel";

@Injectable()
export class SecurityLogic implements CanActivate{
    constructor(private _router: Router, public _user: UserModel) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this._user.token.length != 0){
            return true;
        }
        
        this._router.navigate(['/Login/User']);
        
        return false;

        
    }

}
    
    // CanActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot): Observable<Boolean>{
    // if(this._user.token.length != 0){
    //     return true;
    // }

    // this._router.navigate(['/Login']);

    // return false;
    // }
