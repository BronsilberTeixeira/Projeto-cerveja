import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, pipe } from 'rxjs';
import { tap, map, filter, distinctUntilChanged, debounceTime,  switchMap} from 'rxjs/operators';
import { Cervejas } from './Cervejas';
import { CervejasService } from './cervejas.service';


@Component({
  selector: 'app-litsagem',
  templateUrl: './litsagem.component.html',
  styleUrls: ['./litsagem.component.css']
})
export class LitsagemComponent implements OnInit {

  cerveja: Cervejas[] = []
  constructor(private service: CervejasService) { }

ngOnInit(){
  this.service.list()
  .subscribe((dados:any) => this.cerveja = dados);
}

}
