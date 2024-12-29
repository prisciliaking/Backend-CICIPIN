"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menucategoriespairingsValidation = void 0;
const zod_1 = require("zod");
class menucategoriespairingsValidation {
}
exports.menucategoriespairingsValidation = menucategoriespairingsValidation;
menucategoriespairingsValidation.CREATE = zod_1.z.object({
    menuID: zod_1.z.number().positive(),
    MenuCategoriesID: zod_1.z.number().positive()
});
menucategoriespairingsValidation.UPDATE = zod_1.z.object({
    menuID: zod_1.z.number().positive(),
    MenuCategoriesID: zod_1.z.number().positive()
});
menucategoriespairingsValidation.DELETE = zod_1.z.object({
    menuID: zod_1.z.number().positive(),
    MenuCategoriesID: zod_1.z.number().positive()
});
