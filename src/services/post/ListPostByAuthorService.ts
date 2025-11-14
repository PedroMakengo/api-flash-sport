import prismaClient from "../../prisma/client";

class ListPostByAuthorService {
  async execute(author: string) {
    const postsByAuthors = await prismaClient.post.findMany({
      where: {
        autorId: author,
      },
      orderBy: {
        dataCriacao: "desc",
      },
      take: 4,
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
