import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cerveja } from '../models/cerveja.model';

@Injectable({
  providedIn: 'root',
})
export class CervejasService {
  readonly API = 'https://api.punkapi.com/v2/beers';

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Cerveja[]>(this.API);
  }

  pesquisaCerveja(beer_name: string) {
    const params = { beer_name };
    return this.http.get<Cerveja[]>(this.API, { params });
  }
  detalhesCerveja(id:string){
    return this.http.get<Cerveja[]>(`${this.API}?ids=${id}`)
  }

  exibirCervejaAleatoria(){
    return this.http.get<Cerveja[]>(`${this.API}/random`)
  }
}
