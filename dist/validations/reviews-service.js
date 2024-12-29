"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewsValidation = void 0;
const zod_1 = require("zod");
class reviewsValidation {
}
exports.reviewsValidation = reviewsValidation;
reviewsValidation.CREATE = zod_1.z.object({
    review: zod_1.z.string().min(1).max(100),
    rating: zod_1.z.number().min(1).max(100),
    description: zod_1.z.string().min(1).max(100),
    RestaurantsID: zod_1.z.number().positive()
});
reviewsValidation.UPDATE = zod_1.z.object({
    review: zod_1.z.string().min(1).max(100),
    rating: zod_1.z.number().min(1).max(100),
    description: zod_1.z.string().min(1).max(100)
});
reviewsValidation.DELETE = zod_1.z.object({
    review: zod_1.z.string().min(1).max(100),
    rating: zod_1.z.number().min(1).max(100),
    description: zod_1.z.string().min(1).max(100),
    RestaurantsID: zod_1.z.number().positive()
});
