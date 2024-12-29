"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const zod_1 = require("zod");
class userValidation {
}
exports.userValidation = userValidation;
userValidation.REGISTER = zod_1.z.object({
    name: zod_1.z.string().min(1).max(100),
    username: zod_1.z.string().min(1).max(100),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(1).max(100),
    profile_picture: zod_1.z.string(),
    role: zod_1.z.string()
});
userValidation.LOGIN = zod_1.z.object({
    username: zod_1.z.string().min(1).max(100),
    password: zod_1.z.string().min(1).max(100)
});
userValidation.UPDATE = zod_1.z.object({
    name: zod_1.z.string().min(1).max(100),
    username: zod_1.z.string().min(1).max(100),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(1).max(100),
    profile_picture: zod_1.z.string(),
    role: zod_1.z.string()
}).partial(); // Semua properti jadi opsional
userValidation.DELETE = zod_1.z.object({
    name: zod_1.z.string(),
    username: zod_1.z.string(),
    email: zod_1.z.string(),
    password: zod_1.z.string(),
    profile_picture: zod_1.z.string(),
    role: zod_1.z.string()
});
