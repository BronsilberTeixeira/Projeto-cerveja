import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { CervejaRamdomComponent } from './pages/cerveja-random/cerveja-ramdom/cerveja-ramdom.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { ListagemComponent } from './pages/listagem/listagem.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'listagem', component: ListagemComponent },
  { path: 'detalhes/:id', component: DetalhesComponent },
  { path: '', component: LoginComponent },
  {path: 'listagem/cervejaRandom', component: CervejaRamdomComponent},
  //{path: '', redirectTo: 'login-component', pathMatch: 'full'}, //redireciona para a pagina de login
  { path: '**', component: ListagemComponent }
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
