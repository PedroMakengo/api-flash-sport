import { Request, Response } from "express";
import { ICategoryRequest } from "../../models/interfaces/category/CreateCategoryRequest";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController {
  async handle(request: Request, response: Response) {
    const { nome, slug }: ICategoryRequest = request.body;

    const createCategoryService = new CreateCategoryService();

    const category = await createCategoryService.execute({
      nome,
      slug,
    });

    return response.json(category);
  }
}

export { CreateCategoryController };
