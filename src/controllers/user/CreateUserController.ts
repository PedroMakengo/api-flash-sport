import { Request, Response } from "express";
import { CreateUserRequest } from "../../models/interfaces/user/CreateUserRequest";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const {
      nome,
      email,
      passwordHash,
      activo,
      perfil,
      dataCriacao,
    }: CreateUserRequest = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      nome,
      email,
      passwordHash,
      activo,
      perfil,
      dataCriacao,
    });

    return response.json(user);
  }
}

export { CreateUserController };
