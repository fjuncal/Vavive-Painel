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
  constructor(private service: ClientesService, private router: Router) {

   }

  converterParaJson: string;

  ngOnInit(): void {
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
    this.service.importarPlanilha(this.arquivoSelecionado).subscribe( resp => {
      //console.log(resp);

    });

  }

}
