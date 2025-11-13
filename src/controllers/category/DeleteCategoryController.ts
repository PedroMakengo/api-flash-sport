import { DeleteCategoryService } from "../../services/category/DeleteCategoryService";

import { Request, Response } from "express";

class DeleteCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteCategoryService = new DeleteCategoryService();

    const category = await deleteCategoryService.execute(id);

    return response.json(category);
  }
}

export { DeleteCategoryController };
