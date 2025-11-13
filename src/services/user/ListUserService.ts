import prismaClient from "../../prisma/client";

class ListUserService {
  async execute() {
    const users = await prismaClient.utilizador.findMany();

    return users;
  }
}

export { ListUserService };
