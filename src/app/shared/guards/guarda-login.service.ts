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

  canActivate(route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot):Observable<boolean> | boolean
  {
    let authInfo:any = this.login.signInWithGoogle(this.user);
    if(authInfo && authInfo.roles && authInfo.roles.length > 0){
      return true;
    }
    return false
  }
}
