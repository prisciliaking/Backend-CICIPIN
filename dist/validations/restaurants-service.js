"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantsValidation = void 0;
const zod_1 = require("zod");
class restaurantsValidation {
}
exports.restaurantsValidation = restaurantsValidation;
restaurantsValidation.CREATE = zod_1.z.object({
    name: zod_1.z.string().min(1).max(100),
    address: zod_1.z.string().min(1).max(100),
    longtitude: zod_1.z.string().min(1).max(100),
    latitude: zod_1.z.string().min(1).max(100),
    description: zod_1.z.string().min(1).max(100),
    UsersID: zod_1.z.number().positive()
});
restaurantsValidation.UPDATE = zod_1.z.object({
    name: zod_1.z.string().min(1).max(100),
    address: zod_1.z.string().min(1).max(100),
    longtitude: zod_1.z.string().min(1).max(100),
    latitude: zod_1.z.string().min(1).max(100),
    description: zod_1.z.string().min(1).max(100)
});
restaurantsValidation.DELETE = zod_1.z.object({
    name: zod_1.z.string().min(1).max(100),
    address: zod_1.z.string().min(1).max(100),
    longtitude: zod_1.z.string().min(1).max(100),
    latitude: zod_1.z.string().min(1).max(100),
    description: zod_1.z.string().min(1).max(100),
    UsersID: zod_1.z.number().positive()
});
