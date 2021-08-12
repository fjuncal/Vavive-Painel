import { Router } from '@angular/router';
import { AutenticacaoService } from './../../services/autenticacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  usuarioLogado: string;

  constructor(private autenticacaoService: AutenticacaoService, private router: Router) { }

  ngOnInit(): void {
    this.usuarioLogado = this.autenticacaoService.getUsuarioAutenticado();
  }

  logout(){
    this.autenticacaoService.encerrarSessao();
    this.router.navigate(['/login'])
  }

}
