import { Cliente } from '../../clientes/models/cliente';
export class ServicoPrestadoBusca{
  nome: string;
  plano: string;
  dataAtividade: string;
  dataCadastro: string;
  duracao: string;
  hora: string;
  nota: number;
  observacao: string;
  responsavel: string;
  valor: number;
  cliente: Cliente;
}
