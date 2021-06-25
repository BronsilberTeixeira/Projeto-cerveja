import { Observable, of, pipe } from 'rxjs';
import { tap, map, filter, distinctUntilChanged, debounceTime,  switchMap, catchError} from 'rxjs/operators' ;
import { Cervejas } from './Cervejas';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class CervejasService {

readonly API = 'https://api.punkapi.com/v2/beers';

constructor(private http:HttpClient) { }

list(){
  return this.http.get<Cervejas[]>(this.API);
}

pesquisaCerveja(filtro:string){
  return this.http.get<Cervejas[]>(`${this.API}?beer_name=${filtro}`)
}
detalhesCerveja(id:string){
  return this.http.get<Cervejas[]>(`${this.API}?ids=${id}`)
}


}


