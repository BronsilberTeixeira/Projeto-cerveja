import { Socialusers } from './../models/socialUser';
import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  socialusers = new SocialUser();
  constructor(public OAuth: SocialAuthService,    private router: Router) { }

  ngOnInit() {
    //this.socialusers = JSON.parse(localStorage.getItem('socialusers'));
    console.log(this.socialusers.photoUrl);
  }
  logout() {
   alert(1);
    this.OAuth.signOut().then(data => {
      debugger;
      this.router.navigate([`/login`]);
    });
  }
}
