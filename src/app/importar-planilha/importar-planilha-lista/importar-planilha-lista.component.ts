import { ResultadoPlanilha } from './../models/resultado-planilha';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-importar-planilha-lista',
  templateUrl: './importar-planilha-lista.component.html',
  styleUrls: ['./importar-planilha-lista.component.css']
})
export class ImportarPlanilhaListaComponent implements OnInit {

  data: [][];
  arquivoSelecionado: File;
  listaBody: any
  resultadoPlanilha: ResultadoPlanilha;
  constructor(private service: ClientesService, private router: Router) {

   }

  converterParaJson: string;

  ngOnInit(): void {
    this.resultadoPlanilha = new ResultadoPlanilha();
  }

  fileUpload(event: any){
     this.arquivoSelecionado = event.target.files[0];
/*      const fileReader = new FileReader();

     fileReader.readAsBinaryString(this.arquivoSelecionado);
     fileReader.onload = (event) => {
        let binaryData = event.target.result;
        let workbook = XLSX.read(binaryData, {type: 'binary'});
//        console.log(workbook);

        workbook.SheetNames.forEach(sheet => {
         this.data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet], {header: 1});
//          console.log(this.data);
          this.converterParaJson = JSON.stringify(this.data, undefined, 4);
//          console.log(this.data);


        })

     }
 */  }

  enviar(){
    this.service.importarPlanilha(this.arquivoSelecionado).subscribe(resp  =>{
      this.resultadoPlanilha.entidade = resp["entidade"];
      this.resultadoPlanilha.erros = resp["erros"];
      this.resultadoPlanilha.quantidadeLinhasLidas = resp["quantidadeLinhasLidas"];
      this.resultadoPlanilha.quantidadeLinhasLidasComErro = resp["quantidadeLinhasLidasComErro"];
      this.resultadoPlanilha.quantidadeLinhasLidasSemErro = resp["quantidadeLinhasLidasSemErro"];
      this.resultadoPlanilha.quantidadeRegistrosAtualizados = resp["quantidadeRegistrosAtualizados"];
      this.resultadoPlanilha.quantidadeRegistrosNovos = resp["quantidadeRegistrosNovos"];
      this.resultadoPlanilha.quantidadeRegistrosRepetidos = resp["quantidadeRegistrosRepetidos"];
      console.log(this.resultadoPlanilha);
    });
  }

}
