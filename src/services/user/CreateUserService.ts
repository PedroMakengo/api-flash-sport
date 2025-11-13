import bcrypt from "bcryptjs";

import { CreateUserRequest } from "../../models/interfaces/user/CreateUserRequest";
import { v4 as uuid } from "uuid";
import { sendVerificationEmail } from "../../shared/email";

import prismaClient from "../../prisma/client";

class CreateUserService {
  async execute({
    nome,
    email,
    passwordHash,
    activo,
    perfil,
    dataCriacao,
  }: CreateUserRequest) {
    const password = await bcrypt.hash(passwordHash, 10);
    const token = uuid();

    const user = await prismaClient.utilizador.create({
      data: {
        nome,
        email,
        passwordHash: password,
        activo,
        perfil,
        dataCriacao,
        verifyToken: token,
      },
    });

    await sendVerificationEmail(email, token, "REGISTER");

    return user;
  }
}

export { CreateUserService };
