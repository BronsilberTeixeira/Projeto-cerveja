import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  idAtual: any;

  constructor(private route: ActivatedRoute) { }



  ngOnInit(): void {
    return this.chamarId();
  }

  chamarId(){
  this.route.params.subscribe((objeto:any) =>{
  this.idAtual = objeto.id;

  this.idAtual = objeto['id'];
  })
  }

}
