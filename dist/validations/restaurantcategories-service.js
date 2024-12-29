"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantcategoriesValidation = void 0;
const zod_1 = require("zod");
class restaurantcategoriesValidation {
}
exports.restaurantcategoriesValidation = restaurantcategoriesValidation;
restaurantcategoriesValidation.CREATE = zod_1.z.object({
    categoryName: zod_1.z.string().min(1).max(100)
});
restaurantcategoriesValidation.UPDATE = zod_1.z.object({
    categoryName: zod_1.z.string().min(1).max(100)
});
restaurantcategoriesValidation.DELETE = zod_1.z.object({
    categoryName: zod_1.z.string().min(1).max(100)
});
