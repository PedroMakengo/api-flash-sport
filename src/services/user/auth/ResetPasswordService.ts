import prismaClient from "../../../prisma/client";
import bcrypt from "bcryptjs";

interface ResetPasswordRequest {
  password: string;
  token: string;
}

class ResetPasswordService {
  async execute({ password, token }: ResetPasswordRequest) {
    const user = await prismaClient.utilizador.findFirst({
      where: { verifyToken: token },
    });

    if (!user) {
      throw new Error("User not exists token");
    }

    const hashed = await bcrypt.hash(password, 10);

    const udpate = await prismaClient.utilizador.update({
      data: { passwordHash: hashed, activo: true, verifyToken: "null" },

      where: {
        email: user.email,
      },
    });

    return udpate;
  }
}

export { ResetPasswordService };
