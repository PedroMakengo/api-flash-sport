import prismaClient from "../../prisma/client";

class ListPostBySlugService {
  async execute(slug: string) {
    const posts = await prismaClient.post.findFirst({
      where: {
        slug,
      },
    });

    return posts;
  }
}

export { ListPostBySlugService };
