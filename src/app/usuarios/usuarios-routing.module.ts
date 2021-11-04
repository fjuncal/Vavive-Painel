import { TrocarSenhaComponent } from './trocar-senha/trocar-senha.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  {path: 'usuarios', component: LayoutComponent, canActivate: [AuthGuard], children: [
    {path: "trocar-senha", component: TrocarSenhaComponent},
    {path: '', redirectTo: "/usuarios/trocar-senha", pathMatch: 'full'}
  ]},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
