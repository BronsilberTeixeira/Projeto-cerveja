import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SocialLoginService {
url:any;
  constructor(private http: HttpClient) { }

  Savesresponse(responce:any)
  {
    this.url =  'http://localhost:4200/login/Savesresponse';
    return this.http.post(this.url,responce);
  }
}
