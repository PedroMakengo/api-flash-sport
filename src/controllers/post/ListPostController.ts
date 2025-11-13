import type { Request, Response } from "express";
import { ListPostService } from "../../services/post/ListPostService";

class ListPostController {
  async handle(request: Request, response: Response) {
    const listPostService = new ListPostService();

    const posts = await listPostService.execute();

    return response.json(posts);
  }
}

export { ListPostController };
