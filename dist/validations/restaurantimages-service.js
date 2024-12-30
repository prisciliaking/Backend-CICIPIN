"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantsImageValidation = void 0;
const zod_1 = require("zod");
class restaurantsImageValidation {
}
exports.restaurantsImageValidation = restaurantsImageValidation;
restaurantsImageValidation.REGISTER = zod_1.z.object({
    name: zod_1.z.string().min(1).max(100),
    description: zod_1.z.string().min(1).max(100),
    image: zod_1.z.string().min(1).max(100),
    price: zod_1.z.number().min(1).max(100),
    category: zod_1.z.string().min(1).max(100),
    restaurantID: zod_1.z.number().positive(),
});
restaurantsImageValidation.UPDATE = zod_1.z.object({
    name: zod_1.z.string().min(1).max(100),
    description: zod_1.z.string().min(1).max(100),
    image: zod_1.z.string().min(1).max(100),
    price: zod_1.z.number().min(1).max(100),
    category: zod_1.z.string().min(1).max(100),
    restaurantID: zod_1.z.number().positive(),
});
restaurantsImageValidation.DELETE = zod_1.z.object({
    name: zod_1.z.string().min(1).max(100),
    description: zod_1.z.string().min(1).max(100),
    image: zod_1.z.string().min(1).max(100),
    price: zod_1.z.number().min(1).max(100),
    category: zod_1.z.string().min(1).max(100),
    restaurantID: zod_1.z.number().positive(),
});
