"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantscategoriespairingsValidation = void 0;
const zod_1 = require("zod");
class restaurantscategoriespairingsValidation {
}
exports.restaurantscategoriespairingsValidation = restaurantscategoriespairingsValidation;
restaurantscategoriespairingsValidation.CREATE = zod_1.z.object({
    restaurantID: zod_1.z.number().positive(),
    RestaurantCategoriesID: zod_1.z.number().positive()
});
restaurantscategoriespairingsValidation.UPDATE = zod_1.z.object({
    restaurantID: zod_1.z.number().positive(),
    RestaurantCategoriesID: zod_1.z.number().positive()
});
restaurantscategoriespairingsValidation.DELETE = zod_1.z.object({
    restaurantID: zod_1.z.number().positive(),
    RestaurantCategoriesID: zod_1.z.number().positive()
});
