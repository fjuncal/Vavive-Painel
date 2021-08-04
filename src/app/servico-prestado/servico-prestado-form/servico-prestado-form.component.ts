import { ServicoPrestadoService } from './../../services/servico-prestado.service';
import { ServicoPrestado } from './../models/servicoPrestado';
import { ClientesService } from './../../services/clientes.service';
import { Cliente } from './../../clientes/models/cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[] = [];
  servicoPrestado : ServicoPrestado;
  success: boolean = false;
  errors: String[];

  constructor(private clienteService: ClientesService, private servicoPrestadoService: ServicoPrestadoService) {
    this.servicoPrestado = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clienteService.getClientes()
                      .subscribe(response => this.clientes = response);
  }

  onSubmit(){
    this.servicoPrestadoService.salvar(this.servicoPrestado)
                                .subscribe(response => {
                                  this.success = true;
                                  this.errors = null;
                                  console.log(response);
                                  this.servicoPrestado = new ServicoPrestado();

                                }, errorResponse => {
                                  this.success = false;
                                  this.errors = errorResponse.error.errors;
                                })

  }

}
