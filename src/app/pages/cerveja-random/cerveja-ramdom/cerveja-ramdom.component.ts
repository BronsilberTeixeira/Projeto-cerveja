import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cerveja } from 'src/app/shared/models/cerveja.model';
import { CervejasService } from 'src/app/shared/service/cervejas.service';

@Component({
  selector: 'app-cerveja-ramdom',
  templateUrl: './cerveja-ramdom.component.html',
  styleUrls: ['./cerveja-ramdom.component.css']
})
export class CervejaRamdomComponent implements OnInit {

  cervejaAleatoria: Cerveja[];

  constructor( 
    private route: ActivatedRoute,
    private service: CervejasService) { }

  ngOnInit(): void {
    this.exibirCervejaAleatoria()
  }

  exibirCervejaAleatoria(){
    this.service.exibirCervejaAleatoria()
      .subscribe((res) => 
      this.cervejaAleatoria = res), 
      console.log(this.cervejaAleatoria);
  }

}
