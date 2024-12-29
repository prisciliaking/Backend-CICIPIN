"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookmarksValidation = void 0;
const zod_1 = require("zod");
class bookmarksValidation {
}
exports.bookmarksValidation = bookmarksValidation;
bookmarksValidation.CREATE = zod_1.z.object({
    isBookmarked: zod_1.z.boolean(),
    UsersID: zod_1.z.number().positive(),
    RestaurantsID: zod_1.z.number().positive()
});
bookmarksValidation.UPDATE = zod_1.z.object({
    isBookmarked: zod_1.z.boolean(),
    UsersID: zod_1.z.number().positive(),
    RestaurantsID: zod_1.z.number().positive()
});
bookmarksValidation.DELETE = zod_1.z.object({
    isBookmarked: zod_1.z.boolean(),
    UsersID: zod_1.z.number().positive(),
    RestaurantsID: zod_1.z.number().positive()
});
