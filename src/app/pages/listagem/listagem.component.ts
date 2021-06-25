

import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, pipe } from 'rxjs';
import {distinctUntilChanged, debounceTime,  switchMap, elementAt,} from 'rxjs/operators';
import { of } from 'rxjs';

import { CervejasService } from 'src/app/shared/models/cervejas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cervejas } from './../../shared/models/Cervejas';





@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
  preserveWhitespaces: true,
})



export class ListagemComponent implements OnInit {
  queryField = new FormControl();
  cervejas: Cervejas[] = [];
  troca:boolean = false;

  constructor(private service: CervejasService,
    private http: HttpClient,
    private _snackBar: MatSnackBar) {}


ngOnInit(){
   this.listagem();
}

listagem(){
   this.service.list()
  .subscribe((dados:any) => this.cervejas = dados);
}

pesquisaCerveja(){
  if(this.queryField.value === '' || this.queryField.value === null){
    this.abrirSnackbar();
  };

 if(this.cervejas.length === 0 ){
  this.abrirSnackbar();
 };
    this.service.pesquisaCerveja(this.queryField.value)
    .subscribe((dados)=> this.cervejas = dados );
  }

abrirSnackbar(){
  this._snackBar.open('Coloque uma cerveja valida', 'sair', { duration: 2000, panelClass: ['my-snack-bar'] });
  window.location.reload();
}

trocaCard(){
  this.troca = !this.troca;
}



}
