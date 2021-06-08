
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, pipe } from 'rxjs';
import { tap, map, filter, distinctUntilChanged, debounceTime,  switchMap} from 'rxjs/operators';

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

onSearch(): void{

}










}
