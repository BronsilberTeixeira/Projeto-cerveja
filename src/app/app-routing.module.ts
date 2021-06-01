import { LitsagemComponent } from './pages/litsagem/listagem.component';


import { NgModule,} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';

import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ListagemHorizontalComponent } from './pages/listagem-horizontal/listagem-horizontal.component';







const routes: Routes = [{path: 'login-component', component: LoginComponent },
{path: 'listagem-component', component: ListagemComponent},
{path: 'detalhes-component', component: DetalhesComponent},
{path: 'listagem-horizontal', component: ListagemHorizontalComponent},

//{path: '', redirectTo: 'login-component', pathMatch: 'full'}, //redireciona para a pagina de login

{ path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
