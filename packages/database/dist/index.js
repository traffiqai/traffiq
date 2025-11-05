"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.prisma = void 0;
var client_1 = require("./client");
Object.defineProperty(exports, "prisma", { enumerable: true, get: function () { return client_1.default; } });
var auth_1 = require("./auth");
Object.defineProperty(exports, "auth", { enumerable: true, get: function () { return auth_1.auth; } });
//# sourceMappingURL=index.js.map