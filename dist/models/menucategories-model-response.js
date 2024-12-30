"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toMenuCategoryResponse = toMenuCategoryResponse;
function toMenuCategoryResponse(menuCategories) {
    return {
        id: menuCategories.id,
        categoryName: menuCategories.categoryName
    };
}
