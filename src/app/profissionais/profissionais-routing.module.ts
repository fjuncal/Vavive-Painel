import { ProfissionaisListaComponent } from './profissionais-lista/profissionais-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { ProfissionaisFormComponent } from './profissionais-form/profissionais-form.component';

const routes: Routes = [
  {path: 'profissionais', component: LayoutComponent, canActivate: [AuthGuard], children: [
    {path: "cadastro", component: ProfissionaisFormComponent},
    {path: "cadastro/:id", component: ProfissionaisFormComponent},
    {path: "lista", component: ProfissionaisListaComponent},
    {path: '', redirectTo: "/profissionais/lista", pathMatch: 'full'}
  ]},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfissionaisRoutingModule { }
