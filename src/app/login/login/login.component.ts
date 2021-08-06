import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser
} from 'angularx-social-login';
import { SocialLoginService } from 'src/app/shared/login-service/social-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  response: any;
  socialusers = new SocialUser();
  isLoggedin: boolean = false;
  User: any;

  constructor(
    private authService: SocialAuthService,
    private router: Router,
    public OAuth: SocialAuthService,
    private login: SocialLoginService
  ) {}

  ngOnInit(): void {}

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signInWithGoogle(socialProvider: any) {
    let socialPlatformProvider: any;

    if (socialProvider === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.OAuth.authState.subscribe((user) => {
      this.socialusers = user;
      this.isLoggedin = user != null;
      console.log(this.socialusers);
    });

    this.router.navigate(['/listagem']);
  }

  savesResponse(users: SocialUser) {
    this.login.Savesresponse(users).subscribe((res: any) => {
      console.log(res);
      this.User = res;
      this.response = res.userDetail;
      localStorage.setItem('users', JSON.stringify(users));
      console.log(localStorage.setItem('socialusers', JSON.stringify(users)));
      this.router.navigate([`/listagem`]);
    });
  }
}
