export class ResultadoPlanilha{
  entidade: string;
  erros: Array<string>;
  quantidadeLinhasLidas: number;
  quantidadeLinhasLidasComErro: number;
  quantidadeLinhasLidasSemErro: number;
  quantidadeRegistrosAtualizados: number;
  quantidadeRegistrosNovos: number;
  quantidadeRegistrosRepetidos: number;
}
