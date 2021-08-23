import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ClientesService } from './../../services/clientes.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: String[];
  mensagemErroCEPInvalido: String;


  constructor(
    private service: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
    ) {
      this.cliente = new Cliente();
   }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(urlParams => {
        this.cliente.id = urlParams['id'];
        if(this.cliente.id){
          this.service
          .getClienteById(this.cliente.id)
            .subscribe(
              response => this.cliente = response,
              errorResponse => this.cliente = new Cliente()
            )
        }
    })


  }

  enviar(){
    if(this.cliente.id){
      this.service.atualizar(this.cliente).subscribe(response => {
        this.success = true;
        this.errors = null;
      }, error => {
        this.errors = ['Erro ao atualizar o cliente']
      })
    } else{
    this.service.salvar(this.cliente).subscribe(response => {
      this.success = true;
      this.errors = null;
      this.cliente = response;
      // console.log(response);
    }, errorResponse => {
      this.errors = errorResponse.error.errors;
      this.success = false;
      console.log(errorResponse.error.errors);
    }
    );
  }

  }
  voltarParaLista(){
    this.router.navigate(['/clientes/lista'])
  }

  preencherCep(event: any){
    let cep = event.target.value;

      if(cep){
      let validacep = /^[0-9]{8}$/;
          if(validacep.test(cep)){
        let requisicao = `https://viacep.com.br/ws/${cep}/json`

        this.http.get<any>(requisicao).subscribe(response => {
          this.cliente.endereco = response.logradouro;
          this.cliente.bairro = response.bairro;
          this.cliente.estado = response.uf;
          this.cliente.municipio = response.localidade;
          this.cliente.telefone = response.ddd;
          if(response.erro == true){
            this.mensagemErroCEPInvalido = 'CEP inválido, favor verificar'
          } else{
            this.mensagemErroCEPInvalido = null
          }
        })
      } else{
        this.mensagemErroCEPInvalido = 'CEP inválido, favor verificar'
      }
    } else {
      this.mensagemErroCEPInvalido =  'CEP em branco'

    }
  }

}
