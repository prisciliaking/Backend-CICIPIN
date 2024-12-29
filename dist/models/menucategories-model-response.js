"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toMenuCategoryResponse = toMenuCategoryResponse;
function toMenuCategoryResponse(menuCategories, menuCategoriesPairings) {
    return {
        id: menuCategories.id,
        categoryName: menuCategories.categoryName,
        menuCategoriesPairings: menuCategoriesPairings.id
    };
}
