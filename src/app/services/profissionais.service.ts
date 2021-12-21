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

  importarPlanilha(file: File): Observable<HttpResponse<any>>{
    const formData = new FormData();
    formData.append("arquivo",file);
    const req = new HttpRequest("POST", this.apiURL + '/importar', formData);
    //return this.http.request(req);
    return this.http.post<any>(`${this.apiURL}/importar`, formData);
  }
}
