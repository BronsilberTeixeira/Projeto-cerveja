
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CervejasService } from 'src/app/shared/models/cervejas.service';



@NgModule({
  declarations: [],
  providers:[CervejasService],
  imports: [
    CommonModule
  ]
})
export class DetalhesModule { }
