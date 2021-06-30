import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SocialloginService {
url:any;
  constructor(private http: HttpClient) { }

  Savesresponse(responce:any)
  {
    this.url =  'http://localhost:4200/Api/login/Saveresponce';
    return this.http.post(this.url,responce);
  }
}
