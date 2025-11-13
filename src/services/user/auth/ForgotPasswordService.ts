import { v4 as uuid } from "uuid";
import prismaClient from "../../../prisma/client";
import { sendVerificationEmail } from "../../../shared/email";

class ForgotPasswordService {
  async execute(email: string) {
    const user = await prismaClient.utilizador.findFirst({
      where: { email },
    });

    const token = uuid();

    if (!user) {
      throw new Error("User does not exist");
    }

    await prismaClient.utilizador.update({
      data: { verifyToken: token },
      where: {
        email,
      },
    });

    await sendVerificationEmail(email, token, "FORGOT");

    return "Verification email sent";
  }
}

export { ForgotPasswordService };
