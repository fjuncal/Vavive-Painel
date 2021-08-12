import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

//antes da requisição ir para frente, vamos interceptar ela e adicionar o header authorization com o token JWT
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const tokenString = localStorage.getItem('access_token');

    const url = request.url;

    if(tokenString && !url.endsWith('/oauth/token')){
      const token = JSON.parse(tokenString);
      const jwt = token.access_token;

      //copia da requisição setando no header a propriedade Authorization
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + jwt
        }
      })
    }

    return next.handle(request);
  }
}
