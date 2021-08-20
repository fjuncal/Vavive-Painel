import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfissionaisRoutingModule } from './profissionais-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfissionaisFormComponent } from './profissionais-form/profissionais-form.component';
import { ProfissionaisListaComponent } from './profissionais-lista/profissionais-lista.component';


@NgModule({
  declarations: [
    ProfissionaisFormComponent,
    ProfissionaisListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProfissionaisRoutingModule
  ],
  exports: [
    ProfissionaisFormComponent,
    ProfissionaisListaComponent
  ]
})
export class ProfissionaisModule { }
