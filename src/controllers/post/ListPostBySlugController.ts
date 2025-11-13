import { ListPostBySlugService } from "../../services/post/ListPostBySlugService";
import { Request, Response } from "express";

class ListPostBySlugController {
  async handle(request: Request, response: Response) {
    const { slug } = request.params;

    const listPostBySlugService = new ListPostBySlugService();

    const post = await listPostBySlugService.execute(slug);

    return response.json(post);
  }
}

export { ListPostBySlugController };
