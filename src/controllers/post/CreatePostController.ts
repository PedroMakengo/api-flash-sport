import type { Request, Response } from "express";
import type { ICreatePostRequest } from "../../models/interfaces/post/CreatePostRequest";
import { CreatePostService } from "../../services/post/CreatePostService";

class CreatePostController {
  async handle(request: Request, response: Response) {
    const {
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
    }: ICreatePostRequest = request.body;

    const createPostService = new CreatePostService();

    const post = await createPostService.execute({
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
    });

    return response.json(post);
  }
}

export { CreatePostController };
