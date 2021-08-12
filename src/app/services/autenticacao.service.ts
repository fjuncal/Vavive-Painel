import { Observable } from 'rxjs';
import { Usuario } from './../login/models/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  apiUrl: string = environment.apiURLBase + "/usuarios"
  constructor(private http: HttpClient) { }

  salvar(usuario: Usuario): Observable<any>{
    return this.http.post<any>(this.apiUrl, usuario);
  }
}
