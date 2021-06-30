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
  response:any;
  socialusers= new SocialUser();
  logins:any;
  Users:any;

  constructor( private authService: SocialAuthService,
    private router: Router,
    public OAuth:SocialAuthService,
    private login:SocialloginService ) { }

  ngOnInit(): void {
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signInWithGoogle(socialProvider:string) {
    let socialPlatformProvider:any ;

    if (socialProvider === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }



    this.OAuth.signIn(socialPlatformProvider).then(socialusers => {
      console.log(socialProvider, socialusers);
      console.log(socialusers);
      this.Savesresponse(socialusers);

    });

  }


  Savesresponse( users:SocialUser) {

    this.login.Savesresponse(users).subscribe((res: any) => {
      console.log(res);
      this.Users=res;
      this.response = res.userDetail;
      localStorage.setItem('users', JSON.stringify(users));
      console.log(localStorage.setItem('socialusers', JSON.stringify(users)));
      this.router.navigate([`/listagem`]);
    });
  }
}
