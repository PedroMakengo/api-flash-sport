import prismaClient from "../../prisma/client";

class ListPostService {
  async execute() {
    const posts = await prismaClient.post.findMany({
      include: {
        categorias: {
          select: {
            categoria: {
              select: {
                nome: true,
              },
            },
          },
        },
      },
    });

    return posts;
  }
}

export { ListPostService };
