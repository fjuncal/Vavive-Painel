import { FiltroCliente } from './../clientes/models/filtro-cliente';
import { Cliente } from './../clientes/models/cliente';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL : string = environment.apiURLBase + '/clientes';

  constructor(private http: HttpClient) { }

  salvar(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(`${this.apiURL}`, cliente);
  }

  atualizar(cliente: Cliente): Observable<any>{
    return this.http.put<Cliente>(`${this.apiURL}/${cliente.id}`, cliente);
  }

  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.apiURL);
  }

  getClienteById(id: number): Observable<Cliente>{
    return this.http.get<any>(`${this.apiURL}/${id}`)
  }

  getClientesFiltrados(filtroCliente: FiltroCliente): Observable<Cliente[]>{
    return this.http.post<Cliente[]>(`${this.apiURL}/search`, filtroCliente);
  }

  deletar(cliente: Cliente): Observable<any>{
    return this.http.delete<any>(`${this.apiURL}/${cliente.id}`);
  }

  importarPlanilha(file: File): Observable<HttpResponse<any>>{
    const formData = new FormData();
    formData.append("arquivo",file);
    const req = new HttpRequest("POST", this.apiURL + '/importar', formData);
    //return this.http.request(req);
    return this.http.post<any>(`${this.apiURL}/importar`, formData);
  }

}
