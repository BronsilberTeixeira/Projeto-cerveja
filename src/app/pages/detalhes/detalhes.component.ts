import { CervejasService } from 'src/app/shared/models/cervejas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  id: any;
  cervejas:any;


  constructor(private route: ActivatedRoute,
    private service: CervejasService,
    private inscricao:Subscription) {}



  ngOnInit(): void {
    return this.chamarId();
  }

  chamarId(){
    this.inscricao = this.route.params.subscribe(
      (params:any)=> {
        this.id = params['id'];

      this.cervejas = this.service.list()
      }
    )
  }
ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  this.inscricao.unsubscribe;
}
}
