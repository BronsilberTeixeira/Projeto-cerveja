import { map } from 'rxjs/operators';

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { SocialloginService } from 'src/app/shared/models/sociallogin.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users:SocialUser[]=[];
  logins:any;
  Users:any;

  constructor( private authService: SocialAuthService,
    private router: Router,
    private login:SocialloginService ) { }

  ngOnInit(): void {
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    console.log(this.authService);

  }
  onSignIn()
  {
    this.Users = this.authService.signIn;

    if(this.Users.signIn === true){
      this.router.navigate([`/listagem`])
    }

  }

}
