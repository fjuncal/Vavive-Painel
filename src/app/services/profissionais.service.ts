import { Profissional } from './../profissionais/models/profissional';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfissionaisService {

  apiURL : string = environment.apiURLBase + '/profissionais';

  constructor(private http: HttpClient) { }

  getProfissionais(): Observable<Profissional[]>{
    return this.http.get<Profissional[]>(this.apiURL);
  }

  salvar(profissonal: Profissional): Observable<Profissional>{
    return this.http.post<Profissional>(`${this.apiURL}`, profissonal);
  }

  getProfissionalById(id: number): Observable<Profissional>{
    return this.http.get<any>(`${this.apiURL}/${id}`)
  }

  deletar(profissional: Profissional): Observable<any>{
    return this.http.delete<any>(`${this.apiURL}/${profissional.id}`);
  }

  atualizar(profissional: Profissional): Observable<any>{
    return this.http.put<Profissional>(`${this.apiURL}/${profissional.id}`, profissional);
  }

  importarPlanilha(file: File): Observable<HttpResponse<any>>{
    const formData = new FormData();
    formData.append("arquivo",file);
    const req = new HttpRequest("POST", this.apiURL + '/importar', formData);
    //return this.http.request(req);
    return this.http.post<any>(`${this.apiURL}/importar`, formData);
  }
}
