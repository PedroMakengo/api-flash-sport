export interface ICreatePostRequest {
  titulo: string;
  slug: string;
  conteudo: string;
  caminhoImagem: string;
  urlImagem: string;
  estado: string;
  autorId: string;
  dataPublicacao: Date;
  dataCriacao: Date;
  dataAtualizacao: Date;
  categoriaId: string
}
