import { Usuario } from './models/usuario';
import { AutenticacaoService } from './../services/autenticacao.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario: string;
  senha: string;
  cadastrando: boolean;
  mensagemSucesso: string;
  errors: String[];

  constructor(private router: Router, private autenticacaoService: AutenticacaoService) { }

  onSubmit(){
    this.autenticacaoService.tentarLogar(this.usuario, this.senha)
                            .subscribe(response => {
                              console.log(response);
                              //pois o local storage e o session storage só guardam string
                              const access_token = JSON.stringify(response);
                              localStorage.setItem('access_token', access_token)
                              this.router.navigate(['/home'])
                            }, errorResponse => {
                              this.errors = ['Usuário e/ou senha incorreto(s)']
                              this.mensagemSucesso = '';
                            })


  }

  preparaCadastrar(event){
    event.preventDefault();
    this.cadastrando = true;
    this.usuario = '';
    this.senha = '';
    this.errors = null;
  }

  cancelaCadastro(){
    this.cadastrando = false;
  }

  cadastrarUsuario(){
    const usuario: Usuario = new Usuario();
    usuario.usuario = this.usuario;
    usuario.senha = this.senha;

    this.autenticacaoService.salvar(usuario)
                            .subscribe(response => {
                                this.mensagemSucesso = "Cadastro realizado com sucesso. Efetue o login";
                                this.cadastrando = false;
                                this.errors = null;
                                this.usuario = "";
                                this.senha = "";
                            }, errorResponse => {
                             this.mensagemSucesso = null;
                             this.errors = errorResponse.error.errors;
                            })
  }

}
