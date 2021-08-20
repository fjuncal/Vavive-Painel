import { ProfissionaisService } from './../../services/profissionais.service';
import { Component, OnInit } from '@angular/core';
import { Profissional } from '../models/profissional';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profissionais-form',
  templateUrl: './profissionais-form.component.html',
  styleUrls: ['./profissionais-form.component.css']
})
export class ProfissionaisFormComponent implements OnInit {

  profissional: Profissional;
  success: boolean = false;
  errors: String[];

  constructor(
    private service: ProfissionaisService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  enviar(){
    console.log(this.profissional);

  }

  voltarParaLista(){

  }

}
