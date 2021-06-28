import { Cervejas } from './../../shared/models/Cervejas';
import { CervejasService } from 'src/app/shared/models/cervejas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  id: any;
  cervejas:Cervejas[] = [];
  cerv:any;

  constructor(private route: ActivatedRoute,
    private service: CervejasService) {
    }



  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    let cerveja_id = this.id

    this.service.detalhesCerveja(cerveja_id )
    .subscribe((dados)=> this.cervejas = dados);

    console.log(this.cervejas);



  }





}
