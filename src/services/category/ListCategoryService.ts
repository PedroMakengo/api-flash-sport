import prismaClient from "../../prisma/client";

class ListCategoryService {
  async execute() {
    const categories = await prismaClient.categoria.findMany();

    return categories;
  }
}

export { ListCategoryService };
