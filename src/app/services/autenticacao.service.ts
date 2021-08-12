import { Observable } from 'rxjs';
import { Usuario } from './../login/models/usuario';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  apiUrl: string = environment.apiURLBase + "/usuarios"
  tokenUrl: string = environment.apiURLBase + environment.obterTokenUrl
  clientId: string = environment.clientId;
  clientSecret: string = environment.clientSecret;
  constructor(private http: HttpClient) { }

  salvar(usuario: Usuario): Observable<any>{
    return this.http.post<any>(this.apiUrl, usuario);
  }

  tentarLogar(usuario: string, senha: string): Observable<any>{
    //parametro do body da requisicao, chave e valor (user, password e grant_type)
    const params = new HttpParams()
                    .set('username', usuario)
                    .set('password', senha)
                    .set('grant_type', 'password');

    //adicionando o clientId e o Client Secret no header da requisição, btoa método codifica a string em encode base-64
    const headers = {
      'Authorization': 'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    return this.http.post(this.tokenUrl, params.toString(), { headers } )
  }
}
