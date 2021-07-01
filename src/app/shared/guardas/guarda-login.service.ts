import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from 'src/app/login/login/login.component';

@Injectable ({
  providedIn: 'root'
})
export class GuardaLoginService implements CanActivate {

  user:any;

  constructor(private login:LoginComponent) { }

  canActivate()
  {
    let authInfo:any = this.login.Savesresponse(this.user);
    if(authInfo && authInfo.roles && authInfo.roles.length > 0){
      return true;
    }
    return false
  }
}
