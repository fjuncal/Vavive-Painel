import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrocarSenhaComponent } from './trocar-senha/trocar-senha.component';


@NgModule({
  declarations: [
    TrocarSenhaComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TrocarSenhaComponent
  ]
})
export class UsuariosModule { }
