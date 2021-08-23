import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportarPlanilhaRoutingModule } from './importar-planilha-routing.module';
import { ImportarPlanilhaListaComponent } from './importar-planilha-lista/importar-planilha-lista.component';


@NgModule({
  declarations: [
    ImportarPlanilhaListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ImportarPlanilhaRoutingModule
  ]
})
export class ImportarPlanilhaModule { }
