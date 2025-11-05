"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
var better_auth_1 = require("better-auth");
var prisma_1 = require("better-auth/adapters/prisma");
var client_1 = require("./client");
exports.auth = (0, better_auth_1.betterAuth)({
    database: (0, prisma_1.prismaAdapter)(client_1.default, {
        provider: 'postgresql',
    }),
    emailAndPassword: {
        enabled: true,
    },
    baseURL: process.env.BETTER_AUTH_URL || 'http://localhost:3000',
    secret: process.env.BETTER_AUTH_SECRET,
});
//# sourceMappingURL=auth.js.map