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


  constructor(
    private service: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
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
      console.log(response);
    }, errorResponse => {
      this.errors = errorResponse.error.errors;
      this.success = false;
      console.log(errorResponse.error.errors);
    }
    );
  }

  }
  voltarParaLista(){
    this.router.navigate(['/clientes-lista'])
  }

}
