"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toRestaurantImageResponse = toRestaurantImageResponse;
function toRestaurantImageResponse(restaurantImages) {
    return {
        id: restaurantImages.id,
        image: restaurantImages.image,
        description: restaurantImages.description,
        RestaurantsID: restaurantImages.RestaurantsID
    };
}
