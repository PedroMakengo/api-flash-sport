import prismaClient from "../../prisma/client";

class ListPostByAuthorService {
  async execute(author: string) {
    const postsByAuthors = await prismaClient.post.findMany({
      where: {
        autorId: author,
      },
      take: 3,
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

    return postsByAuthors;
  }
}

export { ListPostByAuthorService };
