import { Endereco } from './../models/endereco';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ClientesService } from './../../services/clientes.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  enderecoForm: FormGroup;

  get enderecos(){
    return (<FormArray>this.enderecoForm.get('enderecos')).controls
  }

  constructor(
    private service: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private fb: FormBuilder
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
              response => {
                this.cliente = response;
                this.inicializarEnderecoForm();
              },
              errorResponse => this.cliente = new Cliente()
            )
        }

    })

    this.enderecoForm = this.fb.group({
      enderecos: this.fb.array([])
    });
  }

  inicializarEnderecoForm(){
    let qtd = this.cliente.enderecos.length;

    for (let index = 0; index < qtd; index++) {
      this.addEnderecoForm();
    }
  }

  removerEndereco(i){
    (<FormArray>this.enderecoForm.get('enderecos')).removeAt(i);
    this.cliente.enderecos.splice(i-1);
    // console.log(this.cliente.enderecos);
  }

  addEndereco(){
    this.cliente.enderecos.push(new Endereco());
    this.addEnderecoForm();
    // console.log(this.cliente.enderecos);
  }

  addEnderecoForm(){
    (<FormArray>this.enderecoForm.get('enderecos')).push(this.fb.group({
      cep: [],
      logradouro: [],
      complemento: [],
      bairro: [],
      municipio: [],
      estado: [],
      pontoDeReferencia: []
    }))
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

  preencherCep(event: any, id: number){
    let valor = event.target.value;
    var cep = valor.replace(/\D/g, '');

      if(cep){
      let validacep = /^[0-9]{8}$/;
          if(validacep.test(cep)){
        let requisicao = `https://viacep.com.br/ws/${cep}/json`

        this.http.get<any>(requisicao).subscribe(response => {
          this.cliente.enderecos[id].logradouro = response.logradouro;
          this.cliente.enderecos[id].bairro = response.bairro;
          this.cliente.enderecos[id].estado = response.uf;
          this.cliente.enderecos[id].municipio = response.localidade;
          // this.cliente.enderecos[id].telefone = response.ddd;
          if(response.erro == true && cep != null){
            this.mensagemErroCEPInvalido = 'CEP inválido, favor verificar'
          } else{
            this.mensagemErroCEPInvalido = null
          }
        })
      } else{
        this.mensagemErroCEPInvalido = 'CEP inválido, favor verificar'
      }
    } else {
      //this.mensagemErroCEPInvalido =  'CEP em branco'

    }
  }

}
