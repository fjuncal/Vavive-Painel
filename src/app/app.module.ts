import { UsuariosService } from './services/usuarios.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AutenticacaoService } from './services/autenticacao.service';
import { FormsModule } from '@angular/forms';
import { ServicoPrestadoService } from './services/servico-prestado.service';
import { ClientesService } from './services/clientes.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { ClientesModule } from './clientes/clientes.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServicoPrestadoModule } from './servico-prestado/servico-prestado.module';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { ProfissionaisModule } from './profissionais/profissionais.module';
import { ImportarPlanilhaModule } from './importar-planilha/importar-planilha.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    ServicoPrestadoModule,
    ProfissionaisModule,
    ImportarPlanilhaModule,
    UsuariosModule
  ],
  providers: [
    ClientesService,
    ServicoPrestadoService,
    AutenticacaoService,
    UsuariosService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
    //configuração do interceptor para ser adicionado em toda as requisições
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
