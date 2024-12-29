"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menucategoriesValidation = void 0;
const zod_1 = require("zod");
class menucategoriesValidation {
}
exports.menucategoriesValidation = menucategoriesValidation;
menucategoriesValidation.CREATE = zod_1.z.object({
    categoryName: zod_1.z.string().min(1).max(100)
});
menucategoriesValidation.UPDATE = zod_1.z.object({
    categoryName: zod_1.z.string().min(1).max(100)
});
menucategoriesValidation.DELETE = zod_1.z.object({
    categoryName: zod_1.z.string().min(1).max(100)
});
