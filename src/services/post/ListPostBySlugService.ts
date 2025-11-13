import prismaClient from "../../prisma/client";

class ListPostBySlugService {
  async execute(slug: string) {
    const posts = await prismaClient.post.findFirst({
      where: {
        slug,
      },
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

export { ListPostBySlugService };
