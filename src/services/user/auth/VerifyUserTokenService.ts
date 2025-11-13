import prismaClient from "../../../prisma/client";

class VerifyUserTokenService {
  async execute(token: string) {
    if (!token) {
      throw new Error("Token missing");
    }

    const user = await prismaClient.utilizador.findFirst({
      where: { verifyToken: token },
    });

    if (!user) {
      throw new Error("Invalid token");
    }

    await prismaClient.utilizador.update({
      where: { id: user.id },
      data: { verifyToken: "null", activo: true },
    });

    return "Token verified successfully";
  }
}

export { VerifyUserTokenService };
