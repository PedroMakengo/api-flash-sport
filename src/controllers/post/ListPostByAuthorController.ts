import { Request, Response } from "express";
import { ListPostByAuthorService } from "../../services/post/ListPostByAuthorService";

class ListPostByAuthorController {
  async handle(request: Request, response: Response) {
    const { authorId } = request.params;

    const listPostByAuthorService = new ListPostByAuthorService();

    const posts = await listPostByAuthorService.execute(authorId);

    return response.json(posts);
  }
}

export { ListPostByAuthorController };
