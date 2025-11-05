"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generated_1 = require("./generated");
var extension_accelerate_1 = require("@prisma/extension-accelerate");
function createPrismaClient() {
    return new generated_1.PrismaClient().$extends((0, extension_accelerate_1.withAccelerate)());
}
var prisma = globalThis.__prisma || createPrismaClient();
if (process.env.NODE_ENV !== 'production') {
    globalThis.__prisma = prisma;
}
exports.default = prisma;
//# sourceMappingURL=client.js.map