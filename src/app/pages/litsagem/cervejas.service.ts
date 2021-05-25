import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CervejasService {

private readonly API = 'https://api.punkapi.com/v2/beers';

constructor(private http:HttpClient) { }

list(){
return this.http.get<[]>(this.API)
}


}
