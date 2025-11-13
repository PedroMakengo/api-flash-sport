export interface CreateUserRequest {
  nome: string;
  email: string;
  passwordHash: string;
  activo: boolean;
  perfil: string;
  dataCriacao: string;
}
