import type { Request, Response } from "express";
import { DeletePostService } from "../../services/post/DeletePostService";

class DeletePostController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deletePostService = new DeletePostService();

    const post = await deletePostService.execute(id);

    return response.json(post);
  }
}

export { DeletePostController };
