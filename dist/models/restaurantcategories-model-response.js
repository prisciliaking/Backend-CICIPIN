"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toRestaurantCategoryResponse = toRestaurantCategoryResponse;
function toRestaurantCategoryResponse(restaurantCategories, restaurantCategoriesPairings) {
    return {
        id: restaurantCategories.id,
        categoryName: restaurantCategories.categoryName,
        restaurantCategoriesPairings: restaurantCategoriesPairings.id
    };
}
