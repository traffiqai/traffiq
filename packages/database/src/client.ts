import { PrismaClient } from './generated';
import { withAccelerate } from '@prisma/extension-accelerate';

declare global {
  var __prisma: ReturnType<typeof createPrismaClient> | undefined;
}

function createPrismaClient() {
  return new PrismaClient().$extends(withAccelerate());
}

const prisma = globalThis.__prisma || createPrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalThis.__prisma = prisma;
}

export default prisma;
