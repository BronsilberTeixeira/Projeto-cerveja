import { CervejasService } from './../../shared/models/cervejas.service';
import { Cervejas } from './../../shared/models/Cervejas';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-horizontal',
  templateUrl: './listagem-horizontal.component.html',
  styleUrls: ['./listagem-horizontal.component.scss']
})
export class ListagemHorizontalComponent implements OnInit {

  cervejas: Cervejas[] = [];

  constructor(private service: CervejasService) { }

  ngOnInit(): void {
    return this.listagem();
  }

  listagem(){
    this.service.list()
    .subscribe((dados:any) => this.cervejas = dados);
  }
}
