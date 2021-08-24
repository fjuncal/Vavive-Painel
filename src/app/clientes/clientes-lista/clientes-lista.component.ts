import { FiltroCliente } from './../models/filtro-cliente';
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

  filtroCliente: FiltroCliente;
  clienteFiltrados: String[];
  mensagemConsulta: string;

  constructor(private service: ClientesService, private router: Router) {
      this.filtroCliente = new FiltroCliente();
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
    console.log(this.filtroCliente);

    this.service.getClientesFiltrados(this.filtroCliente).subscribe(response => {
      this.clientes = response;
      let numeroRegistro = response.length;
      this.mensagemConsulta = `Foram encontrado(s) ${numeroRegistro} registros`
      console.log(response);

    })
    this.mensagemConsulta = 'Ola'

  }

}
