import prismaClient from "../../prisma/client";

class DeleteUserService {
  async execute(id: string) {
    const user = await prismaClient.utilizador.findFirst({
      where: {
        id,
      },
    });

    if (!user) {
      throw new Error("Wrong username or password");
    }

    const userDelete = await prismaClient.utilizador.delete({
      where: {
        id,
      },
    });

    return userDelete;
  }
}

export { DeleteUserService };
