export class Cliente{
  id: number;
  nome: string;
  cpf: string;
  email:  string;
  endereco: string;
  municipio: string;
  estado: string;
  cep: string;
  bairro: string;
  telefone: string;
  observacao: string;
  dataCadastro: string;
  pontoDeReferencia: string;
  origemCliente: string;
  complemento: string;

  get enderecoCompleto(){
   this.enderecoCompleto =  `${this.endereco} -  ${this.bairro}, ${this.municipio} - ${this.estado}, ${this.cep}`;
   return this.enderecoCompleto;
  }

  set enderecoCompleto(enderecoCompleto: string){
    this.enderecoCompleto = enderecoCompleto
  }

}
