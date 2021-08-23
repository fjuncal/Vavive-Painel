import { ImportarPlanilhaListaComponent } from './importar-planilha-lista/importar-planilha-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  {path: 'importar-planilha', component: LayoutComponent, canActivate: [AuthGuard], children: [
    // {path: "cadastro", component: ClientesFormComponent},
    // {path: "cadastro/:id", component: ClientesFormComponent},
    {path: "lista", component: ImportarPlanilhaListaComponent},
    {path: '', redirectTo: "/importar-planilha/lista", pathMatch: 'full'}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportarPlanilhaRoutingModule { }
