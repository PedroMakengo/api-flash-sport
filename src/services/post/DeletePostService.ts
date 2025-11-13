import prismaClient from "../../prisma/client";

class DeletePostService {
  async execute(id: string) {
    const post = await prismaClient.post.delete({
      where: {
        id,
      },
    });

    return post;
  }
}

export { DeletePostService };
