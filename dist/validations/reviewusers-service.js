"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewusersValidation = void 0;
const zod_1 = require("zod");
class reviewusersValidation {
}
exports.reviewusersValidation = reviewusersValidation;
reviewusersValidation.CREATE = zod_1.z.object({
    ReviewsID: zod_1.z.number().positive(),
    UsersID: zod_1.z.number().positive()
});
reviewusersValidation.UPDATE = zod_1.z.object({
    ReviewsID: zod_1.z.number().positive(),
    UsersID: zod_1.z.number().positive()
});
reviewusersValidation.DELETE = zod_1.z.object({
    ReviewsID: zod_1.z.number().positive(),
    UsersID: zod_1.z.number().positive()
});
