import type { ICategoryRequest } from "../../models/interfaces/category/CreateCategoryRequest";
import prismaClient from "../../prisma/client";

class CreateCategoryService {
  async execute({ nome, slug }: ICategoryRequest) {
    const category = await prismaClient.categoria.create({
      data: {
        nome,
        slug,
      },
    });

    return category;
  }
}

export { CreateCategoryService };
