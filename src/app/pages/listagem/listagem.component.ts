
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, pipe, Subject } from 'rxjs';
import { tap, map, filter, distinctUntilChanged, debounceTime,  switchMap} from 'rxjs/operators';
import { of } from 'rxjs';

import { CervejasService } from 'src/app/shared/models/cervejas.service';
import { Cervejas } from '../../shared/models/Cervejas';




@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
  preserveWhitespaces: true,
})



export class ListagemComponent implements OnInit {
  readonly SEARCH_API = 'https://api.punkapi.com/v2/beers'
  queryField = new FormControl();


  private filtroNome = new Subject<string>();

  cervejas: Cervejas[] = []

  constructor(private service: CervejasService,
    private http: HttpClient) {}


ngOnInit(){
   this.listagem();
   this.onSearch();
}

listagem(){
   this.service.list()
  .subscribe((dados:any) => this.cervejas = dados);
}

onSearch(){
let filtro = this.queryField.value

  if(!filtro.trim()){
    return of([])
  }

  return this.http.get<Cervejas[]>(`${this.SEARCH_API}/$beer_name={filtro}`).pipe(
    tap((filtro:any) => filtro.length?
      console.log(`Cerveja "${filtro}" encontrada`):
      console.log(`Cerveja "${filtro}" não encontrada `))
  )

}

}
