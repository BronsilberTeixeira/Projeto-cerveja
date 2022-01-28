import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CervejasService } from 'src/app/shared/service/cervejas.service';
import { Cerveja } from '../../shared/models/cerveja.model';


@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
  preserveWhitespaces: true,
})
export class ListagemComponent implements OnInit {
  cervejas: Cerveja[] = [];
  troca: boolean = false;
  cervejaForm = new FormGroup({
    queryField: new FormControl(),
  });

  constructor(
    private service: CervejasService,
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.listagem();
  }

  listagem() {
    this.service.list().subscribe((dados: any) => (this.cervejas = dados));
  }

  pesquisaCerveja() {
    if (
      this.cervejaForm.get('queryField').value == '' ||
      this.cervejaForm.get('queryField').value === null
    ) {
      this.abrirSnackbar();
    }

    if (this.cervejas.length.valueOf() === 0) {
      this.abrirSnackbar();
    }
    let cerveja =  this.cervejaForm.get('queryField').value;
    this.service
      .pesquisaCerveja(cerveja)
      .subscribe((dados) => (this.cervejas = dados));
  }

  abrirSnackbar() {
    this._snackBar.open('Coloque uma cerveja valida', 'sair', {
      duration: 2000,
      panelClass: ['my-snack-bar'],
    });
    window.location.reload();
  }

  trocaCard() {
    this.troca = !this.troca;
  }
}
