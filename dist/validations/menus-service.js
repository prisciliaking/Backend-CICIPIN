"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menusValidation = void 0;
const zod_1 = require("zod");
class menusValidation {
}
exports.menusValidation = menusValidation;
menusValidation.CREATE = zod_1.z.object({
    name: zod_1.z.string().min(1).max(100),
    image: zod_1.z.string().min(1).max(100),
    description: zod_1.z.string().min(1).max(100),
    price: zod_1.z.string().min(1).max(100),
    RestaurantsID: zod_1.z.number().positive()
});
menusValidation.UPDATE = zod_1.z.object({
    name: zod_1.z.string().min(1).max(100),
    image: zod_1.z.string().min(1).max(100),
    description: zod_1.z.string().min(1).max(100),
    price: zod_1.z.string().min(1).max(100)
});
menusValidation.DELETE = zod_1.z.object({
    name: zod_1.z.string().min(1).max(100),
    image: zod_1.z.string().min(1).max(100),
    description: zod_1.z.string().min(1).max(100),
    price: zod_1.z.string().min(1).max(100),
    RestaurantsID: zod_1.z.number().positive()
});
