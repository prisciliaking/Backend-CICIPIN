"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toRestaurantCategoryPairingResponse = toRestaurantCategoryPairingResponse;
function toRestaurantCategoryPairingResponse(restaurantCategoriesPairings) {
    return {
        id: restaurantCategoriesPairings.id,
        restaurantID: restaurantCategoriesPairings.restaurantID,
        RestaurantCategoriesID: restaurantCategoriesPairings.RestaurantCategoriesID,
    };
}
