import type { ICreatePostRequest } from "../../models/interfaces/post/CreatePostRequest";
import prismaClient from "../../prisma/client";

class CreatePostService {
  async execute({
    titulo,
    slug,
    conteudo,
    caminhoImagem,
    urlImagem,
    estado,
    autorId,
    dataPublicacao,
    dataCriacao,
    dataAtualizacao,
    categoriaId,
  }: ICreatePostRequest) {
    const post = await prismaClient.post.create({
      data: {
        titulo,
        slug,
        conteudo,
        caminhoImagem,
        urlImagem,
        estado,
        autorId,
        dataPublicacao,
        dataCriacao,
        dataAtualizacao,
      },
    });

    await prismaClient.postCategoria.create({
      data: {
        postId: post.id,
        categoriaId: categoriaId,
      },
    });

    return post;
  }
}

export { CreatePostService };
