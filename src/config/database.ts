import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  // podes tirar query em produção
  log: ["query", "error", "warn"],
});

export { prisma };
