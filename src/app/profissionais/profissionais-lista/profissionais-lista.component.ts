import { Profissional } from './../models/profissional';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profissionais-lista',
  templateUrl: './profissionais-lista.component.html',
  styleUrls: ['./profissionais-lista.component.css']
})
export class ProfissionaisListaComponent implements OnInit {

  profissionais: Profissional[] = [];
  profissionalSelecionado: Profissional;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private service: ClientesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  novoCadastro(){
    this.router.navigate(['/profissionais/cadastro'])
  }

  confirmarDelecao(profissional: Profissional){
    this.profissionalSelecionado = profissional;
  }

  deletarProfissional(){

  }
}
