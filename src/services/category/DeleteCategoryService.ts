import prismaClient from "../../prisma/client";

class DeleteCategoryService {
  async execute(id: string) {
    const category = await prismaClient.categoria.delete({
      where: {
        id,
      },
    });

    return category;
  }
}

export { DeleteCategoryService };
