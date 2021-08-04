import { ServicoPrestadoListaComponent } from './servico-prestado-lista/servico-prestado-lista.component';
import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'servico-form', component: ServicoPrestadoFormComponent},
  {path: 'servico-lista', component: ServicoPrestadoListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }
