import { Observable, pipe } from 'rxjs';
import { tap, map, filter, distinctUntilChanged, debounceTime,  switchMap, catchError} from 'rxjs/operators' ;
import { Cervejas } from './Cervejas';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CervejasService {

readonly API = 'https://api.punkapi.com/v2/beers';

constructor(private http:HttpClient) { }

list(){
return this.http.get<Cervejas[]>(this.API)
}

procurarCerveja(filtro:string){
    if(!filtro.trim()){
    return of([])
  }

  return this.http.get<Cervejas[]>(`${this.API}/$beer_name={filtro}`).pipe(
    tap((x:any) => x.length?
      this.log(`Cerveja "${filtro}" encontrada`):
      this.log(`Cerveja "${filtro}" não encontrada `))
  )
}


}
