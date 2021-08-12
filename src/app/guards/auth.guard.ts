import { AutenticacaoService } from './../services/autenticacao.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private autenticacaoService: AutenticacaoService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      const autenticado = this.autenticacaoService.isAutenticado();
      if(autenticado){
        return true;
      }else{
        this.router.navigate(['/login'])
        return false;
      }
  }

}
