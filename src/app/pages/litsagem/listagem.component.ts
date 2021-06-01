import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, pipe } from 'rxjs';
import { tap, map, filter, distinctUntilChanged, debounceTime,  switchMap} from 'rxjs/operators';
import { Cervejas } from './Cervejas';
import { CervejasService } from './cervejas.service';


@Component({
  selector: 'app-litsagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  cerveja: Cervejas[] = []
  constructor(private service: CervejasService) { }

ngOnInit(){
  this.service.list()
  .subscribe((dados:any) => this.cerveja = dados);
}

}
