import { TrocarSenha } from './../usuarios/models/trocar-senha';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  apiURL: string = environment.apiURLBase + "/usuarios"

  constructor(private http: HttpClient) { }

  atualizarSenha(trocarSenha: TrocarSenha): Observable<TrocarSenha>{
    return this.http.post<TrocarSenha>(`${this.apiURL}/trocarSenha`, trocarSenha);
  }
}
