import { ClientesService } from './../../services/clientes.service';
import { Cliente } from './../models/cliente';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];
  clienteSelecionado: Cliente;
  mensagemSucesso: string;
  mensagemErro: string;

  nome: string;
  cpf: string;
  origem: string;
  dataInicio: string;
  dataFim: string;
  mensagemConsulta: string;

  constructor(private service: ClientesService, private router: Router) {

   }


  ngOnInit(): void {
    this.service.getClientes().subscribe(resposta => this.clientes = resposta);
  }

  novoCadastro(){
    this.router.navigate(['/clientes/cadastro'])
  }

  confirmarDelecao(cliente: Cliente){
    this.clienteSelecionado = cliente;
  }

  deletarCliente(){
    this.service.deletar(this.clienteSelecionado)
      .subscribe(
        response => {
          this.mensagemSucesso = 'Cliente deletado com sucesso!'
          this.ngOnInit();
        },
        erro => this.mensagemSucesso = 'Ocorreu um erro ao deleter o cliente'
      )
  }

  consultarCliente(){
    this.mensagemConsulta = 'Ola'
    console.log(this.nome);
    console.log(this.cpf);
    console.log(this.origem);
    console.log(this.dataInicio);
    console.log(this.dataFim);



  }

}
