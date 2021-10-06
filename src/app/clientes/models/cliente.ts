import { Endereco } from "./endereco";

export class Cliente{
  id: number;
  nome: string;
  cpf: string;
  email:  string;
  enderecos: Endereco[] = [];
  telefone: string;
  telefone2: string;
  telefone3: string;
  observacao: string;
  dataCadastro: string;
  origemCliente: string;
  ativo: string;
}
