"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var extension_accelerate_1 = require("@prisma/extension-accelerate");
function createPrismaClient() {
    return new client_1.PrismaClient().$extends((0, extension_accelerate_1.withAccelerate)());
}
var prisma = globalThis.__prisma || createPrismaClient();
if (process.env.NODE_ENV !== 'production') {
    globalThis.__prisma = prisma;
}
exports.default = prisma;
//# sourceMappingURL=client.js.map