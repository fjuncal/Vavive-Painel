import { UsuariosService } from './../../services/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { TrocarSenha } from '../models/trocar-senha';

@Component({
  selector: 'app-trocar-senha',
  templateUrl: './trocar-senha.component.html',
  styleUrls: ['./trocar-senha.component.css']
})
export class TrocarSenhaComponent implements OnInit {

  trocarSenha: TrocarSenha;
  success: boolean;
  error: boolean;
  mensagemErro: string;

  constructor(private usuarioService: UsuariosService) {
    this.trocarSenha = new TrocarSenha();
   }

  ngOnInit(): void {
  }

  atualizarSenha(){
    this.success = undefined;
    this.error = undefined;

    if(this.trocarSenha.senhaNova != this.trocarSenha.senhaNova2){
      this.error = true;
      this.mensagemErro = 'A confirmação da senha deve ser igual a senha nova'
    }else if(this.trocarSenha.senhaAtual == this.trocarSenha.senhaNova){
      this.error = true;
      this.mensagemErro = 'Senha atual igual a senha nova'
    } else{
        this.usuarioService.atualizarSenha(this.trocarSenha).subscribe(resp => {
          this.success = true;
          this.trocarSenha.senhaAtual = ''
          this.trocarSenha.senhaNova = ''
          this.trocarSenha.senhaNova2 = ''
        }, errorResponse => {
          this.error = true;
          this.mensagemErro = 'Erro na Requisição';
        })
      }
  }

}
