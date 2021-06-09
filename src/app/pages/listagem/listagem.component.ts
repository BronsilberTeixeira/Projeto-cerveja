
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, pipe } from 'rxjs';
import {distinctUntilChanged, debounceTime,  switchMap,} from 'rxjs/operators';
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
  queryField = new FormControl();


  private filtroNome = new Subject<string>();

  cervejas: Cervejas[] = []

  constructor(private service: CervejasService,
    private http: HttpClient) {}


ngOnInit(){
   this.listagem();

}

listagem(){
   this.service.list()
  .subscribe((dados:any) => this.cervejas = dados);
}

pesquisaCerveja(){

  if(this.queryField.value === ''){
    console.log('campo vazio');
  }else if(){};

  this.queryField = dado.pipe(
    debounceTime(200),
    distinctUntilChanged
  )
  ;

  this.service.pesquisaCerveja(this.queryField.value)
  .subscribe((dados)=> this.cervejas = dados )


}
}
