import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {



  constructor(private route: ActivatedRoute) {
    console.log(this.route);
  }



  ngOnInit(): void {
    return this.chamarId();
  }

  chamarId(){

  }

}
