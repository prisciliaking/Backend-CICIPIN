"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toRestaurantCategoryResponse = toRestaurantCategoryResponse;
function toRestaurantCategoryResponse(restaurantCategories) {
    return {
        id: restaurantCategories.id,
        categoryName: restaurantCategories.categoryName,
    };
}
