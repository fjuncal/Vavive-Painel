import { AuthGuard } from './../guards/auth.guard';
import { LayoutComponent } from './../layout/layout.component';
import { ServicoPrestadoListaComponent } from './servico-prestado-lista/servico-prestado-lista.component';
import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'servico', component: LayoutComponent, canActivate: [AuthGuard] ,children: [
    {path: 'form', component: ServicoPrestadoFormComponent},
    {path: 'lista', component: ServicoPrestadoListaComponent},
    {path: '', redirectTo: '/servico/lista', pathMatch: 'full'}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }
